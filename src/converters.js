import { brightnessSliderMax, speedSliderMax } from './components/App'

export const convertParametersForServer = ({ speed, brightness, mode, color }) => ({
    s: Math.round(speed * 255 / speedSliderMax),
    b: Math.round(brightness * 255 / brightnessSliderMax),
    m: mode,
    c: color.slice(1),
  })

export const convertTimeForServer = (time) => {
  return {
    h: time.slice(0, 2),
    m: time.slice(3, 5)
  }
}
