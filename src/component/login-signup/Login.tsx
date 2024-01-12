import { Formik } from "formik";
import * as Yup from "yup";
import "./loginSignup.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { loginApi } from "../../lib/LoginSignup.api";
const Login = () => {
  //!navigation
  const navigate = useNavigate();

  //!react-query using Mutation
  const login = useMutation({
    mutationKey: ["login-Key"],
    mutationFn: (values) => loginApi(values),
    onSuccess: (res) => {
      //?Setting the access token in localStorage
      const accesstoken = res?.data?.accesstoken;
      localStorage.setItem("accesstoken", accesstoken);

      //?setting role in localStorage
      const userData = res?.data?.findUser;
      localStorage.setItem("role", userData?.role);

      navigate("/home ");
    },
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8).max(30),
      })}
      onSubmit={(values: any) => {
        login.mutate(values);
      }}
    >
      {(formik: any) => (
        <form
          onSubmit={formik.handleSubmit}
          className="login-card-main form-parent "
        >
          <div className="card-login">
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#45474B",
              }}
            >
              Log-In{" "}
            </h2>

            <div style={{ width: "80%" }}>
              <input
                // id="standard-basic"
                label="Email"
                name="email"
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
            <div style={{ width: "80%" }}>
              <input
                // id="standard-basic"
                label="Password"
                placeholder="password"
                variant="standard"
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

            <div>
              <p
                onClick={() => navigate("/signup")}
                style={{
                  cursor: "pointer",
                  color: "#7743DB",
                  fontSize: "19px",
                }}
              >
                Don't Have an account?
              </p>
            </div>
            <Button className="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Login;
