import axios from "axios";

const api = axios.create({
  baseURL: "https://vote-polling-pvcc.onrender.com/api", // ✅ Updated backend URL from Render
});

export default api;
