import axios from "axios";

const instace = axios.create({
  baseURL: "http://localhost:1600/api",
  withCredentials: true,
});

export default instace;