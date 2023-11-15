import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Bu alan zorunludur"),
  password: Yup.string().required("Bu alan zorunludur"),
});
