import Axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_SERVER_URL || 'https://api.witherview.com';

const api = ({ url, type = 'get', param }) => Axios({
  method: type,
  url: `${SERVER_URL}${url}`,
  data: param,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  },
});

export default api;
