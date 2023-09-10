import * as yup from "yup";

export const mailAndPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .email("Format email incorect.")
    .required("Email obligatoriu"),
  password: yup
    .string()
    .min(5, "Parola trebuie sa fie de min 5 caractere.")
    .matches(
      /^(?=.*[a-zA-Z]{2})(?=.*[0-9]{2})(?=.*[@#$%^&+=]).{5,}$/,
      "Password trebuie sa contina 2 litere, 2 cifre si 1 caracter special de forma (@#$%^&+=)"
    )
    .required("Password is required"),
});

export interface MailAndPasswordSchemaTypes
  extends yup.InferType<typeof mailAndPasswordValidationSchema> {
  email: string;
  password: string;
}

// const getCurrentYear = () => new Date().getFullYear();

export const createOffersValidationSchema = yup.object({
  lastName: yup
    .string()
    .required("Numele este obligatoriu.")
    .min(3, "Numele trebuie sa aiba cel putin 3 caractere."),

  firstName: yup
    .string()
    .required("Prenumele este obligatoriu.")
    .max(10, "Prenumele trebuie sa fie maxim de 10 caractere."),

  // birthYear: yup
  //   .date()
  //   .required("Data este obligatorie.")
  //   .min(1900, "Anul trebuie sa fie mai mare de anul 1900.")
  //   .max(getCurrentYear(), "Anul trebuie sa fie anul curent sau un an mai mic.")
  //   .test("is-valid-date", "Data invalida", value => {
  //     if (!value) return true;
  //     const dateString = value.toString();
  //     console.log(dateString);
  //     return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
  //   }),

  insuranceType: yup
    .string()
    .required("Tipul de asigurare este obligatorie.")
    .oneOf(["RCA", "Casco"], "Invalid insurance type"),

  carManufacturer: yup.string().required("Marca este obligatorie."),

  carYear: yup
    .number()
    .required("Anul fabricarii este obligatoriu.")
    .integer("Anul trebuie sa fie un numar intreg."),

  licensePlate: yup
    .string()
    .required("Numarul de inmatriculare este obligatoriu."),
});

export interface OfferCreatedSchema
  extends yup.InferType<typeof createOffersValidationSchema> {
  firstName: string;
  lastName: string;
  // birthYear: Date;
  insuranceType: string;
  carManufacturer: string;
  carYear: number;
  licensePlate: string;
}
