import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
const RootLayout = () => {
  return (
    <div className="bg-gray-800">
      <header className="relative">
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
