import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import Card from "@components/containers/card";
import IconButton from "@components/buttons/icon-button";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Button from "@components/buttons/button";

// Parsed Data from your text and image_81a0a5.png
const MOCK_DATA = [
  {
    id: "1000",
    description: "Outstanding - Pending For Regularization",
    active: true,
  },
  { id: "1001", description: "Regularized", active: true },
  { id: "1003", description: "Closed by BC", active: true },
  { id: "1004", description: "Closed by BOCD", active: true },
];

export default function ExceptionStatuses() {
  const [tableData, setTableData] = useState([]);

  const ExceptionStatusIdLink = ({ id }) => (
    <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline hover:text-blue-800 dark:hover:text-blue-300">
      {id}
    </span>
  );

  return (
    <Card>
      <div className="flex justify-end p-2 w-full">
        <Button icon={FaPlus} color="green">
          Add New
        </Button>
      </div>
      <Table
        title="Exception Status List"
        description="Manage exception status definitions."
        columns={["ID", "DESCRIPTION", "STATUS", "CONTROLS"]}
        data={MOCK_DATA}
        setData={setTableData}
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={index} row={index}>
            <TableData>
              <ExceptionStatusIdLink id={item.id} />
            </TableData>
            <TableData>
              <span className="text-slate-700 dark:text-slate-200 font-medium text-xs">
                {item.description}
              </span>
            </TableData>
            <TableData>
              <StatusBadge status={item.active ? "active" : "inactive"} />
            </TableData>
            <TableData>
              <div className="flex justify-center gap-1">
                <IconButton
                  icon={FaEdit}
                  theme={"blue"}
                  tooltip={"Edit"}
                  tooltipPosition="top"
                />
                <IconButton
                  icon={FaTrash}
                  theme={"red"}
                  tooltip={"Delete"}
                  tooltipPosition="top"
                />
              </div>
            </TableData>
          </TableRow>
        ))}
      </Table>
    </Card>
  );
}
