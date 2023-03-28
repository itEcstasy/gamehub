import axios from "axios";

export default axios.create({
  baseURL: "https://rawg-video-games-database.p.rapidapi.com",
  params: {
    key: "71f74f52109a4807955874fc3f4c056e",
  },
  headers: {
    "X-RapidAPI-Key": "de5909cc10msh7f497185fb23578p1e92a6jsnee1c87a4fb48",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
});
