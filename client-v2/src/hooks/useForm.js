import { useState } from "react";
import Axios from "axios";

export function useForm(initialVals) {
  const [formVals, setFormVals] = useState(initialVals);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVals({
      ...formVals,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser;
    if (formVals.hasOwnProperty("role")) {
      newUser = {
        ...formVals,
        role: formVals.role ? 2 : 1,
      };
    } else {
      newUser = formVals;
    }
    Axios.post("https://covid-bod.herokuapp.com/api/auth/login", newUser)
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
  };
  return [formVals, setFormVals, handleChange, handleSubmit];
}
