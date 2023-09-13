import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../CustomButtons";
import Input from "../CustomInputs";
import { userAuthData } from "../Auth/AuthForm";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const [enteredEmailTouched, setEnteredEmailTouch] = useState<boolean>(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] =
    useState<boolean>(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";

  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouch(true);
  };
  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const handleRedirection = () => navigate("/authentification");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userSignupData = {
      email: enteredEmail.toLocaleLowerCase(),
      password: enteredPassword.toLocaleLowerCase(),
    };

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      setEnteredEmailTouch(true);
      setEnteredPasswordTouched(true);
      return;
    }

    const postUserSignup = (userSignupData: userAuthData) => {
      localStorage.setItem("userSignup", JSON.stringify(userSignupData));
    };

    postUserSignup(userSignupData);
    navigate("/jhon-doe");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full px-3">
        <div className="flex flex-col">
          <Input
            name="email"
            type="email"
            placeholder="johnsmith@example.com"
            label="Email"
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            onChange={handleEmailChange}
            isError={emailInputIsValid}
          />
        </div>
      </div>

      <div className="w-full px-3 mb-4">
        <div className="flex flex-col">
          <Input
            label="Parola"
            name="password"
            type="password"
            placeholder="************"
            value={enteredPassword}
            onChange={handlePasswordChange}
            onBlur={passwordInputBlurHandler}
            isError={passwordInputIsValid}
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-full px-3 mb-5">
          <Button
            styleType="creareContBtn"
            type="submit"
            className="min-w-full mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg font-semibold"
          >
            Creaza Cont
          </Button>
          <Button
            onClick={handleRedirection}
            styleType="defaultBtn"
            type="button"
            className="block w-full mx-auto text-blue-600 pt-3 underline"
          >
            OR Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
