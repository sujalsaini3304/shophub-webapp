import axios from "axios";
import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import useStore from "../../store";
import { Alert } from "@mui/material";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { server } = useStore();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmit(true);
    e.preventDefault();

    // ✅ Input validation
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      setMessage("All fields are required!");
      setStatusCode(400);
      setShowMessage(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setStatusCode(400);
      setShowMessage(true);
      return;
    }

    axios
      .post(`${server}/api/auth/create/user`, {
        firstname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setStatusCode(res.data.status || 200);
        setMessage(res.data.message || "Account created successfully!");
        setShowMessage(true);
      })
      .catch((err) => {
        const status = err.response?.status;
        const errorMsg =
          err.response?.data?.message ||
          err.response?.data ||
          "Something went wrong.";

        console.log("Error:", errorMsg);

        setStatusCode(status || 500);
        setMessage(errorMsg);
        setShowMessage(true);
      })
      .finally(() => {
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        setIsSubmit(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        {showMessage && (
          <Alert
            severity={
              statusCode == 201
                ? "success"
                : statusCode >= 400 && statusCode <= 500
                ? "error"
                : null
            }
          >
            {message}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 mt-3">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="firstname">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="lastname">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {isSubmit ? (
            <>
              <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
              </div>
            </>
          ) : (
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Signup
            </button>
          )}
        </form>
        <p
          className={`text-sm text-gray-600 ${
            isSubmit ? "mt-2" : "mt-4"
          } text-center`}
        >
          Already have an account?{" "}
          <Link
            to={"/login"}
            replace={true}
            className="text-blue-500 hover:underline"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
