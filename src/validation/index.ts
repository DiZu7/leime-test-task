import * as Yup from "yup";

export const validationSchema = Yup.object({
  id: Yup.number()
    .required("ID is required")
    .integer("ID must be an integer")
    .moreThan(0, "ID must be greater than 0"),
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters")
    .required("Name is required"),
  image: Yup.string()
    .required("Image URL is required")
    .matches(/^https?:\/\/.+\.(jpg|jpeg)$/i, "Must be a valid JPG URL"),
  likes: Yup.number()
    .typeError("Likes must be a number")
    .required("Likes are required")
    .min(0, "Likes must be between 0 and 99")
    .max(99, "Likes must be between 0 and 99")
    .default(() => Math.floor(Math.random() * 100)),
});
