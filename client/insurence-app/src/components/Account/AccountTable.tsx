import moment from "moment";
import { userDataTypes } from "../CreateOffer/CreateOfferForm";

const tableHead = {
  nr: "Nr.",
  lastName: "Nume",
  firstName: "Prenume",
  birthYear: "Anul Nasterii",
  selectedInsuranceType: "Tipul asigurarii",
  carSerial: "Seria sasiu",
  numberOfKm: "Nr. de kilometri",
  carManufacturer: "Marca Masinii",
  carYear: "Anul Masinii",
  licensePlate: "Nr. de inmatriculare",
  prima: "Prima",
  createdAt: "Creat In",
};

const AccountTable = () => {
  const formData = localStorage.getItem("formData")!;
  const parseData = JSON.parse(formData);

  const tableHeadArr = Object.entries(tableHead);
  const tableBodyStyle = "px-1 md:px-6 py-4 font-medium";
  const calcNrOfColumnsToSpan = Object.keys(tableHead).length;

  return (
    <div className="flex flex-col overflow-x-scroll custome__scrollbar w-full justify-center pt-10">
      <div className="w-full py-2">
        <table className="table-auto w-full rounded-md text-center text-sm font-light">
          <thead className="border-b bg-neutral-900 font-medium text-white border-neutral-500">
            <tr>
              {tableHeadArr.map(([id, headVal]) => (
                <th
                  key={id}
                  scope="col"
                  className="px-2 whitespace-nowrap py-1 md:py-4"
                >
                  {headVal}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parseData.length === 0 ? (
              <tr className="lex justify-center">
                <td
                  className="w-full py-4 font-semibold"
                  colSpan={calcNrOfColumnsToSpan}
                >
                  Nici o oferta creata
                </td>
              </tr>
            ) : (
              parseData.map((tableData: userDataTypes, index: number) => {
                return (
                  <tr
                    key={tableData.id}
                    className="border-b border-neutral-500 whitespace-nowrap"
                  >
                    <td className={tableBodyStyle}>{index + 1}</td>
                    <td className={tableBodyStyle}>{tableData.lastName}</td>
                    <td className={tableBodyStyle}>{tableData.firstName}</td>
                    <td className={tableBodyStyle}>
                      {moment(tableData.birthYear).format("YYYY-MM-DD")}
                    </td>
                    <td className={tableBodyStyle}>
                      {tableData.selectedInsuranceType}
                    </td>
                    <td className={tableBodyStyle}>{tableData.carSerial}</td>
                    <td className={tableBodyStyle}>{tableData.numberOfKm}</td>
                    <td className={tableBodyStyle}>
                      {tableData.carManufacturer}
                    </td>
                    <td className={tableBodyStyle}>{tableData.carYear}</td>
                    <td className={tableBodyStyle}>{tableData.licensePlate}</td>
                    <td className={tableBodyStyle}>{tableData.prima}</td>
                    <td className={tableBodyStyle}>
                      {moment(tableData.createdAt).format("YYYY-MM-DD")}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountTable;
