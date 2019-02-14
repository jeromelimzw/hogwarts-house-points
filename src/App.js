import React, { Component } from "react";
import CounterList from "./CounterList";
import Total from "./Total";
import counters from "./counterGen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countArr: []
    };
  }

  componentDidMount() {
    this.setState({
      countArr: counters
    });
  }

  winningHouse = () => {
    return this.state.countArr.sort((a, b) => b.value - a.value)[0].color;
  };

  total = () => {
    return this.state.countArr.reduce((a, b) => a + b.value, 0);
  };

  handleUp = tarId => {
    const nextArr = this.state.countArr.map(count => {
      return count.id === tarId
        ? Object.assign({}, count, { value: count.value + 1 })
        : count;
    });
    this.setState({ countArr: nextArr });
  };

  handleDown = tarId => {
    const nextArr = this.state.countArr.map(count => {
      return count.id === tarId
        ? Object.assign({}, count, { value: count.value - 1 })
        : count;
    });
    this.setState({ countArr: nextArr });
  };

  render() {
    return (
      <div className="App">
        <CounterList
          countArr={this.state.countArr}
          handleUp={this.handleUp}
          handleDown={this.handleDown}
        />
        <Total total={this.total()} />
      </div>
    );
  }
}

export default App;
