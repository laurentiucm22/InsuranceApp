import { useNavigate, useParams } from "react-router-dom";
import Button from "../CustomButtons";
import AccountTable from "./AccountTable";

const Account = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white">
      {/* Header */}
      <div className="w-full px-4 md:px-16 flex justify-between">
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
          onClick={() => navigate(`/${params.userName}/creaza-oferta`)}
        >
          Creare Oferta
        </Button>
      </div>

      {/* Table */}
      <AccountTable />
    </div>
  );
};

export default Account;
