import axios from "axios";

export const signup = (user) => {
  return axios
    .post(
      "https://covid-bod.herokuapp.com/api/auth/register",
      // "https://cors-anywhere.herokuapp.com/http://localhost:5000/api/auth/register",
      user
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
