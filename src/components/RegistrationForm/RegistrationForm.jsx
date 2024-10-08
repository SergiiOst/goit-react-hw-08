import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Register</button>
          <p>
            Are you already registered?<Link to="/login">Sing in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
