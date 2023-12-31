import LeftColumSingupSvg from "./LeftColumnSignUpSvg";
import SignupForm from "./SignupForm";

const Singup = () => {
  return (
    <div className="h-screen">
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 p-10">
              <LeftColumSingupSvg />
            </div>

            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-lg md:text-3xl text-gray-900">
                  CREAZA-TI UN CONT
                </h1>
                <p>Profita acum, este gratuit!</p>
              </div>
              <div>
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
