import { Typography, Form, Input, Button } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import {
  addBookFormInitialValue,
  addBookValidationSchema,
} from "@/validations/addBook";
import axios from "axios";
const { Title } = Typography;

const AddBook = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: addBookFormInitialValue,
    validationSchema: addBookValidationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/books", values);
        router.push("/");
      } catch (error) {
        console.error("Kitap eklenirken bir hata oluştu", error);
      }
    },
  });
  return (
    <>
      <Title level={2}>Add Book</Title>
      <Form onFinish={formik.handleSubmit}>
        <Form.Item name="title">
          <Input
            name="title"
            placeHolder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item name="author">
          <Input
            name="author"
            placeHolder="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item name="price">
          <Input
            name="price"
            type="number"
            placeHolder="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item name="description">
          <Input
            name="description"
            placeHolder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={formik.isSubmitting}
          >
            Add Book
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddBook;
