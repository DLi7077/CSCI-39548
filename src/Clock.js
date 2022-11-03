import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { end: 0 }; //state
  }

  //repeat tick() when component mounted
  componentDidMount() {
    this.timerID = setInterval(() => {
      if (this.props.stop) return;
      this.tick();
    }, 1);
  }

  // reset timer
  tick() {
    this.setState({
      end: this.state.end + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.end}ms</h2>
      </div>
    );
  }
}

export default Clock;
