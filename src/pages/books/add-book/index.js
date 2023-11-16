import { Typography, Form, Input, Button } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from 'yup';
import axios from "axios";

const { Title } = Typography;

const BookSchema = Yup.object().shape({
  title: Yup.string().required('Kitap adı zorunlu'),
  author: Yup.string().required('Yazar adı zorunlu'),
  price: Yup.number()
    .positive('Pozitif Fiyat zorunlu')
    .required('Fiyat Zorunlu'),
  description: Yup.string().required('Açıklama Zorunlu'),
});

const AddBook = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      price: '',
      description: '',
    },
    validationSchema: BookSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.post("http://localhost:3001/books", values);
        router.push("/");
      } catch (error) {
        console.error("Kitap eklenirken bir hata oluştu", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Title level={2}>Add Book</Title>
      <Form onFinish={formik.handleSubmit}>
        <Form.Item
          name="title"
          validateStatus={formik.errors.title ? 'error' : ''}
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
          validateStatus={formik.errors.author ? 'error' : ''}
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
          validateStatus={formik.errors.price ? 'error' : ''}
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
        <Form.Item
          name="description"
          validateStatus={formik.errors.description ? 'error' : ''}
          help={formik.errors.description}
        >
          <Input
            name="description"
            placeholder="Description"
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
