import React, { Component } from "react";

class Counter extends Component {
  onUpVote = () => this.props.handleUp(this.props.id);
  onDownVote = () => this.props.handleDown(this.props.id);

  render() {
    return (
      <div className="flex content-center">
        <img
          src={this.props.imgUrl}
          width="50"
          height="50"
          className="mv1 mh1 br3 shadow-5"
        />
        <div className="f3 ba bw1 br2 mv2 b--light-blue flex justify-between pa1 bg-black shadow-5">
          <i className="fas fa-arrow-down red grow" onClick={this.onDownVote} />
          <span
            className={` ${
              this.props.count < 0
                ? "red"
                : this.props.count > 0
                ? "green"
                : "white"
            }`}
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
