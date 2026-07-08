import axios from "axios";

const API = axios.create({
  baseURL: "https://project-management-system-o5p6.onrender.com/api",
});

export default API;