import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? "http://localhost:5000/api" : "api",
  withCredentials: true, // send cookies to the server
});
// import.meta.mode === "development" ?
export default axiosInstance;
