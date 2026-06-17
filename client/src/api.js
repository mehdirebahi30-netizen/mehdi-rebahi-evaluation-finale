import axios from "axios";

const api = axios.create({
  baseURL: "https://bibliotheque-backend-7ezs.onrender.com/api",
});

export default api;