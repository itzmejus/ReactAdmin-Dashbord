import React from "react";
import DataTable,{createTheme} from "react-data-table-component";

function TableData() {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable:true,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.Category,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      title: "Chicken",
      Category: "1998",
    },
    {
      id: 2,
      title: "mutton",
      Category: "1900",
    },
    {
      id: 3,
      title: "Beef",
      Category: "1990",
    },
  ];

  
  return (
    <div>
      <DataTable columns={columns} data={data} selectableRows />
    </div>
  );
}

export default TableData;
