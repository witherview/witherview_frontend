import api from '../context/serverContext';

const ApiGetSampleData = async (param) => {
  await api({
    url: '/this/is/sample/api',
    type: 'get',
    param,
  });
};

export default ApiGetSampleData;

// usage
// ApiGetSampleData(param).then(data=>{
//      do someting...
// })
