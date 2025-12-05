import React, { useState } from "react";
import Card from "@components/containers/card";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import IconButton from "@components/buttons/icon-button";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Button from "@components/buttons/button";
import RegistrationModal from "./modals/registration-modal";
import Messagebox from "@helpers/messagebox";
import EditModal from "./modals/edit-modal";

export default function Groups() {
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState({ regModal: false, editModal: false });

  return (
    <Card>
      <RegistrationModal
        isOpen={show?.regModal}
        onClose={() => setShow({ ...show, regModal: false })}
      />
      <EditModal
        isOpen={show?.editModal}
        onClose={() => setShow({ ...show, editModal: false })}
      />
      <div className="flex justify-end p-2 w-full">
        <Button
          icon={FaPlus}
          color="green"
          onClick={() => setShow({ ...show, regModal: true })}
        >
          Add New
        </Button>
      </div>
      <Table
        title="Organizational Structure"
        description="Manage regions, groups, and segments."
        columns={[
          "ID",
          "DESCRIPTION",
          "LEVEL DESCRIPTION",
          "STATUS",
          "CONTROLS",
        ]}
        data={MOCK_DATA}
        setData={setTableData} // Table updates this slice based on pagination
        loading={false}
      >
        {tableData.map((item, index) => (
          <TableRow key={item.id} row={index}>
            <TableData>
              <span className="font-semibold text-blue-400">{item.id}</span>
            </TableData>
            <TableData>{item.description}</TableData>
            <TableData>{item.level}</TableData>
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
                  onClick={() => setShow({ ...show, editModal: true })}
                />
                <IconButton
                  icon={FaTrash}
                  theme={"red"}
                  tooltip={"Delete"}
                  tooltipPosition="top"
                  onClick={() => {
                    Messagebox.confirm(
                      "Delete Group?",
                      "Click confirm to continue",
                      () => {
                        Messagebox.success(
                          "Success",
                          "Group has been deleted successfully"
                        );
                      }
                    );
                  }}
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
    id: 1000,
    description: "VISAYAS REGION OFFICE",
    level: "Region",
    active: true,
  },
  {
    id: 1001,
    description: "SOUTH METRO MANILA REGION",
    level: "Region",
    active: true,
  },
  {
    id: 1002,
    description: "RETAIL BANKING GROUP",
    level: "Group",
    active: true,
  },
  {
    id: 1003,
    description: "NORTHEAST METRO MANILA REGION",
    level: "Region",
    active: true,
  },
  {
    id: 1004,
    description: "CENTRAL METRO MANILA REGION",
    level: "Region",
    active: true,
  },
  {
    id: 1005,
    description: "NORTHERN LUZON REGION",
    level: "Region",
    active: true,
  },
  {
    id: 1006,
    description: "SOUTHERN LUZON REGION",
    level: "Region",
    active: true,
  },
  {
    id: 1007,
    description: "CHINESE BANKING SEGMENT (CHBS - 1)",
    level: "Region",
    active: true,
  },
  {
    id: 1008,
    description: "CHINESE BANKING SEGMENT (CHBS - 2)",
    level: "Region",
    active: true,
  },
  {
    id: 1009,
    description: "CORPORATE BANKING SEGMENT (CBS)",
    level: "Region",
    active: true,
  },
  {
    id: 1010,
    description: "JAPANESE AND ECOZONE BUSINESS (JES)",
    level: "Region",
    active: true,
  },
  {
    id: 1011,
    description: "OPERATIONS CONTROL DIVISION (1)",
    level: "Area",
    active: true,
  },
  { id: 1012, description: "OPERATIONS GROUP", level: "Group", active: true },
  {
    id: 1013,
    description: "RETAIL AND CHANNELS DIVISION 1",
    level: "Area",
    active: true,
  },
  {
    id: 1014,
    description: "HEAD OFFICE OPERATIONS DIVISION (1)",
    level: "Area",
    active: true,
  },
  {
    id: 1015,
    description: "RBG OPS - METRO MANILA 1",
    level: "Area",
    active: true,
  },
  {
    id: 1016,
    description: "RBG OPS - METRO MANILA 4",
    level: "Area",
    active: true,
  },
  { id: 1017, description: "CSMED", level: "Group", active: true },
  { id: 1019, description: "RBG - BSRSD", level: "Region", active: true },
  {
    id: 1020,
    description: "CORPORATE BANKING GROUP",
    level: "Group",
    active: true,
  },
  {
    id: 1021,
    description: "OFBG (OVERSEAS FILIPINO BANKING GROUP)",
    level: "Group",
    active: true,
  },
  {
    id: 1022,
    description: "TELEMONEY MANNING/SHIPPING DIVISION",
    level: "Area",
    active: true,
  },
  {
    id: 1023,
    description: "TELEMONEY REMITTANCE TIE-UPS DIVISION",
    level: "Area",
    active: true,
  },
  { id: 1024, description: "BRANCH RECIPIENT", level: "Branch", active: true },
  { id: 1025, description: "OFBG SEGMENT", level: "Region", active: true },
  { id: 1026, description: "CBS - DIVISION 1", level: "Area", active: true },
  { id: 1028, description: "JES - DIVISION 1", level: "Area", active: true },
  { id: 1029, description: "JES - DIVISION 2", level: "Area", active: true },
  { id: 1031, description: "CBS - DIVISION 2", level: "Area", active: true },
  { id: 1032, description: "CHBS 1 - DIVISION 1", level: "Area", active: true },
  { id: 1033, description: "CHBS 1 - DIVISION 2", level: "Area", active: true },
  { id: 1034, description: "CHBS 2 - DIVISION 1", level: "Area", active: true },
  {
    id: 1035,
    description: "CBS - CONGLOMERATE",
    level: "Region",
    active: true,
  },
  { id: 1039, description: "CSMED - DIVISION", level: "Area", active: true },
  { id: 1040, description: "CLSD - DIVISION", level: "Area", active: true },
  {
    id: 1041,
    description: "Head Office Operations Division (2)",
    level: "Region",
    active: true,
  },
  { id: 1043, description: "CHQ AND MAKATI CBD", level: "Area", active: true },
  { id: 1044, description: "MAKATI CBD", level: "Area", active: true },
  { id: 1045, description: "ORTIGAS CBD", level: "Area", active: true },
  { id: 1046, description: "CHINESES UPTOWN", level: "Area", active: true },
  {
    id: 1047,
    description: "SOUTHWEST METRO MANILA",
    level: "Area",
    active: true,
  },
  { id: 1048, description: "UPPER NORTH METRO", level: "Area", active: true },
  { id: 1049, description: "CHINESE DOWNTOWN", level: "Area", active: true },
  { id: 1050, description: "SOUTH EAST MANILA", level: "Area", active: true },
  { id: 1051, description: "NORTH EAST MANILA", level: "Area", active: true },
  { id: 1052, description: "NORTH WEST LUZON", level: "Area", active: true },
  { id: 1053, description: "NORTH CENTRAL LUZON", level: "Area", active: true },
  { id: 1054, description: "NORTH EAST LUZON", level: "Area", active: true },
  { id: 1055, description: "SOUTH WEST LUZON", level: "Area", active: true },
  { id: 1056, description: "SOUTH CENTRAL LUZON", level: "Area", active: true },
  { id: 1057, description: "SOUTH EAST LUZON", level: "Area", active: true },
  { id: 1058, description: "METRO CEBU", level: "Area", active: true },
  {
    id: 1059,
    description: "CENTRAL EASTERN VISAYAS",
    level: "Area",
    active: true,
  },
  { id: 1060, description: "NEGROS OCCIDENTAL", level: "Area", active: true },
  {
    id: 1061,
    description: "WESTERN VISAYAS PANAY",
    level: "Area",
    active: true,
  },
  { id: 1062, description: "NORTHERN MINDANAO", level: "Area", active: true },
  { id: 1063, description: "SOUTHERN MINDANAO", level: "Area", active: true },
  { id: 1064, description: "CENTRAL MINDANAO", level: "Area", active: true },
  {
    id: 1066,
    description: "RBG CORPORATE HEADQUARTERS",
    level: "Region",
    active: true,
  },
  {
    id: 1067,
    description: "NORTH METRO MANILA REGIONAL OFFICE",
    level: "Region",
    active: true,
  },
  {
    id: 1068,
    description: "LUZON REGIONAL OFFICE",
    level: "Region",
    active: true,
  },
  {
    id: 1069,
    description: "MINDANAO REGIONAL OFFICE",
    level: "Region",
    active: true,
  },
  {
    id: 1070,
    description: "RCBC MAIN - CORPORATE HQ",
    level: "Area",
    active: true,
  },
  {
    id: 1071,
    description: "Retail and Channels Division (2)",
    level: "Region",
    active: true,
  },
  {
    id: 1072,
    description: "Operations Control Division (2)",
    level: "Region",
    active: true,
  },
  {
    id: 1073,
    description: "ITGSSG - Shared Services Group",
    level: "Group",
    active: true,
  },
  {
    id: 1074,
    description: "ITG - security office 2",
    level: "Area",
    active: true,
  },
  {
    id: 1075,
    description: "IT Risk Governance",
    level: "Region",
    active: true,
  },
  {
    id: 1076,
    description: "WEALTH MANAGEMENT GROUP",
    level: "Group",
    active: true,
  },
  {
    id: 1077,
    description: "NORTH EASTERN MINDANAO",
    level: "Group",
    active: true,
  },
  { id: 1078, description: "Talisay", level: "Branch", active: true },
  {
    id: 1079,
    description: "OFFICE OF THE MKTG. & SALES DIRECTOR - MAKATI CBD",
    level: "Region",
    active: true,
  },
  {
    id: 1080,
    description: "METRO MANILA SERVICE REGION",
    level: "Region",
    active: true,
  },
  { id: 1081, description: "NO GROUP", level: "Group", active: true },
  { id: 1083, description: "MM1", level: "Region", active: true },
  { id: 1084, description: "MM2", level: "Region", active: true },
  { id: 1085, description: "MM3", level: "Region", active: true },
  { id: 1086, description: "MM4", level: "Region", active: true },
  { id: 1087, description: "MM5", level: "Region", active: true },
  { id: 1088, description: "MM6", level: "Region", active: true },
  { id: 1089, description: "MM7", level: "Region", active: true },
  { id: 1090, description: "MM8", level: "Region", active: true },
  { id: 1091, description: "MM9", level: "Region", active: true },
  { id: 1092, description: "MM10", level: "Region", active: true },
  { id: 1093, description: "MM11", level: "Region", active: true },
  { id: 1094, description: "MM12", level: "Region", active: true },
  { id: 1095, description: "MM13", level: "Region", active: true },
  { id: 1096, description: "MM14", level: "Region", active: true },
  { id: 1097, description: "MM15", level: "Region", active: true },
  { id: 1098, description: "L1", level: "Region", active: true },
  { id: 1099, description: "L2", level: "Region", active: true },
  { id: 1100, description: "L3", level: "Region", active: true },
  { id: 1101, description: "L4", level: "Region", active: true },
  { id: 1102, description: "L5", level: "Region", active: true },
  { id: 1103, description: "L6", level: "Region", active: true },
  { id: 1104, description: "L7", level: "Region", active: true },
  { id: 1105, description: "L8", level: "Region", active: true },
  { id: 1106, description: "L9", level: "Region", active: true },
  { id: 1107, description: "L10", level: "Region", active: true },
  { id: 1108, description: "V1", level: "Region", active: true },
];
