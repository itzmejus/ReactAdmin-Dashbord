import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../Data/SidebarData";
import "../styles/Sidebar.css";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container-fluid con ">
      <div
        class="offcanvas offcanvas-start sidebar "
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header sidebar-heading">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Admin
          </h5>
          <i
            class="bi bi-x-octagon-fill icon"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></i>
        </div>
        <div class="offcanvas-body p-0">
          {SidebarData.map((item, key) => {
            return (
              <NavLink
                to={item.path}
                key={key}
                activeclassName="active"
                className="row link"
              >
                <div className="col icon">{item.icon}</div>
                <div className="col ">{item.name}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="   ">{children}</div>
    </div>
  );
};

export default Sidebar;
