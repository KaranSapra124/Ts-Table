import { useState } from "react";
import Table, {  UserData } from "./Components/Table";

function App() {
  const [columnData] = useState<string[]>([
    "Id",
    "Name",
    "Roll No.",
    "Last Name",
  ]);

  const [column] = useState<UserData[]>([
    {
      Id: 1,
      Name: "Karan",
      RollNo: 20,
      LastName: "",
    },
    {
      Id: 2,
      Name: "Rahul",
      RollNo: 24,
      LastName: "",
    },
    {
      Id: 3,
      Name: "Bhupender",
      RollNo: 24,
      LastName: "",
    },
  ]);

  return (
    <>
      <Table columnData={column} tableHeaders={columnData} />
    </>
  );
}

export default App;
