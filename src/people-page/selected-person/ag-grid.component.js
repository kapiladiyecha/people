import React from "react";
import { AgGridReact } from "ag-grid-react";

export default function RenderGrid() {
  const gridOptions = {
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
    ],
    rowData: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ],
  };

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "600px",
      }}
    >
      <span>Hello...</span>
      <AgGridReact
        columnDefs={gridOptions.columnDefs}
        rowData={gridOptions.rowData}
      ></AgGridReact>
    </div>
  );
}
