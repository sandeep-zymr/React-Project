import React from 'react';
import { connect } from 'react-redux';
class App extends React.Component {
  state = { count: 0 }

  increment = () => {
  
  }

  decrement = () => {
    
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <input onClick={this.decrement} type="text" value="">
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(App);