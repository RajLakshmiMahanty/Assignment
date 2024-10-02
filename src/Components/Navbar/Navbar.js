import React, { useState } from "react";
import filterIcon from "../../Assets/Images/Tuning.svg";
import downIcon from "../../Assets/Images/Down.svg";
import "./Navbar.css";

const Navbar = (props) => {
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggle = (e, handler) => {
    setToggleFilter((prev) => !prev);
    if (e.target.value) {
      handler(e.target.value);
    }
  };

  return (
    <section className="nav">
      <div className="nav-container">
        <div>
          <div
            className="nav-disp-btn"
            onClick={() => setToggleFilter((prev) => !prev)}
          >
            <div className="nav-disp-icon nav-disp-filter">
              <img src={filterIcon} alt="icon" />
            </div>
            <div className="nav-disp-heading">Display</div>
            <div className="nav-disp-icon nav-disp-drop">
              <img src={downIcon} alt="icon" />
            </div>
          </div>
          <div
            className={`nav-disp-dropdown ${
              toggleFilter ? "nav-disp-dropdown-show" : ""
            }`}
          >
            <div className="nav-disp-filters">
              <div className="nav-dropdown-category">Grouping</div>
              <div className="nav-dropdown-selector">
                <select
                  value={props.groupValue}
                  onChange={(e) => handleToggle(e, props.handleGroupValue)}
                  className="nav-selector"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="nav-disp-filters">
              <div className="nav-dropdown-category">Ordering</div>
              <div className="nav-dropdown-selector">
                <select
                  value={props.orderValue}
                  onChange={(e) => handleToggle(e, props.handleOrderValue)}
                  className="nav-selector"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
