import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import Card from "@components/containers/card";
import IconButton from "@components/buttons/icon-button";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Button from "@components/buttons/button";

// Parsed Data from your text and image_81a841.png
const MOCK_DATA = [
  { id: "1000", description: "Cash Deposit", active: true },
  { id: "1001", description: "Check Deposit", active: true },
  { id: "1002", description: "Withdrawals", active: true },
  { id: "1003", description: "Check Encashment", active: true },
  { id: "1004", description: "Term Deposit Placements", active: true },
  { id: "1005", description: "Term Deposit Pay-out", active: true },
  { id: "1006", description: "CASA Closure", active: true },
  { id: "1007", description: "Treasury Placements", active: true },
  { id: "1008", description: "Trust Placements", active: true },
  { id: "1009", description: "Treasury/Trust Pay-outs", active: true },
  { id: "1010", description: "Passbook Issuance and Update", active: true },
  { id: "1011", description: "Passbook Issuance and Update", active: true },
  { id: "1012", description: "Fund Transfer", active: true },
  {
    id: "1013",
    description: "Cash Card (MyWallet) Transactions",
    active: true,
  },
  { id: "1014", description: "Bills Payment", active: true },
  { id: "1015", description: "Loan Payments", active: true },
  { id: "1016", description: "Trade Payments", active: true },
  { id: "1017", description: "Bank Fees and Charges", active: true },
  { id: "1018", description: "Bills Purchase", active: true },
  {
    id: "1019",
    description:
      "Manager's Check (MC)/Gift Check (GC)/Demand Draft (DD) Issuance",
    active: true,
  },
  { id: "1020", description: "Traveler's Check Purchase", active: true },
  { id: "1021", description: "Bankard Cash Advance", active: true },
  { id: "1022", description: "Remittance Pay-outs", active: true },
  {
    id: "1023",
    description: "Purchase and Sale of Foreign Currency",
    active: true,
  },
  { id: "1024", description: "Safety Deposit Box (SDB) Rentals", active: true },
  { id: "1025", description: "Cash Transfer", active: true },
  { id: "1026", description: "ATM Servicing", active: true },
  { id: "1027", description: "Cash Assistance", active: true },
  { id: "1028", description: "Agent Collection", active: true },
  { id: "1029", description: "Inward Clearing", active: true },
  {
    id: "1030",
    description: "Centralized Processing of Post-Dated Checks (PDCs)",
    active: true,
  },
  {
    id: "1031",
    description: "Cash or Vault Shortages and Overages",
    active: true,
  },
  { id: "1032", description: "Business Center (BC) Expenses", active: true },
  { id: "1033", description: "Miscellaneous Transactions", active: true },
  { id: "1034", description: "Business Center (BC) Adjustments", active: true },
  { id: "1035", description: "Others", active: true },
  { id: "1036", description: "", active: true }, // Empty description based on input
  { id: "1037", description: "Account Reactivation", active: true },
  { id: "1038", description: "Account Maintenance", active: true },
];

export default function TransactionTypes() {
  const [tableData, setTableData] = useState([]);

  const TransactionIdLink = ({ id }) => (
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
        title="TransactionType List"
        description="Manage transaction types and categories."
        columns={["ID", "DESCRIPTION", "STATUS", "CONTROLS"]}
        data={MOCK_DATA}
        setData={setTableData}
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={index} row={index}>
            <TableData>
              <TransactionIdLink id={item.id} />
            </TableData>
            <TableData>
              <span className="text-slate-700 dark:text-slate-200 font-medium text-xs">
                {item.description || (
                  <span className="italic text-slate-400">No Description</span>
                )}
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
