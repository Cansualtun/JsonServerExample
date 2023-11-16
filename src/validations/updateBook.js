import * as Yup from "yup";

export const updateBookFormInitialValue = {
  title: "",
  author: "",
  price: 0,
  description: "",
  imageUrl:""
};

export const updateBookValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  description: Yup.string().required("Description is required"),
  imageUrl: Yup.string().url("ImageUrl must be a URL")
});
