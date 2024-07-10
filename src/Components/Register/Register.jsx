import axios from "axios";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

const Register = () => {
  const [getData, setGetData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  const handleChange = (event) => {
    setGetData((old) => ({
      ...getData,
      [event.target.name]: event.target.value,
    }));
  };

  //! ===================== Start Send data ======================================

  async function sendRegDataToApi() {
    try {
      const response = await fetch(
        "https://gp-workwave-production.up.railway.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(getData),
        }
      );

      console.log("RESPONSEEEEE", response);

      if (!response.ok) {
        let errorMsg = await response.text();

        console.log("ErrorMSGGGG", errorMsg);
        setError(errorMsg.slice(10));
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMsg}`
        );
      }

      setIsLoding(false);
    } catch (error) {
      console.error("you have an error", error);
      setIsLoding(false);
    }
  }

  console.log("ERORRRRRR", error);
  //! ===================== End Send data ======================================

  const handleSubmit = (e) => {
    setIsLoding(true);
    e.preventDefault();
    sendRegDataToApi();
  };

  return (
    <>
      {error.length > 0 ? (
        <div className="alert alert-danger my-2">{error}</div>
      ) : (
        ""
      )}
      <form action="" className="w-50 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="username">userName: </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control my-input m-2 text-white"
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control my-input m-2 text-white"
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control my-input m-2 text-white"
          onChange={handleChange}
        />
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          id="country"
          className="form-control my-input m-2 text-white"
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-danger">
          {isLoding == true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </>
  );
};

export default Register;

// async function sendRegDataToApi() {
//   let { data } = await axios.post(
//     "https://gp-workwave-production.up.railway.app/api/auth/register",
//     getData
//   );
//   console.log("DATAAAAA", data);
//   if (data.staus === "SUCESS") {
//     console.log("successssssssssssssssssss");
//   } else {
//     console.log("Faillllllllllllllll");
//     setError(data.message);
//   }

// }  // async function sendRegDataToApi() {
//   let { data } = await axios.post(
//     "https://gp-workwave-production.up.railway.app/api/auth/register",
//     getData
//   );
//   console.log("DATAAAAA", data);
//   if (data.staus === "SUCESS") {
//     console.log("successssssssssssssssssss");
//   } else {
//     console.log("Faillllllllllllllll");
//     setError(data.message);
//   }
// }
