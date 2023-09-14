import { useNavigate } from "react-router-dom";
import WellcomeBg from "./WellcomeBg";
import Button from "../CustomButtons";
import Modal from "../Modal";
import { useState } from "react";

const Welcome = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleLogin = () => {
    navigate("authentification");
  };

  const handleCreazaOferta = () => {
    setShowModal(true);
  };

  return (
    <div className="relative h-screen flex-col text-white flex items-center justify-center rounded-md ">
      <WellcomeBg />
      <div className="bg-transparent z-20">
        <h1 className="text-2xl md:text-3xl">Bine ai venit pe Insurance App</h1>

        <div className="flex justify-center w-full pt-4">
          <Button
            type="button"
            onClick={handleLogin}
            styleType="loginBtn"
            className="mr-3"
          >
            Logare
          </Button>
          <Button
            type="button"
            styleType="creazaOfertaBtn"
            onClick={handleCreazaOferta}
          >
            Creaza Oferta
          </Button>

          {showModal && (
            <Modal
              title="Nu esti logat?"
              description="Pentru a putea creea o oferta, trebuie sa fi Logat."
              temporaryCallBackFn={setShowModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
