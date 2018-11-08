import React, { Component } from 'react';
import '../index.css';
import LEDInput from './LEDInput'
import pic from '../ill.jpg'

class App extends Component {
  state = {
            speed: '5',
            brightness: '5',
            mode: '1',
            color: '#f8e329',
            time: '08:00'
          }

  handleChange = (event) => {
      this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
     event.preventDefault();
     console.log(this.state)
  }

  getBrightnessInput = () => (<input className='led-input-slider' id='brightness' type='range' min="0" max="10" step="1" value={this.state.brightness} onChange={this.handleChange} />)
  getSpeedInput = () => (<input className='led-input-slider' id='speed' type='range' min="0" max="10" step="1" value={this.state.speed} onChange={this.handleChange} />)
  getTimeInput = () => (<input className='led-input-time' id='time' type='time' min="0:00" max="23:59" value={this.state.time} onChange={this.handleChange} />)
  getColorInput = () => (<input className='led-input-color' id='color' type='color' min="0:00" max="23:59" value={this.state.color} onChange={this.handleChange} />)
  getModeInput = (modesAmount) => {
      const renderOption = (mode) => <option value={mode} key={mode}>{mode}</option>
      const options = []
      for (let i = 0; i < modesAmount; i++) {
        options.push(renderOption(i + 1))
      }
      return (
        <select id='mode' className='led-input-mode' onChange={this.handleChange}>
            {options}
        </select>
      )
  }

  render() {
    const brightnessInput = this.getBrightnessInput()
    const speedInput = this.getSpeedInput()
    const timeInput = this.getTimeInput()
    const colorInput = this.getColorInput()
    const modeInput = this.getModeInput(20)
    return (
      <div className='wrapper' key='wrapper'>
          <form onSubmit={this.handleSubmit}>
              <LEDInput value={this.state.brightness} input={brightnessInput} label='Brightness' key="brightness" withnum />
              <LEDInput value={this.state.speed} input={speedInput} label='Speed' key="speed" withnum />
              <LEDInput value={this.state.time} input={timeInput} label='Time' key="time" />
              <LEDInput value={this.state.color} input={colorInput} label='Color' key="color" />
              <LEDInput value={this.state.mode} input={modeInput} label='Mode' key="mode" />
              <button className='apply-button' htmltype="submit"> Apply </button>
          </form>
      </div>
    );
  }
}

export default App;
