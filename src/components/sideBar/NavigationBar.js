import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import classes from "./NavigationBar.module.css";
import ReactDOM from "react-dom";
import { RiMenu2Fill } from "react-icons/ri";
import React, { useState } from "react";

function NavigationBar() {
  return (
    <React.Fragment>
      <div className={classes.main}>
        <div>
          <Link title="Menu">
            <RiMenu2Fill />
          </Link>
        </div>
        <div className={classes.main1}>
          <div>
            <Link title="Home" to="/">
              <BiHome />
            </Link>
          </div>
          <div>
            <Link title="Contact" to="/contacts">
              <BsPerson />
            </Link>
          </div>
          <div>
            <Link title="Save">
              <FiSave />
            </Link>
          </div>
          <div>
            <Link title="History">
              <BiTimeFive />
            </Link>
          </div>
          <div>
            <Link title="Storage">
              <BsDatabase />
            </Link>
          </div>
          <div>
            <Link title="Calender">
              <IoCalendarOutline />
            </Link>
          </div>
          <div>
            <Link title="Settings">
              <CiSettings />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavigationBar;
