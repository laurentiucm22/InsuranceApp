import MainNavigation from "../components/MainNavigation";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const title = "An error accurred!";
  const message = "Something went wrong!";

  return (
    <>
      <MainNavigation />
      <div title={title} className="">
        <p>{message}</p>
        <Link to="..">Back</Link>
      </div>
    </>
  );
};

export default ErrorPage;
