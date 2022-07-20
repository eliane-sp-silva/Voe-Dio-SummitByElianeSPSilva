import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default props => {
  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand
          className="nav-brand write"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          Voe com a Dio
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
