import axios from "axios";
export const request=axios.create({
    baseURL: 'http://localhost:9000',
});

export const get =async(path, option ={}) =>{
    const response =await request.get(path, option);
    return response.data;
};
export default request;