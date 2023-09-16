import { useNavigate } from "react-router-dom";
import Button from "./CustomButtons";

interface ModalProps {
  title: string;
  description: string;
  temporaryCallBackFn: (showModal: boolean) => void;
}

const Modal = ({ title, description, temporaryCallBackFn }: ModalProps) => {
  const navigate = useNavigate();
  const handleLoginRerouting = () => navigate("authentification");

  return (
    <div className="absolute inset-0 bg-[#141a1d95]">
      <div
        onClick={() => temporaryCallBackFn(false)}
        className="h-full w-full overflow-y-auto overflow-x-hidden outline-none flex justify-center items-center"
      >
        <div className="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out">
          <div className="pointer-events-auto flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-sky-600 p-3">
            <div className="flex items-center justify-between rounded-t-md py-3 px-4 ">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalComponentsLabel"
              >
                {title}
              </h5>
              <Button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                styleType="defaultBtn"
                onClick={() => temporaryCallBackFn(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>

            <div className="relative p-3">{description}</div>

            <div className="flex flex-shrink-0 items-center justify-end rounded-b-md b p-4 ">
              <Button
                type="button"
                styleType="cancelBtn"
                onClick={() => temporaryCallBackFn(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                styleType="loginBtn"
                onClick={handleLoginRerouting}
                className="ml-2"
              >
                Logare
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
