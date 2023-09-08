import Login from "./Login";

const AuthContainer = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="h-full container px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <Login />
        </div>
      </div>
    </section>
  );
};

export default AuthContainer;
