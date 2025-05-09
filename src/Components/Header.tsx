import React from "react";
import { Button, SearchBox, Toolbar, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, Avatar, Tooltip } from "@fluentui/react-components";
import { Hamburger } from "@fluentui/react-nav-preview";
import { Settings20Filled, Person20Filled, SignOut20Filled } from "@fluentui/react-icons";
interface HeaderProps{
  isNavOpen:boolean;
  setIsNavOpen:any;
}
const Header:React.FC<HeaderProps>  = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <Toolbar
      style={{
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "46px",
        backgroundColor: "#f3f3f3",
      }}
    >
      {/* Hamburger Menu in Header */}
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={() => setIsNavOpen(!isNavOpen)} />
      </Tooltip>

      <div style={{ display: "flex" }}>
        <div style={{paddingTop:"6px"}}>
        <SearchBox appearance="outline" style={{ width: "300px"}} placeholder="Search" />

        </div>
        
       
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button appearance="subtle">
              <Avatar name="Kartik Rajput" size={32} />
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<Person20Filled />}>Profile</MenuItem>
              <MenuItem icon={<Settings20Filled />}>Settings</MenuItem>
              <MenuItem icon={<SignOut20Filled />}>Logout</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </Toolbar>
  );
};

export default Header;
