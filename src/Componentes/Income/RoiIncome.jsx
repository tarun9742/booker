import React from "react";
import TableComponent from "../TableComponent";
import DateSelector from "./DateSelector";

export default function RoiIncome() {
  const tableData = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
      action: "More",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
      action: "More",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
      action: "More",
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
      action: "More",
    },
  ];

  const tableHead = [
    "S.No.",
    "Product name",
    "Color",
    "Category",
    "Price",
    "Action",
  ];
  return (
    <div>
      <p className="font-bold text-xl mb-6 dark:text-white">
        Income Manager {">"} ROI Income
      </p>
      <DateSelector />
      <TableComponent tableData={tableData} tableHead={tableHead} />
    </div>
  );
}
