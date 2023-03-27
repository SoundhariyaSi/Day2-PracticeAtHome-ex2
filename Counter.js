import React, { Component } from 'react'

class Counter extends Component {
    state={
        count: 0
    };
    handleClick=()=>{
        this.setState((
          prevState,{count})=>({count:prevState.count+1}));
          alert("Hey, you clicked Button")
    };
  render() {
    return <button onClick={this.handleClick}>Click me!{this.state.count}</button>;
  }
}

export default Counter