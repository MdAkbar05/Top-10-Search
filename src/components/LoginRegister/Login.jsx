import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().min(5).required(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          <Navigate to="/ToptenViewer" />;
          console.log("Login Successfully");
        })
        .catch((err) => console.log(err));
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div className="login-container container">
      <form
        action="http://localhost/TTDataBase/QueryUser.php"
        method="post"
        className="login-form bg-light p-lg-4 p-sm-3 rounded"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-center text-primary">Sign in</h2>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-danger">{formik.errors.email}</span>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-danger">{formik.errors.password}</span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary m-auto w-100  d-block login"
        >
          Sign in
        </button>
        <p className="text-center">
          <a href="#" className="text-decoration-none d-block p-2">
            Forget Password?
          </a>
        </p>
        <span className="d-block">
          Haven't Account ?{" "}
          <Link to="/signup" className=" w-50">
            Resister a new account
          </Link>
        </span>
        <span className="d-block text-center">
          <Link to="/" className=" w-50 ">
            Back to home
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
