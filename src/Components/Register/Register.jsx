import Joi, { func } from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //! Start States Zone

  const [getData, setGetData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
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

      // console.log("RESPONSEEEEE", response);

      if (!response.ok) {
        let errorMsg = await response.text();

        // console.log("ErrorMSGGGG", errorMsg);
        setError(errorMsg);
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMsg}`
        );
      }

      setIsLoding(false);
      navigate("/login");
    } catch (error) {
      console.error("you have an error", error);
      setIsLoding(false);
    }
  }

  // console.log("ERORRRRRR", error);
  //! ===================== End Send data ======================================

  function validateRegisterForm() {
    let scheme = Joi.object({
      username: Joi.string()
        .pattern(/^[A-Z]/)
        .min(3)
        .max(15)
        .required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^[A-Z][a-z]{3,6}/)
        .required(),
      country: Joi.string().required(),
    });

    // console.log(scheme.validate(getData, { abortEarly: false }));
    return scheme.validate(getData, { abortEarly: false });
  }

  const handleSubmit = (e) => {
    setIsLoding(true);
    e.preventDefault();
    let validateForm = validateRegisterForm();

    if (validateForm.error) {
      // console.log(validateForm.error);
      setErrorList(validateForm.error.details);
      setIsLoding(false);
    } else {
      sendRegDataToApi();
    }
  };

  // console.log("ERRORlisttttttttt", errorList);

  return (
    <>
      {/* {errorList.map((err, index) => {
        if (err.context.label === "password") {
          return (
            <div className="alert alert-danger my-2">Password not valid</div>
          );
        } else {
          return <div className="alert alert-danger my-2">{err.message}</div>;
        }
      })} */}
      <div className="parent d-flex justify-content-around">
        <div className="left-side out-form">
          <form
            action=""
            className="form-design w-75 mx-auto"
            onSubmit={handleSubmit}
          >
            <label htmlFor="username" className="mt-4">
              userName:{" "}
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control my-input  text-white"
              onChange={handleChange}
            />
            {/* Start appears the validation error for each input */}
            {errorList.filter((err) => err.context.label === "username")[0] ? (
              <div className="mx-3 text-danger textSize">
                {
                  errorList.filter((err) => err.context.label === "username")[0]
                    ?.message
                }
              </div>
            ) : (
              ""
            )}
            {/* End appears the validation error for each input */}

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
              <div className="mx-3 text-danger textSize">
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
              className="form-control my-input m-2 text-white "
              onChange={handleChange}
            />
            {/* Start appears the validation error for each input */}
            {errorList.filter((err) => err.context.label === "password")[0] ? (
              <div className="mx-3 text-danger textSize">
                {
                  errorList.filter((err) => err.context.label === "password")[0]
                    ?.message
                }
              </div>
            ) : (
              ""
            )}
            {/* End appears the validation error for each input */}
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              name="country"
              id="country"
              className="form-control my-input m-2 text-white"
              onChange={handleChange}
            />
            {/* Start appears the validation error for each input */}
            {errorList.filter((err) => err.context.label === "country")[0] ? (
              <div className="mx-3 text-danger textSize">
                {
                  errorList.filter((err) => err.context.label === "country")[0]
                    ?.message
                }
              </div>
            ) : (
              ""
            )}
            {/* End appears the validation error for each input */}

            <button type="submit" className="btn btn-light my-4 w-25">
              {isLoding === true ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
        {/* ===================================== */}
        <div
          className="right-side w-50 d-flex justify-content-center"
          style={{ marginTop: "110px" }}
        >
          <div className="loginImage ">
            <img src="assets/SignUp.png" alt="" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
