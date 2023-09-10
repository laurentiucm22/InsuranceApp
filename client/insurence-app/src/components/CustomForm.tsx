import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./CustomButtons";
import { mailAndPasswordValidationSchema } from "../validation/validationSchemas";

const EmailAndPasswordCustomeForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={mailAndPasswordValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div>
          <Form className="flex flex-col">
            <Field
              type="email"
              name="email"
              className="text-black border-0 outline-none mb-3 p-2"
            />
            <ErrorMessage name="email" component="div" />

            <Field
              type="password"
              name="password"
              className="text-black border-0 outline-none mb-3 p-2"
            />
            <ErrorMessage name="password" component="p" />
            <div>
              <Button
                styleType="creazaOfertaBtn"
                type="submit"
                disabled={isSubmitting}
              >
                Creaza Oferta
              </Button>
              <Button
                styleType="cancelBtn"
                type="button"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EmailAndPasswordCustomeForm;
