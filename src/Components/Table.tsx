import { useState } from "react";

export interface TableProps<T, U> {
  tableHeaders: U[];
  columnData: T[];
}

export interface UserData {
  Id: number;
  ProductName: string;
  Stock: number;
  Price: number;
}

const Table = <T extends Record<string, any>, U extends string>({
  columnData,
  tableHeaders,
}: TableProps<T, U>) => {
  const [headerData] = useState<U[]>(tableHeaders);
  const [columnsData, setColumnsData] = useState<T[]>(columnData);
  const [filtered, setFiltered] = useState<Boolean>(false);

  const handleFilters = (item: string) => {
    const selectedKey: string = item.replace(/[ .]/g, "").toString();

    const filteredData = columnsData.sort((a, b) => {
      return filtered
        ? (b[selectedKey as keyof T] as number) -
            (a[selectedKey as keyof T] as number)
        : (a[selectedKey as keyof T] as number) -
            (b[selectedKey as keyof T] as number);
    });

    setColumnsData(filteredData);
    setFiltered(!filtered);
  };
  return (
    <>
      <table className="border w-screen">
        <tr>
          {headerData?.map((elem, index: number) => {
            return (
              <th
                className="border w-52  text-center border-gray-500"
                key={index}
              >
                <div className="flex justify-center">
                  {elem}
                  {elem !== "Name" && elem !== "Last Name" && (
                    <button
                      onClick={() => handleFilters(elem)}
                      className="border mx-10 p-0.5 rounded-full m-1"
                    >
                      🚀
                    </button>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
        {Array.isArray(columnData) && (
          <tbody className="w-full">
            {columnsData.map((key, index) => {
              if (typeof key === "object") {
                return (
                  <tr key={index}>
                    {Object.keys(key).map((elem) => (
                      <td
                        key={elem}
                        className="border border-gray-500 text-center"
                      >
                        {(key as Record<string, any>)[elem] || "N/A"}
                      </td>
                    ))}
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td className="border border-gray-500 text-center">
                      {key}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        )}
      </table>
    </>
  );
};

export default Table;
