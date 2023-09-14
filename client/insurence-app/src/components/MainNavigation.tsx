import { BsBank } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const MainNavigation = () => {
  const numberOffersCreated = useSelector(
    (state: RootState) => state.counter.count
  );
  const isUserValid = useSelector((state: RootState) => state.ui.isUserValid);

  return (
    <>
      <div className="text-white m-auto w-5/6 flex justify-between items-center py-5 bg-transparent">
        <div className="flex items-center">
          <BsBank size={20} className="text-white mr-2" />
          <h2 className="text-md md:text-xl">
            Insurance <span className="text-blue-400">App</span>
          </h2>
        </div>
        <div className="flex items-center text-lg md:px-6 md:py-1">
          {isUserValid && (
            <p className="text-white text-sm md:text-lg">
              Nr. ofertelor create: {isUserValid && numberOffersCreated}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
