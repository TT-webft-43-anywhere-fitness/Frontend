import axios from "axios";

export const signup = (user) => {
  return axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/api/auth/register",
      user
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
