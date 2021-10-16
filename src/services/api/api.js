import axios from "axios";

const API_URL = "https://api.unsplash.com/";

export const apiInstance = axios.create({
  baseURL: API_URL,
});
