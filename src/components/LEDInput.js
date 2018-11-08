import React, { Component } from 'react';
import '../index.css';

const LEDInput = ({ value, input, label, withnum }) => {
    return (
              <div className='led-input-block' key="label">
                  <label>
                      <div className='label-text'>{label}</div>
                      { withnum && <div className='slider-num'>{value || '5'}</div> }
                      { input }
                  </label>
              </div>
            )
}

export default LEDInput;
