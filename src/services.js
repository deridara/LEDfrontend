import request from 'request'
import { convertParametersForServer, convertTimeForServer } from './converters'

const BASE_URL = 'http://192.168.1.157'

const formParametersString = ({ speed, brightness, mode, color }) => {
  return `s=${speed}&b=${brightness}&m=${mode}&c=${color}`
}

export const setParameters = (data) => {
  console.log('FORM DATA', data)
  return request.get({
    url: `${BASE_URL}/set`,
    qs: convertParametersForServer(data)
  })
}

export const getStatus = () => {
  let resp;
  request.get({url: `${BASE_URL}`, headers: {"User-Agent": 'rr'}}).on('response', (response) => {
    resp = response
    console.log(resp)
  });
}

export const setDate = () => {
  const date = new Date;
  const m = date.getUTCMinutes();
  const h = date.getHours();
  console.log('SET TIME', { h, m })
  return request.get(`${BASE_URL}/set_time?h=${h}&m=${m}`)
}
