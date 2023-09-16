// import { useDispatch } from "react-redux";
import Router from "./Router";
// import { validUser } from "./Redux/slices/uiSlice";
// import { useEffect } from "react";
// import { incrementCountOffers } from "./Redux/slices/offersCreatedSlice";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedIsUserValid = JSON.parse(localStorage.getItem("isValidUser")!);
  //   const storedCounter = JSON.parse(localStorage.getItem("offerCounter")!);

  //   if (storedIsUserValid !== null) {
  //     dispatch(validUser(storedIsUserValid));
  //   }

  //   if (storedCounter !== null) {
  //     dispatch(incrementCountOffers(storedCounter));
  //   }
  // }, [dispatch]);

  return <Router />;
};

export default App;
