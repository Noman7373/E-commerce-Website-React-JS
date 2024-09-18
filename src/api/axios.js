import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.Vite_BACKEND_URL,
  withCredentials: true,
});

export default Axios;
