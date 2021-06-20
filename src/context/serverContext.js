import Axios from 'axios';

const SERVER_URL =
  process.env.REACT_APP_API_SERVER_URL || 'https://api.witherview.com';

const api = ({
  url,
  type = 'get',
  param,
  contentType = 'application/json',
}) => {
  const accessToken = sessionStorage.getItem('accessToken');

  const headers = {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers':
      'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  };

  if (accessToken !== null) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return Axios({
    method: type,
    url: `${SERVER_URL}${url}`,
    headers,
    data: param,
    withCredentials: true,
  });
};

export default api;
