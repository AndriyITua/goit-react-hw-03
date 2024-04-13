import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too large")
    .required("Required"),
  phone: Yup.number().min(9, "Too short").required("Required"),
});

export default function ContactForm() {
  const handleSubmit = (values, action) => {
    console.log("handleSubmit", values);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor="">Name</label>
          <Field className={css.input} name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.container}>
          <label htmlFor="">Phone number</label>
          <Field className={css.input} type="tel" name="phone" />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <div className={css.containerButton}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
