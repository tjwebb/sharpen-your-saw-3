import React from "react";
import fibonacci from '../lib/fibonacci'

const FibonacciLine = React.createClass({
  propTypes: {
    index: React.PropTypes.number.isRequired,
    value: React.PropTypes.number.isRequired
  },

  render () {
    const index = this.props.index
    const value = this.props.value

    return <div key={index}>{value}</div>
  }
})

export default FibonacciLine;
