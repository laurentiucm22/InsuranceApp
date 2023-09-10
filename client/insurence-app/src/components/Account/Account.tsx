import { useParams } from "react-router-dom";
import Button from "../CustomButtons";

const Account = () => {
  const params = useParams();

  return (
    <div className="h-screen flex justify-center items-center text-white">
      {/* Header */}
      <div className="w-10/12 flex justify-between">
        <p>
          <span className="text-3xl">Welcome </span>
          <span className="capitalize text-3xl">
            {params.userName?.split("-").join(" ")}
          </span>
        </p>

        <Button
          type="button"
          styleType="creazaOfertaBtn"
          className="hover:bg-blue-600 hover:outline-blue-600"
        >
          Creare Oferta
        </Button>
      </div>

      {/* Table */}
    </div>
  );
};

export default Account;
