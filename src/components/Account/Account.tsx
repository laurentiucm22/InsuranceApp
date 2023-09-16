import { useNavigate, useParams } from "react-router-dom";
import Button from "../CustomButtons";
import AccountTable from "./AccountTable";

const Account = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center pt-32 text-white">
      {/* Header */}
      <div className="w-5/6 flex items-center justify-between">
        <p>
          <span className="text-md md:text-3xl">Welcome </span>
          <span className="capitalize text-md md:text-3xl">
            {params.userName?.split("-").join(" ")}
          </span>
        </p>

        <Button
          type="button"
          styleType="creazaOfertaBtn"
          className="hover:bg-blue-600 hover:outline-blue-600 text-sm"
          onClick={() => navigate(`/${params.userName}/creaza-oferta`)}
        >
          Creare Oferta
        </Button>
      </div>

      {/* Table */}
      <div className="w-5/6">
        <AccountTable />
      </div>
    </div>
  );
};

export default Account;
