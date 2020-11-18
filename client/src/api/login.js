import axios from "axios";

export const login = (user) => {
  console.log(user);
  return axios
    .post(
      // "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/api/auth/login",
      "http://localhost:5000/api/auth/login"
      user
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
