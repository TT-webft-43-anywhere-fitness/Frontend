import axios from "axios";

export const login = (user) => {
  console.log(user);
  return axios
    .post(
      "https://covid-bod.herokuapp.com/api/auth/login",
      // "https://cors-anywhere.herokuapp.com/http://localhost:5000/api/auth/login",
      user
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
