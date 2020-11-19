import Axios from "axios";

function AxiosWithAuth() {
  Axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}

export AxiosWithAuth;