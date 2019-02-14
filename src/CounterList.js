import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default CounterList;
