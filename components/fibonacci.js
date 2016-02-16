import _ from "lodash";
import React from "react";
import fibonacci from '../lib/fibonacci'
import FibonacciLine from './fibonacci-line'

const Fibonacci = React.createClass({
  propTypes: {
    length: React.PropTypes.number.isRequired
  },

  render () {
    return (
      <div>
        {fibonacci.iterative(this.props.length).map(elem => {
          return <FibonacciLine index={elem.key} value={elem.current} />
        })}
      </div>
    );
  }
});

export default Fibonacci;
