import { Typography, Form, Input, Button, Select } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import { Option } from "antd/es/mentions";

const { Title } = Typography;

const AddBook = () => {
  const router = useRouter();
  let book = {};
  const formik = useFormik({
    initialValues: addBookFormInitialValue,
    validationSchema: addBookValidationSchema,
    onSubmit: async (values) => {
      book = bookDetail(values);
      try {
        await axios.post("http://localhost:3001/books", book);
        router.push("/");
      } catch (error) {
        console.error("Kitap eklenirken bir hata oluştu", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const bookDetail = (values) => {
    return {
      title: values.title || "",
      author: values.author || "",
      price: values.price || 0,
      currency: values.currency || "",
      description: values.description || "",
      imageUrl: values.imageUrl || "",
    };
  };
  return (
    <>
      <Title level={2}>Add Book</Title>
      <Form onFinish={formik.handleSubmit}>
        <Form.Item
          name="title"
          validateStatus={formik.errors.title ? "error" : ""}
          help={formik.errors.title}
        >
          <Input
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          name="author"
          validateStatus={formik.errors.author ? "error" : ""}
          help={formik.errors.author}
        >
          <Input
            name="author"
            placeholder="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          name="price"
          validateStatus={formik.errors.price ? "error" : ""}
          help={formik.errors.price}
        >
          <Input
            name="price"
            type="number"
            placeholder="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Select an option"
            value={formik.values.currency}
            onChange={(value) => formik.setFieldValue("currency", value)}
          >
            <Option value="TL">TL</Option>
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
          </Select>
        </Form.Item>
        <Form.Item name="description">
          <Input
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item name="imageUrl">
          <Input
            name="imageUrl"
            placeholder="ImageUrl"
            value={formik.values.imageUrl}
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
