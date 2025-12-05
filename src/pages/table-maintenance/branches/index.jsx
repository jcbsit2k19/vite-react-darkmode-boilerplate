import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import Card from "@components/containers/card";
import IconButton from "@components/buttons/icon-button";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Button from "@components/buttons/button";

// Parsed Data from your text

export default function Branches() {
  const [tableData, setTableData] = useState([]);

  const BranchIdLink = ({ id }) => (
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
        title="Branch List"
        description="View and search branch assignments."
        columns={["Branch ID", "Branch Name", "Group ID", "STATUS", "CONTROLS"]}
        data={MOCK_DATA}
        setData={setTableData}
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={index} row={index}>
            <TableData>
              <BranchIdLink id={item.branchId} />
            </TableData>
            <TableData>
              <span className="text-slate-700 dark:text-slate-200 font-medium text-xs">
                {item.branchName}
              </span>
            </TableData>
            <TableData>
              <span className="text-xs">{item.groupId}</span>
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

const MOCK_DATA = [
  {
    branchId: "0000",
    branchName: "NO GROUP",
    groupId: "NO GROUP",
    active: true,
  },
  {
    branchId: "0001",
    branchName: "Head Office",
    groupId: "HEAD OFFICE OPERATIONS DIVISION (1)",
    active: true,
  },
  {
    branchId: "0022",
    branchName: "MARKETING SUPPORT SERVICES DEPARTMENT",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0041",
    branchName: "Information Security Office",
    groupId: "M3",
    active: true,
  },
  {
    branchId: "0043",
    branchName: "RBG SYSTEMS SUPPORT DEPARTMENT",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0044",
    branchName: "Electronic Banking Support Department",
    groupId: "CHINESES UPTOWN",
    active: true,
  },
  {
    branchId: "0052",
    branchName: "ATM CENTER",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0062",
    branchName: "IMPORTS DEPARTMENT",
    groupId: "SOUTHWEST METRO MANILA",
    active: true,
  },
  {
    branchId: "0064",
    branchName: "Credit and Loans Service Department",
    groupId: "SOUTHWEST METRO MANILA",
    active: true,
  },
  {
    branchId: "0065",
    branchName: "Settlements Department",
    groupId: "CHINESES UPTOWN",
    active: true,
  },
  {
    branchId: "0071",
    branchName: "SASDs",
    groupId: "MAKATI CBD",
    active: true,
  },
  {
    branchId: "0073",
    branchName: "Treasury Operations",
    groupId: "SOUTHWEST METRO MANILA",
    active: true,
  },
  {
    branchId: "0076",
    branchName: "NEW ACCOUNTS",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0077",
    branchName: "MAKATI CASH CENTER",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0080",
    branchName: "Central Clearing Department",
    groupId: "CHINESES UPTOWN",
    active: true,
  },
  {
    branchId: "0081",
    branchName: "Finacle Central Support Department",
    groupId: "CHINESES UPTOWN",
    active: true,
  },
  {
    branchId: "0082",
    branchName: "CASH MANAGEMENT DEPARTMENT",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0093",
    branchName: "Central Processing Support Department",
    groupId: "CHINESES UPTOWN",
    active: true,
  },
  {
    branchId: "0099",
    branchName: "RCBC SAVINGS",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0100",
    branchName: "JES 3 (branch)",
    groupId: "NORTHERN MINDANAO",
    active: true,
  },
  {
    branchId: "0101",
    branchName: "ChBS 1- Division 1",
    groupId: "NORTH METRO MANILA REGIONAL OFFICE",
    active: true,
  },
  {
    branchId: "0102",
    branchName: "ChBS 1 - Division 2",
    groupId: "LUZON REGIONAL OFFICE",
    active: true,
  },
  {
    branchId: "0103",
    branchName: "Wealth Management Segment 1",
    groupId: "M4",
    active: true,
  },
  { branchId: "0109", branchName: "BINONDO", groupId: "MM12", active: true },
  {
    branchId: "0110",
    branchName: "ChBS 2",
    groupId: "Head Office Operations Division (2)",
    active: true,
  },
  {
    branchId: "0112",
    branchName: "Office of the Segment Head - Chinese Segment",
    groupId: "NORTH EAST LUZON",
    active: true,
  },
  {
    branchId: "0113",
    branchName: "PRESIDENTS AVE - PARANAQUE",
    groupId: "MM6",
    active: true,
  },
  { branchId: "0114", branchName: "ARRANQUE", groupId: "MM12", active: true },
  { branchId: "0115", branchName: "T. ALONZO", groupId: "MM12", active: true },
  {
    branchId: "0118",
    branchName: "Office of the Segment Head - Chinese Banking Segment",
    groupId: "NORTH EAST LUZON",
    active: true,
  },
  {
    branchId: "0123",
    branchName: "TEST",
    groupId: "BRANCH RECIPIENT",
    active: true,
  },
  {
    branchId: "0123",
    branchName: "TEST",
    groupId: "CHINESE BANKING SEGMENT (CHBS - 1)",
    active: true,
  },
  {
    branchId: "0132",
    branchName: "MSD SOUTH DIRECTORSHIP",
    groupId: "CENTRAL EASTERN VISAYAS",
    active: true,
  },
  {
    branchId: "0134",
    branchName: "EDSA KALOOKAN",
    groupId: "MM14",
    active: true,
  },
  { branchId: "0135", branchName: "CALOOCAN", groupId: "MM14", active: true },
  {
    branchId: "0136",
    branchName: "CALOOCAN CASH CENTER",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0138",
    branchName: "CENTRAL METRO MANILA REGIONAL OFFICE",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  {
    branchId: "0139",
    branchName: "TOMAS MAPUA",
    groupId: "MM12",
    active: true,
  },
  { branchId: "0148", branchName: "D. TUAZON", groupId: "MM15", active: true },
  { branchId: "0149", branchName: "DEL MONTE", groupId: "MM15", active: true },
  {
    branchId: "0150",
    branchName: "ORTIGAS AVE., GREENHILLS",
    groupId: "MM9",
    active: true,
  },
  {
    branchId: "0151",
    branchName: "LINDEN SUITES",
    groupId: "MM8",
    active: true,
  },
  {
    branchId: "0153",
    branchName: "LUCKY CHINATOWN MALL",
    groupId: "MM12",
    active: true,
  },
  { branchId: "0154", branchName: "DIVISORIA", groupId: "MM12", active: true },
  { branchId: "0155", branchName: "ELCANO", groupId: "MM12", active: true },
  { branchId: "0156", branchName: "PADRE RADA", groupId: "MM12", active: true },
  { branchId: "0157", branchName: "TUTUBAN", groupId: "MM12", active: true },
  {
    branchId: "0158",
    branchName: "THE BEACON MANILA",
    groupId: "MM2",
    active: true,
  },
  { branchId: "0159", branchName: "DELA ROSA", groupId: "MM2", active: true },
  {
    branchId: "0160",
    branchName: "WEST AVENUE",
    groupId: "MM10",
    active: true,
  },
  {
    branchId: "0161",
    branchName: "BETTER LIVING",
    groupId: "MM6",
    active: true,
  },
  { branchId: "0162", branchName: "BACLARAN", groupId: "MM7", active: true },
  { branchId: "0168", branchName: "ALABANG", groupId: "MM6", active: true },
  {
    branchId: "0169",
    branchName: "ALABANG CASH CENTER",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  { branchId: "0171", branchName: "MARIKINA", groupId: "MM11", active: true },
  {
    branchId: "0172",
    branchName: "CONCEPCION MARIKINA",
    groupId: "MM11",
    active: true,
  },
  { branchId: "0173", branchName: "CONNECTICUT", groupId: "MM9", active: true },
  { branchId: "0174", branchName: "TRINOMA", groupId: "MM14", active: true },
  {
    branchId: "0175",
    branchName: "ACROPOLIS (FORMER LIBIS)",
    groupId: "MM11",
    active: true,
  },
  { branchId: "0176", branchName: "FAIRVIEW", groupId: "MM10", active: true },
  {
    branchId: "0177",
    branchName: "ALABANG WEST SERVICE ROAD",
    groupId: "MM6",
    active: true,
  },
  {
    branchId: "0179",
    branchName: "FRONTERA VERDE",
    groupId: "MM5",
    active: true,
  },
  {
    branchId: "0180",
    branchName: "STA. LUCIA EAST",
    groupId: "MM11",
    active: true,
  },
  { branchId: "0181", branchName: "SUCAT", groupId: "MM6", active: true },
  { branchId: "0182", branchName: "LAS PINAS", groupId: "MM6", active: true },
  {
    branchId: "0183",
    branchName: "NEWPORT CITY BC",
    groupId: "MM6",
    active: true,
  },
  { branchId: "0184", branchName: "SOUTHMALL", groupId: "MM6", active: true },
  { branchId: "0189", branchName: "RAON SALES", groupId: "MM13", active: true },
  {
    branchId: "0190",
    branchName: "COMMONWEALTH",
    groupId: "MM10",
    active: true,
  },
  { branchId: "0191", branchName: "DILIMAN", groupId: "MM10", active: true },
  { branchId: "0192", branchName: "GILMORE", groupId: "MM9", active: true },
  {
    branchId: "0193",
    branchName: "LOYOLA HEIGHTS",
    groupId: "MM11",
    active: true,
  },
  { branchId: "0194", branchName: "MORAYTA", groupId: "MM13", active: true },
  { branchId: "0195", branchName: "VALENZUELA", groupId: "MM14", active: true },
  {
    branchId: "0196",
    branchName: "PALANAN-BAUTISTA",
    groupId: "MM7",
    active: true,
  },
  { branchId: "0197", branchName: "NOVALICHES", groupId: "MM15", active: true },
  {
    branchId: "0204",
    branchName: "PASIG WESTLAKE",
    groupId: "MM5",
    active: true,
  },
  { branchId: "0205", branchName: "ARNAIZ", groupId: "MM3", active: true },
  {
    branchId: "0206",
    branchName: "Pasig Toby's C. Raymundo Ave. BC",
    groupId: "MM5",
    active: true,
  },
  { branchId: "0207", branchName: "ERMITA", groupId: "MM13", active: true },
  { branchId: "0208", branchName: "A. MABINI", groupId: "MM13", active: true },
  { branchId: "0209", branchName: "OTIS", groupId: "MM13", active: true },
  {
    branchId: "0210",
    branchName: "Carlos Palance Branch",
    groupId: "MM3",
    active: true,
  },
  {
    branchId: "0211",
    branchName: "MCKINLEY HILLS",
    groupId: "MM4",
    active: true,
  },
  {
    branchId: "0212",
    branchName: "Buendia Branch",
    groupId: "MM2",
    active: true,
  },
  { branchId: "0213", branchName: "TORDESILLAS", groupId: "MM2", active: true },
  { branchId: "0214", branchName: "BF HOMES", groupId: "MM6", active: true },
  {
    branchId: "0215",
    branchName: "MAKATI AVENUE",
    groupId: "MM4",
    active: true,
  },
  { branchId: "0216", branchName: "AYALA", groupId: "MM3", active: true },
  {
    branchId: "0217",
    branchName: "ARANETA CENTER",
    groupId: "MM10",
    active: true,
  },
  { branchId: "0218", branchName: "GREENBELT", groupId: "MM3", active: true },
  { branchId: "0219", branchName: "BANAWE", groupId: "MM15", active: true },
  { branchId: "0220", branchName: "NEW MANILA", groupId: "MM15", active: true },
  { branchId: "0221", branchName: "ROOSEVELT", groupId: "MM14", active: true },
  { branchId: "0222", branchName: "STA. MESA", groupId: "MM15", active: true },
  { branchId: "0223", branchName: "BONI", groupId: "MM5", active: true },
  {
    branchId: "0224",
    branchName: "PASEO DE ROXAS",
    groupId: "MM3",
    active: true,
  },
  {
    branchId: "0225",
    branchName: "PASEO DE ROXAS CASH CENTER",
    groupId: "VISAYAS REGION OFFICE",
    active: true,
  },
  { branchId: "0226", branchName: "NAVOTAS BC", groupId: "MM14", active: true },
  {
    branchId: "0227",
    branchName: "SHAW BOULEVARD LAWSON",
    groupId: "MM8",
    active: true,
  },
];
