import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3000/api"
})


export const getReq=()=>{
    return api.get("/data");
}

export const getIndReq=(name)=>{
    return api.get(`/data?search=${name}`)
}