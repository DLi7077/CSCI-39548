import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //state
  }

  //repeat tick() when component mounted
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // reset timer
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
