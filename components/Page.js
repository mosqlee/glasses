import Link from 'next/link'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'
class Page extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    let linkTo = this.props.linkTo;
    let title = this.props.title;
    console.log(this.props,44444);
    return (
      <div>
        <h1>{title}</h1>
        <div>{}</div>
        <Clock lastUpdate={this.props.lastUpdate} light={light} />
        <AddCount />
        <nav>
          <Link href={linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    )
  }
};
export default connect((state) => ({
  lastUpdate: state.lastUpdate,
  light: state.light
}))(Clock)
