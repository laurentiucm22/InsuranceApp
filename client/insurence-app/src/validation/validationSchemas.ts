import * as yup from "yup";

export const mailAndPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(
      /^(?=.*[a-zA-Z]{2})(?=.*[0-9]{2})(?=.*[@#$%^&+=]).{5,}$/,
      "Password must contain 2 letters, 2 numbers, and 1 special character (@#$%^&+=)"
    )
    .required("Password is required"),
});

export const createOffersValidationSchema = yup.object().shape({
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters long"),

  firstName: yup
    .string()
    .required("First name is required")
    .max(10, "First name cannot exceed 10 characters"),

  date: yup
    .number()
    .required("Date is required")
    .min(1900, "Year must be 1900 or later")
    .test("current-year", "Year must be current or earlier", value => {
      const currentYear = new Date().getFullYear();
      return !value || value <= currentYear;
    }),

  insuranceType: yup
    .string()
    .required("Insurance type is required")
    .oneOf(["RCA", "Casco"], "Invalid insurance type"),

  carManufacturer: yup.string().required("Car manufacturer is required"),

  year: yup
    .number()
    .required("Year is required")
    .integer("Year must be a whole number"),

  licensePlate: yup.string().required("License plate is required"),
});

export interface OfferCreatedSchema
  extends yup.InferType<typeof createOffersValidationSchema> {
  firstName: string;
  lastName: string;
  date: number;
  insuranceType: string;
  carManufacturer: string;
  year: number;
  licensePlate: string;
}
