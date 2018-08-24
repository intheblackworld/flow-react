import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeName } from '../../store/reducers/user'
import './index.scss'

class Admin extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <input
          className="input"
          onChange={e => this.props.changeName(e.target.value)}
          type="text"
          value={this.props.user.get('name')}
        />
        <div>
          Hello, {this.props.user.get('name')}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.get('user'),
})

const mapDispatchToProps = {
  changeName,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin)