import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44315/",
});

export default api;