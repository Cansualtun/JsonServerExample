import * as Yup from "yup";

export const registerInitialValues = {
  username: "",
  email: "",
  password: "",
  phoneNumber: 0,
  address: "",
};

export const registerValidationSchema = Yup.object({
  username: Yup.string().required("Kullanıcı adı zorunludur"),
  email: Yup.string()
    .required("E-posta zorunludur")
    .email("Geçerli bir e-posta adresi giriniz"),
  password: Yup.string().required("Şifre zorunludur"),
  phoneNumber: Yup.number().required("Telefon numarası zorunludur"),
  address: Yup.string()
    .min(10, "Adres en az 10 karakter olmalıdır")
    .max(50, "Adres en fazla 50 karakter olmalıdır"),
});
