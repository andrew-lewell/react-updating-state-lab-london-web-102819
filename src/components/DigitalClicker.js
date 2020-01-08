import React from "react";

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  };

  handleClick = () => {
    this.setState(pState => {
      return {
        timesClicked: pState.timesClicked + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
