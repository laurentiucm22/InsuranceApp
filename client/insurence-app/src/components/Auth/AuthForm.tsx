import { useNavigate } from "react-router-dom";
import Button from "../CustomButtons";
import Input from "../CustomInputs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validUser } from "../../Redux/slices/uiSlice";
import { nanoid } from "nanoid/non-secure";

export interface userAuthData {
  email: string;
  password: string;
}

const LogInForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const [enteredEmailTouched, setEnteredEmailTouch] = useState<boolean>(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] =
    useState<boolean>(false);

  // Input validations
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";

  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  // Input Blur Handler
  const emailInputBlurHandler = () => {
    setEnteredEmailTouch(true);
  };
  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = "/jhon-doe";

    const userLoginData = {
      id: nanoid(),
      email: enteredEmail.toLocaleLowerCase(),
      password: enteredPassword.toLocaleLowerCase(),
    };

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      setEnteredEmailTouch(true);
      setEnteredPasswordTouched(true);
      return;
    }

    if (!localStorage.getItem("formData")) {
      localStorage.setItem("formData", JSON.stringify([]));
    }

    const postUserLogin = (userLoginData: userAuthData) => {
      localStorage.setItem("userLogin", JSON.stringify(userLoginData));
    };
    postUserLogin(userLoginData);
    dispatch(validUser(true));

    navigate(userId);
  };

  const handleSingupRedirection = () => {
    navigate("creaza-cont");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-10/12">
      <div className="w-full px-3 text-left">
        <div className="flex flex-col justify-center">
          <Input
            value={enteredEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEnteredEmail(e.target.value)
            }
            onBlur={emailInputBlurHandler}
            label="Email"
            id="email-input"
            name="email"
            type="email"
            className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="johnsmith@example.com"
            isError={emailInputIsValid}
          />
        </div>
      </div>

      <div className="flex text-left">
        <div className="w-full px-3">
          <div className="flex flex-col justify-center">
            <Input
              value={enteredPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEnteredPassword(e.target.value)
              }
              onBlur={passwordInputBlurHandler}
              label="Parola"
              id="password-input"
              name="password"
              type="password"
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="************"
              isError={passwordInputIsValid}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full px-3 mb-5">
          <Button
            styleType="loginBtn"
            type="submit"
            className="block w-full mt-3 max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white rounded-lg font-semibold"
          >
            Logare
          </Button>
          <p className="w-full text-center font-bold pt-3">SAU</p>

          <Button
            onClick={handleSingupRedirection}
            styleType="creareContBtn"
            type="button"
            className="block w-full mx-auto bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Creaza Cont
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
