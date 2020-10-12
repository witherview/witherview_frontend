import { api } from "../context/serverContext";

export const ApiGetSampleData = async param => {
  return await api({
    url: `/this/is/sample/api`,
    type: "get",
    param
  });
};


//usage
// ApiGetSampleData(param).then(data=>{
//      do someting...           
// })