import axios from "axios";

const PORT = 4444;

const instance = axios.create({
    baseURL: `http://localhost:${PORT}`,
});

export default instance;