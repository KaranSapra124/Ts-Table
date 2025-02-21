
export interface TableProps<T, U> {
  tableHeaders: U[];
  columnData: T[];
}

export interface UserData {
  id: number;
  Name: string;
  RollNo: number;
}

const Table = <T extends string | number | UserData, U extends string>({
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
          {Array.isArray(columnData) ? (
            columnData.map((key) => {
              return Object.keys(key).map((elem: string | number) => {
                return <td className="border border-gray-500 text-center">{(key as Record<string, any>)[elem]}</td>;
              });
            })
          ) : (
            <></>
          )}
          {/* {columnData?.map((elem, index: number) => {
            return (
              <td
                className="border font-bold text-center border-gray-500"
                key={index}
              >
                {elem}{" "}
              </td>
            );
          })} */}
        </tr>
      </table>
    </>
  );
};

export default Table;
