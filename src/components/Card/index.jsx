/* @flow */
import React from 'react'
import './index.scss'

type Props = {
  name: string
}
export default (props: Props) => (
  <div className="card">
    <div>Hello,{ props.name }</div>
  </div>
)
