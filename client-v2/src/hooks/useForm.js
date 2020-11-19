import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export function useForm(initialVals, signup = false) {
  const [formVals, setFormVals] = useState(initialVals);
  const { push } = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVals({
      ...formVals,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup) {
      const newUser = {
        ...formVals,
        role: formVals.role ? 2 : 1,
      };
      Axios.post(
        "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/api/auth/register",
        newUser
      )
        .then((res) => console.log("Signup Successful ==>> ", res))
        .catch((err) =>
          console.log(
            "Signup Failed ==>> ",
            err.message,
            "Error Type ==>> ",
            err.type
          )
        );
    }
    Axios.post(
      "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/api/auth/login",
      {
        username: formVals.username,
        password: formVals.password,
      }
    )
      .then((res) => {
        console.log("Login Successful ==>> ", res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(
          "Login Failed ==>> ",
          err.message,
          " Error Type ==>> ",
          err.type
        );
      });
    setFormVals(initialVals);
    push("/dashboard");
  };
  return [formVals, setFormVals, handleChange, handleSubmit];
}
