import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import Card from "@components/containers/card";
import Button from "@components/buttons/button";
import { FaPlus } from "react-icons/fa6";

// Parsed Data from your text and image_77427c.png
const MOCK_DATA = [
  {
    dateReported: "2019-04-25",
    owner: "JGM70874T215",
    exceptionId: "100000206",
    solId: "0411",
    branchName: "RCBC Plaza Main Branch",
    bocdStatus: "PENDING",
    nature: "Alterations on bank forms - no/lacking client's signature",
    remarks: "Alteration on CRF without client's signature.",
    exceptionDate: "2019-04-25",
    type: "Account Opening",
    commitmentDate: "2019-04-30",
    aging: "2416",
    status: "Outstanding - Pending For Regularization",
  },
  {
    dateReported: "2020-05-05",
    owner: "aad53051",
    exceptionId: "100000222",
    solId: "0411",
    branchName: "RCBC Plaza Main Branch",
    bocdStatus: "PENDING",
    nature:
      "Bank Forms / Letter of Instruction - Incomplete infomation/details provided by clients",
    remarks: "dsadasdascx@!@###@#@332323123",
    exceptionDate: "2020-04-23",
    type: "Account Opening",
    commitmentDate: "2020-04-23",
    aging: "2040",
    status: "Outstanding - Pending For Regularization",
  },
  {
    dateReported: "2021-07-02",
    owner: "aad53051",
    exceptionId: "100000227",
    solId: "0411",
    branchName: "RCBC Plaza Main Branch",
    bocdStatus: "PENDING",
    nature: "Cash handling by non-authorized personnel",
    remarks: "adasdasd",
    exceptionDate: "2021-06-30",
    type: "Account Opening with no docs",
    commitmentDate: "2021-07-12",
    aging: "1",
    status: "Regularized",
  },
  {
    dateReported: "2018-12-20",
    owner: "aad53051",
    exceptionId: "100000194",
    solId: "0411",
    branchName: "RCBC Plaza Main Branch",
    bocdStatus: "PENDING",
    nature: "Others",
    remarks: "test",
    exceptionDate: "2018-12-19",
    type: "Tellering",
    commitmentDate: "2018-12-21",
    aging: "58",
    status: "Closed by BC",
  },
  {
    dateReported: "2018-12-20",
    owner: "aad53051",
    exceptionId: "100000195",
    solId: "0411",
    branchName: "RCBC Plaza Main Branch",
    bocdStatus: "PENDING",
    nature: "Alterations on bank forms - no/lacking client's signature",
    remarks: "No signature on the alteration on account no.",
    exceptionDate: "2018-12-20",
    type: "Tellering",
    commitmentDate: "2018-12-28",
    aging: "1",
    status: "Closed by BC",
  },
  {
    dateReported: "2019-06-07",
    owner: "KMP54928T411",
    exceptionId: "100000214",
    solId: "0411",
    branchName: "RCBC Plaza Main Branch",
    bocdStatus: "PENDING",
    nature:
      "No Original Copy of letter of instruction and fund transfer forms with Facsimile or Electronic Agreement",
    remarks:
      "AS ENDORSED BY RM JOYCE FAMARIN. CLIENT COMMITTED TO SUBMIT ORIGINAL...",
    exceptionDate: "2019-06-07",
    type: "Tellering",
    commitmentDate: "2019-06-14",
    aging: "757",
    status: "Closed by BC",
  },
];

export default function ExceptionList() {
  const [tableData, setTableData] = useState([]);

  const ExceptionIdLink = ({ id }) => (
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
        title="Exception List"
        description="Track and manage reported exceptions."
        columns={[
          "Date Reported",
          "Exception Owner",
          "Exception ID",
          "SOL ID",
          "Branch Name",
          "BOCD Status",
          "Nature of Exceptions",
          "Remarks",
          "Exception Date",
          "Exception Type",
          "Commitment Date",
          "Aging",
          "Status",
        ]}
        data={MOCK_DATA}
        setData={setTableData}
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={index} row={index}>
            <TableData>
              <span className="text-xs whitespace-nowrap">
                {item.dateReported}
              </span>
            </TableData>
            <TableData>
              <span className="text-xs font-medium">{item.owner}</span>
            </TableData>
            <TableData>
              <ExceptionIdLink id={item.exceptionId} />
            </TableData>
            <TableData>
              <span className="text-xs">{item.solId}</span>
            </TableData>
            <TableData>
              <span className="text-xs">{item.branchName}</span>
            </TableData>
            <TableData>
              <StatusBadge status={item.bocdStatus} />
            </TableData>
            <TableData>
              <div className="max-w-xs truncate text-xs" title={item.nature}>
                {item.nature}
              </div>
            </TableData>
            <TableData>
              <div className="max-w-xs truncate text-xs" title={item.remarks}>
                {item.remarks}
              </div>
            </TableData>
            <TableData>
              <span className="text-xs whitespace-nowrap">
                {item.exceptionDate}
              </span>
            </TableData>
            <TableData>
              <span className="text-xs">{item.type}</span>
            </TableData>
            <TableData>
              <span className="text-xs whitespace-nowrap">
                {item.commitmentDate}
              </span>
            </TableData>
            <TableData>
              <span className="text-xs text-center block">{item.aging}</span>
            </TableData>
            <TableData>
              <span className="text-xs font-medium whitespace-nowrap text-slate-600 dark:text-slate-300">
                {item.status}
              </span>
            </TableData>
          </TableRow>
        ))}
      </Table>
    </Card>
  );
}
