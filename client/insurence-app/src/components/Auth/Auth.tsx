import AuthForm from "./AuthForm";

const Auth = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="w-full flex ">
          <div className="hidden md:flex justify-center items-center bg-blue-500  w-1/2 p-10">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold uppercase text-lg md:text-3xl text-gray-900">
                Authentificare
              </h1>
              <div className="w-full flex justify-center items-center">
                <AuthForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
