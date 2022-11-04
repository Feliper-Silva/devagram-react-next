import axios from "axios";

export const Post = (url, data) => {
  const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/api"
  });
  return Api.post(url, data);
};

