import React, { Component } from "react";
import CounterList from "./CounterList";
import Total from "./Total";
import counters from "./counterGen";
import Header from "./Header";

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
    const { countArr } = this.state;
    const { handleUp, handleDown } = this;
    const sortedArr = countArr.sort((a, b) => b.value - a.value);
    const total = countArr.reduce((a, b) => a + b.value, 0);

    return (
      <div className="mt5 ">
        <Header />
        <CounterList
          countArr={sortedArr}
          handleUp={handleUp}
          handleDown={handleDown}
        />
        <Total total={total} />
      </div>
    );
  }
}

export default App;
