import { BsBank } from "react-icons/bs";

const MainNavigation = () => {
  return (
    <>
      <div className="text-white flex items-center pl-6 py-3 bg-transparent absolute left-0 top-0 z-20">
        <BsBank size={20} className="text-white mr-2" />
        <h2 className="text-xl">
          Insurance <span className="text-blue-400">App</span>
        </h2>
      </div>
    </>
  );
};

export default MainNavigation;
