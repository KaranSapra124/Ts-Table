import { useState } from "react";
import Table, {  UserData } from "./Components/Table";

function App() {
  const [columnData] = useState<string[]>([
   "Id",
   "Product Name",
   "Stock",
   "Price"
  ]);

  const [column] = useState<UserData[]>([
    { Id: 1,ProductName: "Laptop", Stock: 50, Price: 60000 },
    { Id: 2,ProductName: "Smartphone", Stock: 120, Price: 25000 },
    { Id: 3,ProductName: "Headphones", Stock: 80, Price: 3000 },
    { Id: 4,ProductName: "Smartwatch", Stock: 30, Price: 12000 },
    { Id: 5,ProductName: "Tablet", Stock: 25, Price: 32000 },
    { Id: 6,ProductName: "Keyboard", Stock: 100, Price: 2000 },
    { Id: 7,ProductName: "Monitor", Stock: 20, Price: 18000 },
    { Id: 8,ProductName: "Mouse", Stock: 150, Price: 1500 },
    { Id: 9,ProductName: "Speaker", Stock: 40, Price: 5000 },
    { Id: 10,ProductName: "Webcam", Stock: 60, Price: 7000 },
  ]);

  return (
    <>
      <Table columnData={column} tableHeaders={columnData} />
    </>
  );
}

export default App;
