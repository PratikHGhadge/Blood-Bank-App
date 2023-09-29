import React, { useEffect, useState } from "react";
import { LogoIcon } from "../../shared/Icons";
import { OrganistionMenue } from "./menus/organisationMenu";
import { hospitalMenue } from "./menus/hospitalMenu";
import { donarMenue } from "./menus/donarMenu";
import { adminMenue } from "./menus/adminMenu";
import { useSelector } from "react-redux";
import { printMenu } from "./menus/PrintMenu";

function SideBar() {
  const { user } = useSelector((state) => state.auth);
  const [navigation, setnavigation] = useState([]);

  useEffect(() => {
    // console.log(user?.role);
    if (user?.role === "oraganisation") {
      setnavigation(OrganistionMenue);
    } else if (user?.role === "hospital") {
      setnavigation(hospitalMenue);
    } else if (user?.role === "donar") {
      setnavigation(donarMenue);
    } else if (user?.role === "admin") {
      setnavigation(adminMenue);
    }
  }, [user?.role]);

  return (
    <>
      <div className="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto ">
          <div className="flex justify-center">
            <div className="px-4 items-center">
              <LogoIcon></LogoIcon>
            </div>
            {/* <div className="px-4 pt-4   items-center">
              <MenuIcon></MenuIcon>
            </div> */}
          </div>
          <div className="flex-grow mt-5 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {printMenu(navigation)}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
