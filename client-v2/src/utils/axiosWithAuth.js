import Axios from "axios";

function axiosWithAuth() {
  Axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}

export axiosWithAuth;