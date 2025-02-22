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
    {
      id: 2,
      Name: "Rahul",
      RollNo: 24,
    },
    {
      id: 3,
      Name: "Rahul",
      RollNo: 24,
    }
  ]);

  return (
    <>
      <Table columnData={column} tableHeaders={columnData} />
    </>
  );
}

export default App;
