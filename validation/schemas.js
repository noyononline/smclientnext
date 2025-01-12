import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm Password doesn't match"
    ),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});
