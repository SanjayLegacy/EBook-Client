import * as yup from "yup";

export const loginFormValidation = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});

export const registerFormValidation = yup.object().shape({
  username: yup.string().required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  password: yup.string().required("required"),
  confirmPassword: yup.string().required("required"),
});

export const bookFormValidation = yup.object().shape({
  author: yup.string().required("required"),
  title: yup.string().required("required"),
  genre: yup.string().required("required"),
  pageCount: yup.string().required("required"),
  rent: yup.string().required("required"),
  publishedYear: yup.string().required("required"),
  thumbnailUrl: yup.string().required("required"),
  shortDescription: yup.string().required("required"),
  longDescription: yup.string().required("required"),
});
