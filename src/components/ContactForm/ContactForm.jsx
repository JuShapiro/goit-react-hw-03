import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(phoneRegExp, "Please follow pattern 123-45-67"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const nameContact = useId();
  const numberContact = useId();
  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.containerForm}>
            <label htmlFor={nameContact} className={css.labelForm}>
              Name
            </label>
            <Field
              name="name"
              type="text"
              id={nameContact}
              placeholder="Name ..."
              className={css.fieldForm}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.containerForm}>
            <label htmlFor={numberContact} className={css.labelForm}>
              Number
            </label>
            <Field
              name="number"
              type="tel"
              placeholder="123-45-67"
              id={numberContact}
              className={css.fieldForm}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.btnForm}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
