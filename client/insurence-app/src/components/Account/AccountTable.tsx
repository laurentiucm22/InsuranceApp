import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

const tableData = [
  {
    id: 1,
    firstName: "Isador",
    lastName: "Kruger",
    birthYear: "22.12.1992",
    insuranceType: "CASCO",
    createdIn: "10.09.2023",
  },
  {
    id: 2,
    firstName: "Vasilie",
    lastName: "Pehartie",
    birthYear: "22.12.1952",
    insuranceType: "RCA",
    createdIn: "01.09.2023",
  },
];

const AccountTable = () => {
  const data = useMemo(() => tableData, []);

  /**@type import('@tanstack/react-table').ColumnDef<any>*/
  const columns = [
    {
      header: "Nr.",
      accessorKey: "id",
    },
    {
      header: "Nume",
      accessorKey: "lastName",
    },
    {
      header: "Prenume",
      accessorKey: "firstName",
    },
    {
      header: "Data Nasterii",
      accessorKey: "birthYear",
    },
    {
      header: "Tipul Asigurarii",
      accessorKey: "insuranceType",
    },
    {
      header: "Creeat",
      accessorKey: "createdIn",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full flex flex-col items-center px-16">
      <table className="w-full mt-8 outline-1 outline outline-white rounded">
        <thead className="rounded">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th className="p-2 bg-indigo-800 " key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className="p-2  text-center" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
