import React from "react";
import { CSVLink } from "react-csv";
import { ExportButton } from "./export-excel.styles";

export const ExportReactCSV = ({ csvData, fileName }) => {
  return (
    <ExportButton variant="warning">
      <CSVLink data={csvData} filename={fileName}>
        Export
      </CSVLink>
    </ExportButton>
  );
};
