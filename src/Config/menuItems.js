import {Home24Regular} from "@fluentui/react-icons" ;
import {Video24Regular} from "@fluentui/react-icons" ;
import {TableFreezeRow24Regular} from "@fluentui/react-icons" ;
import {ArrowUpload24Regular} from "@fluentui/react-icons" ;
import {PersonCircle32Regular} from  "@fluentui/react-icons"

export const menuItems = [
  { key: "1", label: "Dashboard", icon: <Home24Regular />, path: "/" },
  { key: "2", label: "Product", icon: <Video24Regular />, path: "/home/product" },
  { key: "3", label: "Data", icon: <TableFreezeRow24Regular />, path: "/home/data" },
  { key: "4", label: "Form", icon: <ArrowUpload24Regular />, path: "/home/form" },
  {
    key: "5",
    label: "User Management",
    icon: <PersonCircle32Regular />,
    path: "/home/user-management",
    children: [
      { key: "6", label: "User", path: "/home/settings/user" },
      { key: "7", label: "Role", path: "/home/settings/role" },
    ],
  },
];