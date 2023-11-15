import { loginInitialValues, loginValidationSchema } from "@/validations/login";
import { Card, Form, Input, Button } from "antd";
import { Formik } from "formik";
import ErrorMessage from "@/components/ErrorMessage";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const { Title } = Typography;

const LoginForm = () => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState(loginInitialValues);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("email");
    setInitialValues({ email: storedEmail, password: storedPassword });
  }, []);

  const handleFormSubmit = (values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    router.push("/");
    console.log("Formunu başarıyla gönderildi");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, setFieldValue, errors, handleSubmit }) => (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 600,
              height: 600,
              marginBottom: 20,
            }}
          >
            <Title level={2}>Login</Title>
            <Form
              style={{ width: 500 }}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item name="email" label="Email">
                <Input
                  value={values.email}
                  onChange={(event) =>
                    setFieldValue("email", event.target.value)
                  }
                  placeholder="Email"
                />
                <ErrorMessage errorMessage={errors.email} />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password
                  value={values.password}
                  onChange={(event) =>
                    setFieldValue("password", event.target.value)
                  }
                  placeholder="Password"
                  type="password"
                />
                <ErrorMessage errorMessage={errors.password} />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
