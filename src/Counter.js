import React, { Component } from "react";

class Counter extends Component {
  onUpVote = () => this.props.handleUp(this.props.id);
  onDownVote = () => this.props.handleDown(this.props.id);

  render() {
    return (
      <div className="flex content-center justify-between">
        <img
          src={this.props.imgUrl}
          width="150"
          height="150"
          className="mv1 mh2 br3 shadow-5"
        />
        <div className="f1 ba bw1 br2 mv2 b--light-blue flex pa2 bg-black shadow-5 w-90 self-center">
          <i className="fas fa-arrow-down red grow" onClick={this.onDownVote} />
          <span
            className={` ${
              this.props.count < 0
                ? "red"
                : this.props.count > 0
                ? "green"
                : "white"
            } ph2`}
          >
            {this.props.count}
          </span>
          <i className="fas fa-arrow-up green grow" onClick={this.onUpVote} />
        </div>
      </div>
    );
  }
}

export default Counter;
