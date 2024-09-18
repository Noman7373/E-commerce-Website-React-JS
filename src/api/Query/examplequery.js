import axios from "axios";

export const fetchExample = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`);
    setData(response.data);
  } catch (err) {
    setError(err.message);
  }
};
