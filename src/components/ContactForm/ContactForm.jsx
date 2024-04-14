import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css";

const phoneRegex = RegExp(/^\d{3}-\d{2}-\d{2}$/);

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too large")
    .required("required"),
  phone: Yup.string()
    .matches(phoneRegex, "Nummer format: 000-00-00")
    .required("required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, action) => {
    const { username, phone } = values;
    const id = nanoid();
    onAdd({
      name: username,
      number: phone,
      id: id,
    });
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
