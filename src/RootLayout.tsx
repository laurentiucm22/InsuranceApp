import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
const RootLayout = () => {
  return (
    <div className="bg-gray-800">
      <header className="absolute w-full left-0 top-0 z-20">
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
