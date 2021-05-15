import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

function HeaderItems({mobileTogleFn}) {



  return (
    <React.Fragment>
    <div className="headerItem">
      <a className="item" href="#home">
        Home
      </a>
      <a className="item" href="#about">
        About
      </a>
      <a className="item" href="#works">
        Works
      </a>
      <a className="item" href="#footer">
        Contact
      </a>
      <div className="headerMenu">
        {" "}
        <MenuIcon className=" item" onClick={mobileTogleFn} />
      </div>
    </div>
    
    </React.Fragment>
  );
}

export default HeaderItems;
