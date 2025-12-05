import React, { useState } from "react";
import { Table, TableRow, TableData } from "@components/tables/table";
import StatusBadge from "@components/badges/status-badge";
import Card from "@components/containers/card";
import IconButton from "@components/buttons/icon-button";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrash, FaUnlock } from "react-icons/fa6";
import Button from "@components/buttons/button";
import { MdLockReset } from "react-icons/md";

export default function UserMaintenance() {
  const [tableData, setTableData] = useState([]);

  const UserIdLink = ({ id }) => (
    <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline hover:text-blue-800 dark:hover:text-blue-300">
      {id}
    </span>
  );

  return (
    <Card>
      <div className="flex justify-end p-2 w-full gap-2">
        <Button icon={FaPlus} color="green">
          Add New
        </Button>
      </div>
      <Table
        title="User List"
        description="Manage system users, employees, and account status."
        columns={[
          "USER ID",
          "LAST NAME",
          "FIRST NAME",
          "MIDDLE NAME",
          "STATUS",
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
            <TableData>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                {item.lastName}
              </span>
            </TableData>
            <TableData>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                {item.firstName}
              </span>
            </TableData>
            <TableData>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                {item.middleName !== "NA" && item.middleName !== "-"
                  ? item.middleName
                  : ""}
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
                  icon={MdLockReset}
                  theme={"yellow"}
                  tooltip={"Reset Password"}
                  tooltipPosition="top"
                />
                <IconButton
                  icon={FaUnlock}
                  theme={"orange"}
                  tooltip={"Unlock"}
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

// Parsed Data from your text
const MOCK_DATA = [
  {
    userId: "aad53051",
    lastName: "Dulalumpa",
    firstName: "Asita",
    middleName: "A",
    active: true,
  },
  {
    userId: "AAG54078",
    lastName: "GALAS",
    firstName: "ADONIS",
    middleName: "A.",
    active: true,
  },
  {
    userId: "ABB55044",
    lastName: "TEST",
    firstName: "Belen Arianne Lee",
    middleName: "NA",
    active: false,
  },
  {
    userId: "ABC50017",
    lastName: "COMA",
    firstName: "ARCHIEBALD",
    middleName: "OQUIN",
    active: true,
  },
  {
    userId: "abm53718",
    lastName: "Mendoza",
    firstName: "Angelica",
    middleName: "B",
    active: true,
  },
  {
    userId: "ABP67911",
    lastName: "PLANES",
    firstName: "ALMA",
    middleName: "BELGERA",
    active: true,
  },
  {
    userId: "ACA51222",
    lastName: "ABARCA JR.",
    firstName: "ARTURO",
    middleName: "CABASA",
    active: true,
  },
  {
    userId: "ACA60593",
    lastName: "ALVAREZ",
    firstName: "ALLAN",
    middleName: "CONSTANTINO",
    active: true,
  },
  {
    userId: "ACC62197",
    lastName: "CHUPECO",
    firstName: "ANGELITO",
    middleName: "CARDONA",
    active: true,
  },
  {
    userId: "admin",
    lastName: "admin",
    firstName: "t",
    middleName: "Lord Byron Pilares",
    active: true,
  },
  {
    userId: "admin01",
    lastName: "admin01",
    firstName: "admin",
    middleName: "-",
    active: true,
  },
  {
    userId: "agv54046",
    lastName: "Gomez",
    firstName: "Angela",
    middleName: "V",
    active: true,
  },
  {
    userId: "AMB52239",
    lastName: "TEST",
    firstName: "BINANCILAN",
    middleName: "ADRYL HALENA",
    active: true,
  },
  {
    userId: "APL55653",
    lastName: "LOPEZ",
    firstName: "ARTHUR",
    middleName: "PAGAS",
    active: false,
  },
  {
    userId: "ARO50090",
    lastName: "ADORMIO",
    firstName: "OLIVER ALVIN",
    middleName: "RAGANAS",
    active: true,
  },
  {
    userId: "AYO57315",
    lastName: "TEST",
    firstName: "Ocampo",
    middleName: "Arrah Vanessa",
    active: true,
  },
  {
    userId: "BOH60011",
    lastName: "BOH1 Pacific Place",
    firstName: "BOH1 Pacific Place",
    middleName: "-",
    active: true,
  },
  {
    userId: "BOH60012",
    lastName: "BOH60012",
    firstName: "BOH60012",
    middleName: "-",
    active: true,
  },
  {
    userId: "BOH60201",
    lastName: "BOH1 Morong",
    firstName: "BOH1 Morong",
    middleName: "-",
    active: true,
  },
  {
    userId: "BRT72834",
    lastName: "TACDER, JR.",
    firstName: "BENITO",
    middleName: "REMITAR",
    active: true,
  },
  {
    userId: "CAS56565",
    lastName: "TEST",
    firstName: "SIAO",
    middleName: "COLEEN GRACE",
    active: true,
  },
  {
    userId: "CBC55765",
    lastName: "CARDEÑAS",
    firstName: "CARLO",
    middleName: "BALURAN",
    active: true,
  },
  {
    userId: "CBQ35793",
    lastName: "TEST",
    firstName: "QUINZON",
    middleName: "CORNELIO B.",
    active: true,
  },
  {
    userId: "cbu123",
    lastName: "aaa",
    firstName: "",
    middleName: "",
    active: true,
  },
  {
    userId: "ccm40100",
    lastName: "MANALO",
    firstName: "CARIDAD",
    middleName: "C.",
    active: false,
  },
  {
    userId: "CCM57656",
    lastName: "TEST",
    firstName: "Mabuti",
    middleName: "Chrisly Caezar",
    active: true,
  },
  {
    userId: "ccr55140",
    lastName: "Romano",
    firstName: "Christine",
    middleName: "C.",
    active: true,
  },
  {
    userId: "CGA57940",
    lastName: "TEST",
    firstName: "ARBUTANTE",
    middleName: "CAMILLE LOVE",
    active: true,
  },
  {
    userId: "CGC50827",
    lastName: "CONALES",
    firstName: "CLAIRE",
    middleName: "GORECHO",
    active: true,
  },
  {
    userId: "CIF58046",
    lastName: "TEST",
    firstName: "Fulgencio",
    middleName: "Cristagene",
    active: true,
  },
  {
    userId: "CNS69256",
    lastName: "CAJIGAL",
    firstName: "CECILIA",
    middleName: "SANTOS",
    active: true,
  },
  {
    userId: "CSB50988",
    lastName: "TEST",
    firstName: "Banga",
    middleName: "Crystal S.",
    active: true,
  },
  {
    userId: "CSL51816",
    lastName: "LOPEZ",
    firstName: "CHRISTINE",
    middleName: "SERENIO",
    active: true,
  },
  {
    userId: "CSO56663",
    lastName: "TEST",
    firstName: "Opiniano",
    middleName: "Chershey Arra",
    active: true,
  },
  {
    userId: "cvf54520",
    lastName: "Fernandez",
    firstName: "Charles Emmanuel",
    middleName: "Velasco",
    active: true,
  },
  {
    userId: "DAD50814",
    lastName: "SUMALPONG",
    firstName: "DINA",
    middleName: "LOU D",
    active: true,
  },
  {
    userId: "DFG61012",
    lastName: "GORME",
    firstName: "DEOLITO",
    middleName: "F",
    active: true,
  },
  {
    userId: "DMB51998",
    lastName: "TEST",
    firstName: "Yap",
    middleName: "Bhezlyn M.",
    active: true,
  },
  {
    userId: "DPM56007",
    lastName: "TEST",
    firstName: "MALINAO",
    middleName: "DIANNE ANGELA",
    active: true,
  },
  {
    userId: "DSR001",
    lastName: "Rumbaoa",
    firstName: "Dennis",
    middleName: "Santos",
    active: true,
  },
  {
    userId: "EAD68578",
    lastName: "DOME",
    firstName: "EMILY",
    middleName: "ABELLA",
    active: true,
  },
  {
    userId: "EFA35807",
    lastName: "FACURI",
    firstName: "ESTHER",
    middleName: "AGUAS",
    active: true,
  },
  {
    userId: "egl54835",
    lastName: "Louca",
    firstName: "Eleni Athena",
    middleName: "G",
    active: true,
  },
  {
    userId: "EIT56129",
    lastName: "TOLENTINO",
    firstName: "EMMAUEL",
    middleName: "I",
    active: true,
  },
  {
    userId: "ERM61403",
    lastName: "TEST",
    firstName: "Mistica",
    middleName: "Ephraim R.",
    active: true,
  },
  {
    userId: "ESS54869",
    lastName: "TEST",
    firstName: "SOLIVEN",
    middleName: "EMILITA S.",
    active: true,
  },
  {
    userId: "ETC56805",
    lastName: "TEST",
    firstName: "Calabio Jr",
    middleName: "Edgardo",
    active: true,
  },
  {
    userId: "FFM56337",
    lastName: "TEST",
    firstName: "MACASERO",
    middleName: "FAITH CHARMAINE",
    active: true,
  },
  {
    userId: "GCT61954",
    lastName: "TACSIAT",
    firstName: "GLEN",
    middleName: "C",
    active: true,
  },
  {
    userId: "GMG62203",
    lastName: "GENETA",
    firstName: "GERALD",
    middleName: "MARAMOT",
    active: true,
  },
  {
    userId: "GPT54426",
    lastName: "TAC-AN",
    firstName: "GRACE MARIEL",
    middleName: "P",
    active: true,
  },
  {
    userId: "HBT53913",
    lastName: "TAPANG",
    firstName: "HERNANDO",
    middleName: "B.",
    active: true,
  },
  {
    userId: "HEC56640",
    lastName: "TEST",
    firstName: "Calupit",
    middleName: "Hannah",
    active: true,
  },
  {
    userId: "HMO55630",
    lastName: "TEST",
    firstName: "Ortencio",
    middleName: "Hasten",
    active: true,
  },
  {
    userId: "HPE56084",
    lastName: "TEST",
    firstName: "Estubio",
    middleName: "Hiroshi",
    active: true,
  },
  {
    userId: "hta46027",
    lastName: "AGCAOILI",
    firstName: "HAZEL",
    middleName: "T.",
    active: true,
  },
  {
    userId: "IDA60067",
    lastName: "ALELUYA",
    firstName: "IAN JAY",
    middleName: "D",
    active: true,
  },
  {
    userId: "irb50550",
    lastName: "bula",
    firstName: "ivy marie",
    middleName: "c",
    active: false,
  },
  {
    userId: "JAL61176",
    lastName: "LICOm",
    firstName: "JOYMEE ANN",
    middleName: "AUTENTICO",
    active: true,
  },
  {
    userId: "JAY40975",
    lastName: "TEST",
    firstName: "AGOSITO",
    middleName: "JENNIFER Y",
    active: true,
  },
  {
    userId: "jba56153",
    lastName: "Araiz",
    firstName: "Jerry JR.",
    middleName: "Banay",
    active: true,
  },
  {
    userId: "JBA60009",
    lastName: "ABARQUEZ",
    firstName: "JANINE",
    middleName: "BERJA",
    active: true,
  },
  {
    userId: "JBM50087",
    lastName: "MADRID",
    firstName: "MARIE JEAN",
    middleName: "BAKIL",
    active: true,
  },
  {
    userId: "JCB55988",
    lastName: "BRETANA",
    firstName: "JOJEAN ANNE",
    middleName: "C.",
    active: true,
  },
  {
    userId: "JCT51057",
    lastName: "TEST",
    firstName: "Torreda",
    middleName: "Jay C.",
    active: true,
  },
  {
    userId: "JDC56954",
    lastName: "TEST",
    firstName: "Carlos",
    middleName: "Jan Matthew",
    active: true,
  },
  {
    userId: "JDC56955",
    lastName: "TEST",
    firstName: "Carreon",
    middleName: "Jerrlyn",
    active: true,
  },
  {
    userId: "JDP53765",
    lastName: "TEST",
    firstName: "PASTOR",
    middleName: "JOHN KEVIN CHARLES",
    active: true,
  },
  {
    userId: "JEM44261",
    lastName: "TEST",
    firstName: "MEDRANO",
    middleName: "JOEL E.",
    active: true,
  },
  {
    userId: "JFF57410",
    lastName: "TEST",
    firstName: "Famarin",
    middleName: "Joyce Ann F.",
    active: true,
  },
  {
    userId: "JFT58009",
    lastName: "FRANCISCO",
    firstName: "JENNIFER",
    middleName: "TECSON",
    active: true,
  },
  {
    userId: "JGA55542",
    lastName: "TEST",
    firstName: "ALQUIZA",
    middleName: "JACQUELINE",
    active: true,
  },
  {
    userId: "jgb53815",
    lastName: "BASCO",
    firstName: "JULIE ROSELLE",
    middleName: "GERALDINO",
    active: true,
  },
  {
    userId: "JGM70874",
    lastName: "TEST",
    firstName: "Marquez",
    middleName: "Joesph G.",
    active: true,
  },
  {
    userId: "JHR61747",
    lastName: "TEST",
    firstName: "Rivera",
    middleName: "Jose Miguel H.",
    active: true,
  },
  {
    userId: "JMG56501",
    lastName: "TEST",
    firstName: "GARCIA",
    middleName: "JUSTIN",
    active: true,
  },
  {
    userId: "JMI002",
    lastName: "Icaro",
    firstName: "Jenny",
    middleName: "Molina",
    active: true,
  },
  {
    userId: "JRL54936",
    lastName: "TEST",
    firstName: "LONZON",
    middleName: "JENIFER",
    active: true,
  },
];
