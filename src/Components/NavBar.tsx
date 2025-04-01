import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
import {
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import { Tooltip, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

interface NavBarProps {
  isNavOpen:boolean;
  setIsNavOpen:any;
  fields: {
    key: string;
    label: string;
    icon: JSX.Element;
    path: string;
    
    // selectedValue:string;
    children?: { key: string; label: string; path: string }[];
  }[];
}
type DrawerType = Required<DrawerProps>["type"];

const NavBar: React.FC<NavBarProps> = ({ fields, isNavOpen, setIsNavOpen }) => {
  const styles = useStyles();
  const [types, setType] = React.useState<DrawerType>("inline");

  const updateType = () => {
    const width = window.innerWidth;
    if (width < 500) {
      setType("overlay");

    } else {
      setType("inline");

    }
  };

  React.useEffect(() => {
    updateType();
    window.addEventListener("resize", updateType);
    return () => window.removeEventListener("resize", updateType);
  }, []);

  // const renderHamburgerWithToolTip = () => (
  //   <Tooltip content="Navigation" relationship="label">
  //     <Hamburger onClick={() => setIsOpen(!isOpen)} />
  //   </Tooltip>
  // );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      

      <NavDrawer
        // selectedValue="2"
        open={isNavOpen}
        type={types}
        onOpenChange={(_, { open }) => setIsNavOpen(open)}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <NavDrawerHeader>
        <div>
          <img src={logo} style={{ height: "32px", padding:"12PX" }} alt="Logo" />
        </div>
      </NavDrawerHeader>

        <NavDrawerBody style={{ height: "calc(100vh - 50px)", overflowY: "auto" }}>
          {fields.map((field) =>
            field.children ? (
              <NavCategory key={field.key} value={field.key}>
                <NavCategoryItem value={field.key} icon={field.icon}>
                  {field.label}
                </NavCategoryItem>
                <NavSubItemGroup key={field.key} title={field.label}>
                  {field.children.map((child) => (
                    <NavSubItem key={child.key} value={child.key}>
                      <Link
                        to={child.path}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {child.label}
                      </Link>
                    </NavSubItem>
                  ))}
                </NavSubItemGroup>
              </NavCategory>
            ) : (
              <Link
                key={field.key}
                to={field.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <NavItem key={field.key} icon={field.icon}  value={field.key}>
                  {field.label}
                </NavItem>
              </Link>
            )
          )}
        </NavDrawerBody>
      </NavDrawer>
      
    </div>
  );
};

export default NavBar;