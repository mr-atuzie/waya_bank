import React from "react";
import { TiUserAdd } from "react-icons/ti";
import { formatter } from "../../utils";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <section className=" font2 w-full min-h-screen">
        <div className=" w-full flex justify-between  items-end mb-3">
          <h1 className=" text-sm lg:text-base font-semibold  ">
            Hey David Okulola - <br className=" lg:hidden" />
            <span className="  text-[#71717A]">Welcome Back!</span>
          </h1>

          <Link className=" hidden lg:block" to={"/dashboard/add-user/option"}>
            <button className=" text-sm lg:text-base bg-[#FF5D2E] font-semibold  p-2 lg:py-[12px]  lg:px-[16px] text-white flex justify-center items-center gap-2 rounded-[12px]">
              <TiUserAdd size={20} />
              Add a user
            </button>
          </Link>
        </div>

        {/* dasboard card */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              Number of users
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(2500)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              Number of active users
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(1800)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              Number of inactive users
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(350)}</h1>

              <p className=" text-[#F04438] font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              total customers
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(33000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
        </div>

        {/* dasboard graph */}
        <div className=" lg:block p-3 bg-white w-[797px] h-[328px] mt-8   border border-gray-200 rounded-[10px]">
          <div className=" flex justify-between items-center">
            <h1 className=" text-base font-semibold ">Sales Report</h1>

            <div className=" flex items-center gap-2">
              <button className=" p-3 border-gray-400 border text-xs font-semibold rounded-[10px]">
                12 months
              </button>
              <button className=" p-3 text-gray-500  text-xs font-semibold rounded-[10px]">
                6 months
              </button>
              <button className=" p-3 text-gray-500  text-xs font-semibold rounded-[10px]">
                30 Days
              </button>
              <button className=" p-3 text-gray-500  text-xs font-semibold rounded-[10px]">
                7 Days
              </button>
            </div>

            <button className=" p-2 border-gray-400 border flex items-center gap-1 text-xs font-semibold rounded-[10px]">
              <FaRegFilePdf size={20} />
              Export PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
