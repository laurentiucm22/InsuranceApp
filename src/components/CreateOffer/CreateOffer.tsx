import createOfferImg from "../../assets/images/create-offer.jpg";
import CreateOfferForm from "./CreateOfferForm";

const CreateOffer = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 flex shadow-xl w-full rounded overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className=" bg-red-300 hidden md:flex justify-center items-center w-1/2">
          <img
            src={createOfferImg}
            alt="create offer"
            className="w-full h-full object-cover"
          />
        </div>
        <CreateOfferForm />
      </div>
    </div>
  );
};

export default CreateOffer;
