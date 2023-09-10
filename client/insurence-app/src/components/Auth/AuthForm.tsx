import { useNavigate } from "react-router-dom";
import Button from "../CustomButtons";
import Input from "../CustomInputs";
import { useState } from "react";

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const handleSingup = () => {
    navigate("creare-cont");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = "/jhon-doe";

    navigate(userId);

    console.log({
      mail: enteredEmail,
      password: enteredPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-10/12">
      <div className="w-full px-3 mb-5 text-left">
        <label htmlFor="email-input" className="text-xs font-semibold mb-2">
          Email
        </label>
        <div className="flex justify-center">
          <Input
            value={enteredEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEnteredEmail(e.target.value)
            }
            id="email-input"
            name="email"
            type="email"
            className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="johnsmith@example.com"
          />
        </div>
      </div>

      <div className="flex text-left">
        <div className="w-full px-3 mb-4">
          <label
            htmlFor="password-input"
            className="text-xs font-semibold px-1"
          >
            Parola
          </label>
          <div className="flex justify-center">
            <Input
              value={enteredPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEnteredPassword(e.target.value)
              }
              id="password-input"
              name="password"
              type="password"
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="************"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full px-3 mb-5">
          <Button
            styleType="loginBtn"
            type="submit"
            className="block w-full mt-3 max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white rounded-lg px-4 py-4 font-semibold"
          >
            Logare
          </Button>
          <p className="w-full text-center font-bold pt-3">SAU</p>

          <Button
            onClick={handleSingup}
            styleType="creareContBtn"
            type="button"
            className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white rounded-lg px-3 py-3 font-semibold"
          >
            Creaza Cont
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
