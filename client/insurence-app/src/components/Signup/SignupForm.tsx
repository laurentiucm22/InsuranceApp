import Button from "../CustomButtons";

const SignupForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Account Created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full px-3 mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Email
        </label>
        <div className="flex">
          <input
            id="email-input"
            name="email"
            type="email"
            className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="johnsmith@example.com"
          />
        </div>
      </div>

      <div className="w-full px-3 mb-4">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Parola
        </label>
        <div className="flex">
          <input
            id="password-input"
            name="password"
            type="password"
            className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="************"
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
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
