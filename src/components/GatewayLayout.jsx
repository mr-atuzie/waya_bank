import React, { useState } from "react";
import Header from "./Header";
import GatewaySidebar from "./GatewaySidebar";
import { NavLink, Outlet } from "react-router-dom";
import { gatewayLinks } from "../data";

const GatewayLayout = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" w-full  bg-[#FAFAFB]   relative ">
      <Header menu={menu} setMenu={setMenu} />
      <div className=" flex h-full  bg-[#FAFAFB]   ">
        <div className=" hidden w-[20%]  lg:block  static left-0 bg-[#FAFAFB]   ">
          <GatewaySidebar />
        </div>

        <div className=" w-full lg:w-[80%]    py-5    ">
          <div className=" w-[90%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      {menu && (
        <div className=" w-full min-h-screen   z-40  absolute  top-0 left-0 bottom-0 bg-black/30 lg:hidden">
          <div className=" py-10 min-h-screen overflow-y-scroll w-[70%] bg-[#FAFAFB] ">
            <div className=" w-full h-full lg:my-[70px]">
              {gatewayLinks.map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    to={link.link}
                    className={({ isActive }) =>
                      isActive
                        ? "  text-[#FF5D2E] rounded font-semibold  bg-[#FFEFEA] block w-full"
                        : " text-[#8C8C8C]"
                    }
                  >
                    <div
                      onClick={() => setMenu(false)}
                      className="flex gap-3 w-full  items-center px-6  py-3"
                    >
                      <div className="  ">{link.text}</div>
                      <p className="font-medium text-[13px]  font2  ">
                        {link.head}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GatewayLayout;
