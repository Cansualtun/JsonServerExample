import { Formik } from "formik";
import { Card, Form, Input, Button } from "antd";
import {
  registerInitialValues,
  registerValidationSchema,
} from "@/validations/register";
import { useRouter } from "next/router";
import ErrorMessage from "@/components/ErrorMessage";

import { Typography } from "antd";

const { Title } = Typography;

const RegisterForm = () => {
  // yönlendirmek için
  const router = useRouter();

  // formumun submit olması için
  const handleFormSubmit = (values) => {
    console.log("Kayıt formu gönderildi", values);
    router.push("/auth/login");
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
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
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
            <Title level={2}>Register</Title>
            <Form
              style={{ width: 500 }}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item name="username" label="Username">
                <Input
                  value={values.username}
                  onChange={(event) =>
                    setFieldValue("username", event.target.value)
                  }
                  placeholder="Username"
                />
                <ErrorMessage errorMessage={errors.username} />
              </Form.Item>
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
              <Form.Item name="phoneNumber" label="Phone Number">
                <Input
                  value={values.phoneNumber}
                  onChange={(event) =>
                    setFieldValue("phoneNumber", event.target.value)
                  }
                  placeholder="Phone Number"
                />
                <ErrorMessage errorMessage={errors.phoneNumber} />
              </Form.Item>
              <Form.Item name="address" label="Address">
                <Input
                  value={values.address}
                  onChange={(event) =>
                    setFieldValue("address", event.target.value)
                  }
                  placeholder="Address"
                />
                <ErrorMessage errorMessage={errors.address} />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
