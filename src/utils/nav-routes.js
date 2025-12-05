import TransferException from "@pages/administration/transfer-exception";
import UserMaintenance from "@pages/administration/user-maintenance";
import ExceptionList from "@pages/exceptions/exception-list";
import Branches from "@pages/table-maintenance/branches";
import ExceptionStatuses from "@pages/table-maintenance/exception-statuses";
import ExceptionTypes from "@pages/table-maintenance/exception-types";
import Groups from "@pages/table-maintenance/groups";
import TransactionTypes from "@pages/table-maintenance/transaction-types";
import UserRoles from "@pages/table-maintenance/user-roles";
import {
  GoHome,
  GoCreditCard,
  GoPeople,
  GoGlobe,
  GoDatabase,
  GoGitBranch,
  GoAlert,
  GoCheck,
  GoGear,
  GoTools,
  GoFileDirectory,
  GoArrowSwitch,
} from "react-icons/go";

export const navRoutes = [
  // SECTION 1: Table Maintenance
  {
    id: "table-maintenance",
    title: "Table Maintenance",
    icon: GoDatabase,
    menu: [
      {
        id: "groups",
        title: "Groups",
        icon: GoPeople,
        path: "/table-maintenance/groups",
        element: Groups,
      },
      {
        id: "branches",
        title: "Branches",
        icon: GoGitBranch,
        path: "/table-maintenance/branches",
        element: Branches,
      },
      {
        id: "user-roles",
        title: "User Roles",
        icon: GoPeople,
        path: "/table-maintenance/user-roles",
        element: UserRoles,
      },
      {
        id: "exception-types",
        title: "Exception Types",
        icon: GoAlert,
        path: "/table-maintenance/exception-types",
        element: ExceptionTypes,
      },
      {
        id: "transaction-types",
        title: "Transaction Types",
        icon: GoCreditCard,
        path: "/table-maintenance/transaction-types",
        element: TransactionTypes,
      },
      {
        id: "exception-status",
        title: "Exception Status",
        icon: GoCheck,
        path: "/table-maintenance/exception-status",
        element: ExceptionStatuses,
      },
    ],
  },

  // SECTION 2: Exceptions (Added from Image)
  {
    id: "exceptions",
    title: "Exceptions",
    icon: GoAlert,
    menu: [
      {
        id: "exception-list",
        title: "Exception List",
        icon: GoFileDirectory,
        path: "/exceptions/exception-list",
        element: ExceptionList,
      },
      {
        id: "report-generation",
        title: "Report Generation",
        icon: GoTools,
        path: "/exceptions/report-generation",
        element: null,
      },
    ],
  },

  // SECTION 3: Administration
  {
    id: "administration",
    title: "Administration",
    icon: GoGear,
    menu: [
      {
        id: "user-maintenance",
        title: "User Maintenance",
        icon: GoTools,
        path: "/administration/user-maintenance",
        element: UserMaintenance,
      },
      {
        id: "group-setup",
        title: "Group Setup",
        icon: GoFileDirectory,
        path: "/administration/group-setup",
        element: null,
      },
      {
        id: "transfer-exceptions",
        title: "Transfer Exceptions",
        icon: GoArrowSwitch,
        path: "/administration/transfer-exceptions",
        element: TransferException,
      },
    ],
  },
];
