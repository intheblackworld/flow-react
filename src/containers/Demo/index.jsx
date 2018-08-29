import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { throttle, autobind } from 'react-decoration'
import { changeName } from 'store/reducers/user'
import { fetchDataExample } from 'store/reducers/fetchDataExample'
import duck from 'store/HOCDucks/list'
import './index.scss'

@connect(
  state => ({
    // Transform Immutable Obj to Original Js Obj
    user: createSelector(() => state.get('user'), substate => substate.toJS())(),
    duckEx: createSelector(() => state.get('duckEx'), substate => substate.toJS())(),
    example: createSelector(() => state.get('fetchExample'), substate => substate.toJS())(),
  }),
  {
    fetchDataExample,
    changeName,
    addOne: duck('children').actions.addOne,
    reset: duck('children').actions.reset,
  },
)
export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // react-decoration util example
  @autobind
  @throttle(1000)
  addChild() {
    this.props.addOne({ name: 'test', gender: '1' })
  }

  async componentDidMount() {
    this.props.fetchDataExample(
      'api/example/get-data',
      { test: '1' },
    )
    await console.log(123)
    await console.log(process.env.NODE_ENV)
  }

  render() {
    return (
      <div>
        <input
          className="input"
          onChange={e => this.props.changeName(e.target.value)}
          type="text"
          value={this.props.user.name}
        />
        <button
          className="test"
          type="button"
          onClick={this.addChild}
        >
          add Child
        </button>
        <button
          className="test"
          type="button"
          onClick={() => this.props.reset()}
        >
          reset Children
        </button>
        <div>
          Hello, {this.props.user.name}
        </div>
        <div>
          {
            this.props.duckEx.children.map(c => (
              <div>{c.name}</div>
            ))
          }
        </div>
      </div>
    )
  }
}