import React from "react";

export interface TableProps<T, U> {
  tableHeaders: U[];
  columnData: T[];
}

const Table = <T extends string | number, U extends string>({
  columnData,
  tableHeaders,
}: TableProps<T, U>) => {
  return (
    <>
      <table className="border w-screen">
        <tr>
          {tableHeaders?.map((elem, index: number) => {
            return (
              <th className="border text-center border-gray-500" key={index}>
                {elem}
              </th>
            );
          })}
        </tr>
        <tr>
          {columnData?.map((elem, index: number) => {
            return (
              <td className="border text-center border-gray-500" key={index}>
                {elem}
              </td>
            );
          })}
        </tr>
      </table>
    </>
  );
};

export default Table;
