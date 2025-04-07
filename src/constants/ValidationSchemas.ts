import * as Yup from "yup";

export const LogInValidationSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    username: Yup.string().required(t("validation.usernameRequired")),
    password: Yup.string().required(t("validation.passwordRequired")),
  });


export const addNewUserValidationSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    fullName: Yup.string().required(t("validation.userForm.fullNameRequired")),
    idNo: Yup.string().required(t("validation.userForm.idNoRequired")),
    username: Yup.string().required(t("validation.userForm.usernameRequired")),
    email: Yup.string().required(t("validation.userForm.emailRequired")),
    phoneNumber: Yup.string().required(t("validation.userForm.phoneNumberRequired")),
    address: Yup.string().required(t("validation.userForm.addressRequired")),
  });
