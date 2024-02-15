import React from "react";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as Yup from "yup";
import "./loginSignup.css";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { signUpApi } from "../../lib/LoginSignup.api";
import { SignUpValue } from "../../lib/Types/interfaceType";

const Signup = () => {
  //!Navigation function
  const navigate = useNavigate();

  //!mutation query

  const { mutate, isLoading } = useMutation({
    mutationKey: ["Sigup-Key"],
    mutationFn: (values: SignUpValue) => signUpApi(values),
    onSuccess: (res) => {
      navigate("/login");
    },
  });

  //!Initial values
  const InitialValues: SignUpValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: new Date(),
    gender: "",
    role: "",
    number: "",
  };

  if (isLoading) {
    // Need of a loader
    return <h1>LOADING...</h1>;
  }

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={Yup.object({
        firstName: Yup.string().required("FirstName is required"),
        lastName: Yup.string().required("LastName is required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8).max(30).required("Password is required"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match"
        ),

        gender: Yup.string()
          .oneOf(["male", "female"])
          .required("Please specify your gender"),
        dob: Yup.date()
          .required("Date of Birth is required")
          .required("DOB is required"),
        role: Yup.string()
          .required("role is required")
          .oneOf(["buyer", "seller"]),
        number: Yup.string().required("Phone Number is Required"),
      })}
      onSubmit={(values) => {
        delete values?.confirmPassword;
        mutate(values);
      }}
    >
      {(formik: any) => (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: "flex", marginTop: "3rem" }}
          className="form-parent"
        >
          <div
            className="card-signup"
            style={{ paddingTop: "2rem 4rem 0 4rem" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#45474B",
              }}
            >
              Sign-In{" "}
            </h2>

            <div style={{ display: "flex", gap: "1rem" }}>
              {/* first Name  */}
              <div>
                <input
                  placeholder="FirstName"
                  {...formik.getFieldProps("firstName")}
                  style={{
                    width: "100%",
                  }}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </div>
              {/* Last Name  */}
              <div>
                <input
                  placeholder="LastName"
                  {...formik.getFieldProps("lastName")}
                  style={{
                    width: "100%",
                  }}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            {/* //email  */}
            <div style={{ width: "100%" }}>
              <input
                placeholder="example@gmail.com"
                variant="standard"
                type="email"
                {...formik.getFieldProps("email")}
                style={{
                  width: "100%",
                }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            {/* //password section  */}
            <div style={{ width: "100%" }}>
              <input
                placeholder="Password"
                type="password"
                style={{
                  width: "100%",
                }}
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            {/* //Confirm password  */}
            <div style={{ width: "100%" }}>
              <input
                placeholder="Confirm password"
                type="password"
                style={{
                  width: "100%",
                }}
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>

            {/* Date of birth */}
            <div style={{ width: "100%" }}>
              <input
                placeholder="Date of Birth"
                style={{
                  width: "100%",
                }}
                {...formik.getFieldProps("dob")}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div>{formik.errors.dob}</div>
              ) : null}
            </div>
            {/* Phone Number  */}
            <div style={{ width: "100%" }}>
              <input
                placeholder="Phone Number"
                style={{
                  width: "100%",
                }}
                {...formik.getFieldProps("number")}
              />
              {formik.touched.number && formik.errors.number ? (
                <div>{formik.errors.number}</div>
              ) : null}
            </div>
            {/* gender  */}
            <div style={{ width: "100%" }}>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
                {...formik.getFieldProps("gender")}
                className="select-signup"
              >
                <option style={{ color: "gray" }}>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                {/* <option value="3">Three</option> */}
              </Form.Select>

              {formik.touched.gender && formik.errors.gender ? (
                <div>{formik.errors.gender}</div>
              ) : null}
            </div>

            {/* Role  */}
            <div style={{ width: "100%" }}>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
                {...formik.getFieldProps("role")}
                className="select-signup"
              >
                <option style={{ color: "gray" }}>Role</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                {/* <option value="3">Three</option> */}
              </Form.Select>

              {formik.touched.role && formik.errors.role ? (
                <div>{formik.errors.role}</div>
              ) : null}
            </div>
            {/* //button and link to login page  */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "5rem",
              }}
            >
              <p
                onClick={() => navigate("/login")}
                style={{
                  cursor: "pointer",
                  color: "#7743DB",
                  fontSize: "15px",
                }}
              >
                Already Have an account?
              </p>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Signup;
