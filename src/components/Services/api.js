import axios from "axios";

const api = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },    
  baseURL: "https://localhost:44315/",
});
 
export default api; 