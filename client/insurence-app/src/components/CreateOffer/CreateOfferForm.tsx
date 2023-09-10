import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import Button from "../CustomButtons";
import { createOffersValidationSchema } from "../../validation/validationSchemas";
import { useNavigate } from "react-router-dom";
import { forwardRef, useState } from "react";
// import moment from "moment";

interface FormValues {
  firstName: string;
  lastName: string;
  birthYear: string;
  insuranceType: string;
  carManufacturer: string;
  carYear: number | string;
  licensePlate: string;
}

interface SlectedInputProps {
  children: React.ReactNode;
  name: string;
  as: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const inputStyle =
  "w-full text-black pl-6 pr-3 py-2 mb-4 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500";
const errorInputStyle =
  "w-full text-black pl-6 pr-3 py-2 mb-4 rounded-lg border-2 border-red-500 outline-none bg-red-200";
const errorStyle = "text-red-400 pb-2 w-full";
const labelStyle = "mb-1";

const SelectInsurance = forwardRef(
  (props: SlectedInputProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    return (
      <Field
        {...props}
        innerRef={ref}
        as={props.as}
        className={props.className}
      >
        {props.children}
      </Field>
    );
  }
);

const FormContent = () => {
  const formik = useFormikContext();
  const navigate = useNavigate();
  const [selectedInsuranceType, setSelectedInsuranceType] =
    useState<string>("");
  const currentYear = new Date().getFullYear();

  return (
    <Form className="flex flex-col">
      {/* lastName Input */}
      <label htmlFor="lastName" className={labelStyle}>
        * Nume
      </label>
      <Field
        type="text"
        name="lastName"
        className={`${
          formik.errors?.lastName && formik.touched?.lastName
            ? errorInputStyle
            : inputStyle
        }`}
        placeholder="Jhon"
      />
      <ErrorMessage name="lastName" component="div" className={errorStyle} />

      {/* firstName Input */}
      <label htmlFor="firstName" className={labelStyle}>
        * Prenume
      </label>
      <Field
        type="text"
        name="firstName"
        className={`${
          formik.errors?.firstName && formik.touched?.firstName
            ? errorInputStyle
            : inputStyle
        }`}
        placeholder="Doe"
      />
      <ErrorMessage name="firstName" component="div" className={errorStyle} />

      {/* birthYear Input */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-44">
          <label htmlFor="birthYear" className={labelStyle}>
            * Data Nasterii
          </label>

          <Field
            type="date"
            format="yyyy/MM/dd"
            name="birthYear"
            min="1900-01-01"
            max={`${currentYear}-12-31`}
            className={inputStyle}
          />

          <ErrorMessage
            name="birthYear"
            component="div"
            className={errorStyle}
          />
        </div>

        {/* insuranceType Input */}
        <div className="flex flex-col md:w-44">
          <label htmlFor="insuranceType" className={labelStyle}>
            * Tipul Asigurarii
          </label>
          <SelectInsurance
            className={`${inputStyle} font-semibold`}
            name="insuranceType"
            as="select"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              console.log(e.target.value);
              formik.setFieldValue("insuranceType", e.target.value);
              setSelectedInsuranceType(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="Casco">Casco</option>
            <option value="RCA">RCA</option>
          </SelectInsurance>
          <ErrorMessage
            name="insuranceType"
            component="div"
            className={errorStyle}
          />
        </div>
      </div>

      {/* carManufacturare Input */}
      {selectedInsuranceType === "RCA" && (
        <div className="flex-col w-64">
          <div className="flex flex-col">
            <label htmlFor="carManufacturer" className={labelStyle}>
              * Marca Masinii
            </label>
            <Field
              type="text"
              name="carManufacturer"
              className={`${
                formik.errors?.carManufacturer &&
                formik.touched?.carManufacturer
                  ? errorInputStyle
                  : inputStyle
              }`}
              placeholder="Audi"
            />
            <ErrorMessage
              name="carManufacturer"
              component="div"
              className={errorStyle}
            />
          </div>

          {/* carYear Input */}
          <div className="flex flex-col">
            <label htmlFor="carYear" className={labelStyle}>
              * Anul Fabricatiei
            </label>
            <Field
              type="text"
              name="carYear"
              className={`${
                formik.errors?.carYear && formik.touched?.carYear
                  ? errorInputStyle
                  : inputStyle
              }`}
              placeholder="2000"
            />
            <ErrorMessage
              name="carYear"
              component="div"
              className={errorStyle}
            />
          </div>

          {/* licensePlace Input */}

          <div className="flex flex-col">
            <label htmlFor="licensePlate" className={labelStyle}>
              * Nr. de inmatriculare
            </label>
            <Field
              type="text"
              name="licensePlate"
              className={`${
                formik.errors?.licensePlate && formik.touched?.licensePlate
                  ? errorInputStyle
                  : inputStyle
              }`}
              placeholder="XX-YY-ZZZ"
            />
            <ErrorMessage
              name="licensePlate"
              component="p"
              className={errorStyle}
            />
          </div>
        </div>
      )}

      <div className="pt-4 flex justify-end">
        <Button
          className="hover:bg-blue-400 mr-2 hover:outline-blue-400"
          styleType="creazaOfertaBtn"
          type="submit"
        >
          Creaza Oferta
        </Button>
        <Button
          styleType="cancelBtn"
          className="bg-red-400 outline outline-1 outile-red-400"
          type="button"
          onClick={() => navigate("..")}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

const CreateOfferForm = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    birthYear: "",
    insuranceType: "",
    carManufacturer: "",
    carYear: "",
    licensePlate: "",
  };

  return (
    <div className="w-full md:w-1/2 p-4 text-white bg-blue-900">
      <h1 className="uppercase text-center text-xl md:text-2xl py-3 font-bold">
        Creaza O Oferta
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={createOffersValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submited");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <FormContent />
      </Formik>
    </div>
  );
};

export default CreateOfferForm;
