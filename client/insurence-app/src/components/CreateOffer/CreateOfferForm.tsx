import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../CustomInputs";
import Button from "../CustomButtons";
import { selectedInsuranceOptions } from "../constant";
import moment from "moment";

export interface userDataTypes {
  lastName: string;
  firstName: string;
  birthYear: number;
  selectedInsuranceType: string;
  carSerial: string | number;
  numberOfKm: string | number;
  carManufacturer: string | number;
  carYear: string | number;
  licensePlate: string | number;
  prima: string;
  createdAt: string;
}

const CreateOfferForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");
  const [selectedInsuranceType, setSelectedInsuranceType] =
    useState<string>("");

  // Casco type state
  const [carSerial, setCarSerial] = useState<string>("");
  const [numberOfKm, setNumberOfKm] = useState<string>("");

  // RCA type state
  const [carManufacturer, setCarManufacturer] = useState<string>("");
  const [carYear, setCarYear] = useState<string>("");
  const [licensePlate, SetLicensePlate] = useState<string>("");

  const navigate = useNavigate();

  const handleSelecteChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedInsuranceType(newValue);
  };

  const emptyInputValueHandler = (value: string | number) =>
    value ? value : "TBD";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData: userDataTypes = {
      lastName,
      firstName,
      birthYear: moment(birthYear, "YYYY-MM-DD").valueOf(),
      selectedInsuranceType,
      carSerial: emptyInputValueHandler(carSerial),
      numberOfKm: emptyInputValueHandler(numberOfKm),
      carManufacturer: emptyInputValueHandler(carManufacturer),
      carYear: emptyInputValueHandler(+carYear),
      licensePlate: emptyInputValueHandler(licensePlate),
      prima: (Math.random() * 9999.99).toFixed(2),
      createdAt: `${new Date()}`,
    };

    // "POST" the data to the "DB"
    const postFormData = (data: userDataTypes) => {
      localStorage.setItem("formData", JSON.stringify(data));
    };
    postFormData(userData);
  };

  return (
    <div className="w-full md:w-1/2 p-4 text-white bg-blue-900">
      <h1 className="uppercase text-center text-xl md:text-2xl py-3 font-bold">
        Creaza O Oferta
      </h1>

      <form onSubmit={submitHandler} className="flex flex-col">
        <div className="flex gap-4 justify-between">
          <div>
            <Input
              type="text"
              name="lastName"
              label="Nume"
              placeholder="Nume"
              className=""
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </div>

          <div>
            <Input
              type="text"
              name="firstName"
              label="Prenume"
              placeholder="Prenume"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <Input
              type="date"
              name="birthYear"
              label="Data Nasterii"
              min="1900-01-01"
              max={`${new Date().getFullYear()}-12-31`}
              value={birthYear}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                setBirthYear(value);
              }}
            />
          </div>

          <div>
            <label>Tipul Asigurarii</label>
            <select
              onChange={handleSelecteChanges}
              className="w-full text-black pl-6 pr-3 py-2 mt-2 mb-4 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-semibold"
            >
              {selectedInsuranceOptions.map(option => (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Insurance Type Casco */}
        <div>
          {selectedInsuranceType === "Casco" && (
            <>
              <div>
                <Input
                  type="text"
                  name="carSerial"
                  label="Serie Sasiu"
                  placeholder="Serie Sasiu"
                  value={carSerial}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCarSerial(e.target.value)
                  }
                />
              </div>
              <div>
                <Input
                  type="number"
                  name="numberOfKm"
                  label="Nr. de kilometri"
                  placeholder="Km"
                  value={numberOfKm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNumberOfKm(e.target.value)
                  }
                />
              </div>
            </>
          )}
        </div>

        {/* Insurance type RCA */}
        <div>
          {selectedInsuranceType === "RCA" && (
            <>
              <div>
                <Input
                  type="text"
                  name="carManufacturer"
                  label="Marca masinii"
                  placeholder="Audi"
                  value={carManufacturer}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCarManufacturer(e.target.value)
                  }
                />
              </div>
              <div>
                <Input
                  type="number"
                  name="carYear"
                  label="Anul Fabricatiei"
                  placeholder="2000"
                  value={carYear}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCarYear(e.target.value)
                  }
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="licensePlate"
                  label="Nr. de inmatriculare"
                  placeholder="xx-yy-zzz"
                  value={licensePlate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    SetLicensePlate(e.target.value)
                  }
                />
              </div>
            </>
          )}
        </div>

        <div className="pt-4 flex justify-end">
          <Button
            className="hover:bg-blue-400 mr-2 hover:outline-blue-400"
            styleType="creazaOfertaBtn"
            type="submit"
          >
            Creaza Oferta
          </Button>
          <Button
            styleType="cancelBtn"
            className="bg-red-400 outline outline-1 outile-red-400"
            type="button"
            onClick={() => navigate("..")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateOfferForm;
