import React, { Component } from "react";
import "../index.css";
import LEDInput from "./LEDInput";
import { setParameters, setDate, getStatus } from "../services.js";
import pic from "../ill.jpg";

export const brightnessSliderMax = 10;
export const speedSliderMax = 10;

class App extends Component {
  state = {
    currentStatus: "",
    params: {
      speed: "5",
      brightness: "5",
      mode: "1",
      color: "#f8e329",
      time: "08:00"
    }
  };

  componentDidMount = () => {
    setDate();
    console.log("DID MOUNT");
    this.setState({ currentStatus: getStatus() || "noup" });
  };

  handleRefresh = () => {
    this.setState({ currentStatus: getStatus() || "noup" });
  };

  handleChange = event => {
    this.setState({
      params: { ...this.state.params, [event.target.id]: event.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    setParameters(this.state.params);
    console.log("FORM SUBMIT", this.state);
  };

  getBrightnessInput = () => (
    <input
      className="led-input-slider"
      id="brightness"
      type="range"
      min="0"
      max={brightnessSliderMax}
      step="1"
      value={this.state.params.brightness}
      onChange={this.handleChange}
    />
  );

  getSpeedInput = () => (
    <input
      className="led-input-slider"
      id="speed"
      type="range"
      min="0"
      max={speedSliderMax}
      step="1"
      value={this.state.params.speed}
      onChange={this.handleChange}
    />
  );

  getTimeInput = () => (
    <input
      className="led-input-time"
      id="time"
      type="time"
      min="0:00"
      max="23:59"
      value={this.state.params.time}
      onChange={this.handleChange}
    />
  );

  getColorInput = () => (
    <input
      className="led-input-color"
      id="color"
      type="color"
      min="0:00"
      max="23:59"
      value={this.state.params.color}
      onChange={this.handleChange}
    />
  );

  getModeInput = modesAmount => {
    const renderOption = mode => (
      <option value={mode} key={mode}>
        {mode}
      </option>
    );
    const options = [];
    for (let i = 0; i < modesAmount; i++) {
      options.push(renderOption(i + 1));
    }
    return (
      <select id="mode" className="led-input-mode" onChange={this.handleChange}>
        {options}
      </select>
    );
  };

  render() {
    console.log(this.state);
    const brightnessInput = this.getBrightnessInput();
    const speedInput = this.getSpeedInput();
    const timeInput = this.getTimeInput();
    const colorInput = this.getColorInput();
    const modeInput = this.getModeInput(20);
    return (
      <div className="wrapper" key="wrapper">
        <p>{this.state.currentStatus}</p>
        <button onClick={this.handleRefresh}>Refresh</button>
        <form onSubmit={this.handleSubmit}>
          <LEDInput
            value={this.state.params.brightness}
            input={brightnessInput}
            label="Brightness"
            key="brightness"
            withnum
          />
          <LEDInput
            value={this.state.params.speed}
            input={speedInput}
            label="Speed"
            key="speed"
            withnum
          />
          <LEDInput input={timeInput} label="Time" key="time" />
          <LEDInput input={colorInput} label="Color" key="color" />
          <LEDInput input={modeInput} label="Mode" key="mode" />
          <button className="apply-button" htmltype="submit">
            Apply
          </button>
        </form>
      </div>
    );
  }
}

export default App;
