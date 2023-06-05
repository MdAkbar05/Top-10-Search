import React, { useState } from "react";
import Login from "./Login";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(4).required(),
      email: Yup.string().email().min(5).required(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log("Registration Successfully");
          <Navigate to="/ToptenViewer" />;
        })
        .catch((err) => console.log(err));
      console.log(values);
      resetForm({ values: "" });
      // const url = "http://localhost/TTDataBase/QueryUser.php";

      // let SignUpData = new FormData();
      // SignUpData.append("username", values.username);
      // SignUpData.append("email", values.email);
      // SignUpData.append("password", values.password);
    },
  });

  return (
    <div className="register-container">
      <form
        className="register-form bg-light p-lg-4 p-sm-3 rounded"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-center text-primary">Register</h2>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik.errors.username && (
            <span className="text-danger">{formik.errors.username}</span>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="email"
            name="email"
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
          Register
        </button>
        <p className="text-center">
          <a href="#" className="text-decoration-none d-block p-2">
            Forget Password?
          </a>
        </p>
        <span className="d-block">
          Have an Account ?{" "}
          <Link to="/Login" className=" w-50">
            Sign in your acoount
          </Link>
        </span>
        <span className="d-block text-center">
          <Link to="/ToptenViewer" className=" w-50 ">
            Back to home
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
