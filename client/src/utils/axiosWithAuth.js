import Axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return Axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/",
    // "https://cors-anywhere.herokuapp.com/http://localhost:5000/",
    headers: {
      authorization: token,
    },
  });
};
