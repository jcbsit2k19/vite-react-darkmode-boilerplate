import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import Card from "@components/containers/card";
import IconButton from "@components/buttons/icon-button";
import { FaEye, FaPlus } from "react-icons/fa6";
import Button from "@components/buttons/button";

// Parsed Data from your text and image_812c5c.png
const MOCK_DATA = [
  {
    userId: "APL55653",
    lastName: "LOPEZ",
    firstName: "ARTHUR",
    middleName: "PAGAS",
    branchId: "0571",
  },
  {
    userId: "irb50550",
    lastName: "bula",
    firstName: "ivy marie",
    middleName: "c",
    branchId: "0431",
  },
];

export default function TransferException() {
  const [tableData, setTableData] = useState([]);

  const UserIdLink = ({ id }) => (
    <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline hover:text-blue-800 dark:hover:text-blue-300">
      {id}
    </span>
  );

  return (
    <Card>
      <Table
        title="Resigned Users List"
        description="View records of resigned users and their previous assignments."
        columns={[
          "USER ID",
          "LAST NAME",
          "FIRST NAME",
          "MIDDLE NAME",
          "BRANCH ID",
          "CONTROLS",
        ]}
        data={MOCK_DATA}
        setData={setTableData}
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={index} row={index}>
            <TableData>
              <UserIdLink id={item.userId} />
            </TableData>
            <TableData>{item.lastName}</TableData>
            <TableData>{item.firstName}</TableData>
            <TableData>{item.middleName}</TableData>
            <TableData>
              <span className="text-slate-700 dark:text-slate-200 text-xs">
                {item.branchId}
              </span>
            </TableData>
            <TableData>
              <div className="flex justify-center gap-1">
                <IconButton
                  icon={FaEye}
                  theme={"blue"}
                  tooltip={"View Exceptions"}
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
