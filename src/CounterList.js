import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    return (
      <div>
        {this.props.countArr
          .sort((a, b) => b.value - a.value)
          .map(counter => {
            return (
              <Counter
                count={counter.value}
                handleUp={this.props.handleUp}
                handleDown={this.props.handleDown}
                imgUrl={counter.imgUrl}
                id={counter.id}
              />
            );
          })}
      </div>
    );
  }
}

export default CounterList;
