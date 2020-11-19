import Axios from "axios";

function AxiosWithAuth() {
  return Axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/",
    // "https://covid-bod.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export default AxiosWithAuth;
