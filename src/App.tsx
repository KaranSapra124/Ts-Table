import { useState } from "react";
import Table, { TableProps } from "./Components/Table";

function App() {
  const [columnData, setColumnData] = useState<string[]>([
    "Id",
    "Name",
    "Roll No.",
    "Last Name"
  ]);

  const [column, setColumns] = useState<(string | number)[]>([1, "Karan", 20]);

  return (
    <>
      <Table columnData={column} tableHeaders={columnData} />
    </>
  );
}

export default App;
