import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
  } from "@fluentui/react-components";

  import {
    HomeFilled,
    TableFilled,
    FormFilled,
    VideoFilled,
    PersonFilled,
    SettingsFilled,
    NotepadPersonFilled


    
  } from "@fluentui/react-icons";

const BreadCrumbs = ()=>{
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div>
    <Breadcrumb
      aria-label="Large breadcrumb example with buttons"
      size="large"
    >
      {/* <BreadcrumbItem>
      <BreadcrumbButton>
        <Link to="/">
          <HomeFilled /> Home
        </Link>
        </BreadcrumbButton>
      </BreadcrumbItem> */}
      

       {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={name}>
            <BreadcrumbDivider />
            <BreadcrumbItem>
           
            <Link to={routeTo}><BreadcrumbButton  icon={
              name === "home" ? <HomeFilled/>:
              name === "data" ? <TableFilled /> :
              name === "product" ? <VideoFilled /> :
              name === "form" ? <FormFilled/> :
              name === "settings" ? <SettingsFilled/>:
              name === "user" ? <PersonFilled/>:
              name === "role"? <NotepadPersonFilled/>:null}>{name.charAt(0).toUpperCase() + name.slice(1)}</BreadcrumbButton></Link>
            </BreadcrumbItem>
           </React.Fragment>
        );
      })}
    </Breadcrumb>
</div>

  )

}

export default BreadCrumbs;