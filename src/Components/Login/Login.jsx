import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ saveUserData }) => {
  //! Start States Zone

  const [getData, setGetData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);

  //! End States Zone

  const handleChange = (event) => {
    setGetData((old) => ({
      ...getData,
      [event.target.name]: event.target.value,
    }));
  };

  //! ===================== Start Send data ======================================

  async function sendLogDataToApi() {
    try {
      const response = await fetch(
        "https://gp-workwave-production.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(getData),
        }
      );

      let res = await response.json();
      let data = res.data;
      localStorage.setItem("userToken", data.token);

      console.log("RESSSS", res);
      console.log("DATAAAA", data.token);
      console.log("RESPONSEEEEE", response);

      if (!response.ok) {
        let errorMsg = await response.text();

        // console.log("ErrorMSGGGG", errorMsg);
        setError(errorMsg);
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMsg}`
        );
      }

      setIsLoding(false);
      saveUserData();
      navigate("/home");
    } catch (error) {
      console.error("you have an error", error);
      setIsLoding(false);
    }
  }

  // console.log("ERORRRRRR", error);
  //! ===================== End Send data ======================================

  function validateLoginForm() {
    let scheme = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^[A-Z][a-z]{3,6}/)
        .required(),
    });

    // console.log(scheme.validate(getData, { abortEarly: false }));
    return scheme.validate(getData, { abortEarly: false });
  }

  const handleSubmit = (e) => {
    setIsLoding(true);
    e.preventDefault();

    let validateForm = validateLoginForm();

    if (validateForm.error) {
      // console.log(validateForm.error);
      setErrorList(validateForm.error.details);
      setIsLoding(false);
    } else {
      sendLogDataToApi();
    }
  };

  // console.log("ERRORlisttttttttt", errorList);

  return (
    <>
      <form action="" className="w-50 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control my-input m-2 text-white"
          onChange={handleChange}
        />
        {/* Start appears the validation error for each input */}
        {errorList.filter((err) => err.context.label === "email")[0] ? (
          <div className="mx-3 text-danger">
            {
              errorList.filter((err) => err.context.label === "email")[0]
                ?.message
            }
          </div>
        ) : (
          ""
        )}
        {/* End appears the validation error for each input */}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control my-input m-2 text-white"
          onChange={handleChange}
        />
        {/* Start appears the validation error for each input */}
        {errorList.filter((err) => err.context.label === "password")[0] ? (
          <div className="mx-3 text-danger">
            {
              errorList.filter((err) => err.context.label === "password")[0]
                ?.message
            }
          </div>
        ) : (
          ""
        )}
        {/* End appears the validation error for each input */}

        <button type="submit" className="btn btn-light my-4">
          {isLoding === true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};

export default Login;
