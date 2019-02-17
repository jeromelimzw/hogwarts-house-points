import React, { Component } from "react";

class Counter extends Component {
  onUpVote = () => this.props.handleUp(this.props.id);
  onDownVote = () => this.props.handleDown(this.props.id);

  render() {
    const { imgUrl, color, house, count } = this.props;
    const { onUpVote, onDownVote } = this;

    return (
      <div className="flex content-center justify-around o-90">
        <img
          src={imgUrl}
          width="140"
          height="140"
          className={`mv1 br3 hide-child shadow-5 grow ba bw2 pointer b--${color}`}
          alt={house}
          onClick={onUpVote}
        />
        <div className="f1 bw1 o-95 flex w-70 self-center justify-between">
          <i
            className="br3 fas fa-arrow-down white grow pa4 tc pointer ba w-third bg-light-red 0-95"
            onClick={onDownVote}
          />
          <span
            className={` ${
              count < 0 ? "red" : count > 0 ? "green" : "white"
            } pa4 bg-black br3 tc w-third mh2 fw9`}
          >
            {count}
          </span>
          <i
            className="br3 fas fa-arrow-up white grow pa4 tc pointer ba bg-green  o-95 w-third"
            onClick={onUpVote}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
