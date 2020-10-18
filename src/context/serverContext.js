import Axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || '';
// const REST_API_KEY = process.env.REACT_APP_REST_API_KEY || '';

const api = ({ url, type = 'get', param }) => Axios({
  method: type,
  url: `${SERVER_URL}${url}`,
  data: param,
  // 영상 처리할 때 상황에 따라 header가 바뀔수도 있을 것 같습니다.
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  },
});

export default api;
