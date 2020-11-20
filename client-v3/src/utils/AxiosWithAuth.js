import Axios from "axios";

function AxiosWithAuth() {
  return Axios.create({
    baseURL: "https://covid-bod.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}

export default AxiosWithAuth;
