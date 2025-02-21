import { useState } from "react";
import Table, { TableProps, UserData } from "./Components/Table";

function App() {
  const [columnData] = useState<string[]>([
    "Id",
    "Name",
    "Roll No.",
    "Last Name",
  ]);

  const [column] = useState<(string | number | UserData)[]>([
    {
      id: 1,
      Name: "Karan",
      RollNo: 20,
    },
  ]);

  return (
    <>
      <Table columnData={column} tableHeaders={columnData} />
    </>
  );
}

export default App;
