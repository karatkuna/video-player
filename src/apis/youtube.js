import axios from "axios";

const KEY = "AIzaSyBAtItJkg8QGygAFsrLz5QMjNWH5uRHHbQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResult: 5,
    key: KEY
  }
});
