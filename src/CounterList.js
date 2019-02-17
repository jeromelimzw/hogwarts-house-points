import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    const { countArr, handleUp, handleDown } = this.props;
    return (
      <div>
        {countArr
          .sort((a, b) => b.value - a.value)
          .map(counter => {
            return (
              <Counter
                count={counter.value}
                handleUp={handleUp}
                handleDown={handleDown}
                imgUrl={counter.imgUrl}
                id={counter.id}
                key={counter.key}
                color={counter.color}
              />
            );
          })}
      </div>
    );
  }
}

export default CounterList;
