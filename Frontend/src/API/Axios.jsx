import axios from "axios";

const api = axios.create({
  // baseURL:"http://localhost:3000/api"                    // when in local system run

  baseURL: `${import.meta.env.VITE_APP_URI_API}/api`,
});

export const getReq = () => {
  return api.get("/data");
};

export const getIndReq = (name) => {
  return api.get(`/data?search=${name}`);
};
