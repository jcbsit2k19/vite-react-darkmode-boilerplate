import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import Card from "@components/containers/card";
import IconButton from "@components/buttons/icon-button";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Button from "@components/buttons/button";

// Parsed Data from your text/image
const MOCK_DATA = [
  { id: "1000", description: "BOCD", active: true },
  { id: "1001", description: "User", active: true },
  { id: "1002", description: "System Administrator", active: true },
  { id: "1003", description: "Modifier", active: true },
  { id: "1004", description: "BOCD CO", active: true },
  { id: "1005", description: "CIMD", active: true },
];

export default function UserRoles() {
  const [tableData, setTableData] = useState([]);

  const RoleIdLink = ({ id }) => (
    <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline hover:text-blue-800 dark:hover:text-blue-300">
      {id}
    </span>
  );

  return (
    <Card>
      <Table
        title="Role List"
        description="Manage system roles and access levels."
        columns={["ID", "DESCRIPTION", "STATUS"]}
        data={MOCK_DATA}
        setData={setTableData}
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={index} row={index}>
            <TableData>
              <RoleIdLink id={item.id} />
            </TableData>
            <TableData>
              <span className="text-slate-700 dark:text-slate-200 font-medium text-xs">
                {item.description}
              </span>
            </TableData>
            <TableData>
              <StatusBadge status={item.active ? "active" : "inactive"} />
            </TableData>
          </TableRow>
        ))}
      </Table>
    </Card>
  );
}
