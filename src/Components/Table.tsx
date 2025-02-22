export interface TableProps<T, U> {
  tableHeaders: U[];
  columnData: T[];
  // className: string;
}

export interface UserData {
  id: number;
  Name: string;
  RollNo: number;
  LastName: string;
}

const Table = <T extends string | number | UserData, U extends string>({
  columnData,
  tableHeaders,
  // className,
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
        {Array.isArray(columnData) && (
          <tbody className="w-full">
            {columnData.map((key, index) => {
              if (typeof key === "object") {
                return (
                  <tr key={index}>
                    {Object.keys(key).map((elem) => (
                      <td
                        key={elem}
                        className="border border-gray-500 text-center"
                      >
                        {/* {console.log(key[elem])} */}
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
