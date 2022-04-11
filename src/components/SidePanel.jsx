import React, { useState, useEffect } from "react";
import axios from "axios";

export const SidePanel = () => {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState("");

  const getDoctorData = async () => {
    try {
      let res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
      );
      setData(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorData();
  }, []);
  const toggleMenu = () => {
    setMenu(true);
  };
  const cancelMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <div
        className={`flex items-center h-fit w-full  relative overflow-y-auto ${
          menu ? "lg:px-5" : "lg:px-32"
        }`}
      >
        <div className="flex flex-col" style={menu ? {} : { display: "none" }}>
          <div className="space-y-2 pt- cursor-pointer pt-3">
            <div className="text-base text-gray-900 font-normal rounded-lg  group transition duration-75 flex items-center p-2">
              <i
                className="fas fa-align-left text-xl text-gray-600 hover:text-gray-400"
                onClick={cancelMenu}
              ></i>
            </div>
          </div>
          <div className="space-y-2 pt- cursor-pointer pt-3 ">
            <button className="text-base text-gray-900 font-normal rounded-lg focus:bg-blue-100 focus:bg-slate-200 group transition duration-75 flex items-center p-2">
              <i className="fas fa-tachometer text-sm text-gray-400"></i>
            </button>
          </div>

          <div className="space-y-2 cursor-pointer pt-3">
            <button className="text-base text-gray-900 font-normal rounded-lg focus:bg-blue-100 focus:bg-slate-200 group transition duration-75 flex items-center p-2">
              <i className="fas fa-calendar-alt text-sm text-gray-400"></i>
            </button>
          </div>
          <div className="space-y-2 cursor-pointer pt-3">
            <button className="text-base text-gray-900 font-normal rounded-lg focus:bg-blue-100 focus:bg-slate-200 group transition duration-75 flex items-center p-2">
              <i className="fas fa-user-alt text-sm text-gray-400"></i>
            </button>
          </div>
          <div className="space-y-2 cursor-pointer pt-3">
            <button className="text-base text-gray-900 font-normal rounded-lg focus:bg-blue-100 focus:bg-slate-200 group transition duration-75 flex items-center p-2">
              <i className="fas fa-comment-dots text-sm text-gray-400"></i>
            </button>
          </div>
          <div className="space-y-2 cursor-pointer pt-3">
            <button className="text-base text-gray-900 font-normal rounded-lg focus:bg-blue-100 focus:bg-slate-200 group transition duration-75 flex items-center p-2">
              <i className="fas fa-sack-dollar text-sm text-gray-400"></i>
            </button>
          </div>
          <div className="space-y-2 cursor-pointer pt-3">
            <button className="text-base text-gray-900 font-normal rounded-lg  focus:bg-blue-100 focus:bg-slate-200group transition duration-75 flex items-center p-2">
              <i className="fas fa-sliders-h text-sm text-gray-400"></i>
            </button>
          </div>
          <div className="realative pace-y-2 cursor-pointer pt-3 pl-0.5">
            <button
              id="dropdownInformationButton"
              data-dropdown-toggle="dropdownInformation"
              className=" text-slate-700 p-1 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center flex items-center max-w-xs bg-slate-200 space-x-4 text-gray-500 rounded-lg shadow bottom-5 left-5 dark:text-gray-400"
              type="button"
            >
              <img
                className="w-5 h-5 rounded-full"
                src="https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png"
                alt="Rounded avatar"
              ></img>
            </button>
          </div>
        </div>
      </div>
      <aside
        style={menu ? { display: "none" } : {}}
        id="sidebar"
        className="fixed z-20 bg-white h-full top-0 left-0  flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col  pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white space-y-1">
              <div className="px-2 flex items-center justify-between py-3">
                <div className="flex items-center justify-start">
                  <div className="text-2xl font-bold flex items-center">
                    <i className="fad fa-h-square text-blue-900 pr-2"></i>
                    <div className="self-center text-slate-700">HELCO</div>
                  </div>
                </div>
                <button
                  id="toggleSidebarMobile"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="text-right text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-300  focus:ring-gray-100 rounded"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-align-left text-xl text-gray-600"></i>
                </button>
              </div>

              <div className="space-y-2 pt-3 cursor-pointer focus:slate-200 ">
                <button className="w-full text-base text-gray-900 font-normal rounded-lg hover:bg-slate-100 group transition duration-75 flex items-center p-2 focus:bg-blue-100 ">
                  <i className="fas fa-tachometer text-sm text-gray-400 "></i>
                  <span className="ml-4 font-bold text-gray-700">Overview</span>
                </button>
              </div>
              <div className="space-y-2 cursor-pointer pt-3 ">
                <button className="text-base w-full text-gray-900 font-normal rounded-lg hover:bg-slate-100 group transition duration-75 flex items-center p-2 focus:bg-blue-100">
                  <i className="fas fa-calendar-alt text-sm text-gray-400"></i>
                  <span className="ml-4 font-bold text-gray-700">Calendar</span>
                </button>
              </div>
              <div className="space-y-2 cursor-pointer pt-3 ">
                <button className="text-base w-full text-gray-900 font-normal rounded-lg hover:bg-slate-100 group transition duration-75 flex items-center p-2 focus:bg-blue-100">
                  <i className="fas fa-user-alt text-sm text-gray-400"></i>
                  <span className="ml-4 font-bold text-gray-700">
                    Patient List
                  </span>
                </button>
              </div>
              <div className="space-y-2 cursor-pointer pt-3 ">
                <button className="text-base w-full text-gray-900 font-normal rounded-lg hover:bg-slate-100 group transition duration-75 flex items-center p-2 focus:bg-blue-100">
                  <i className="fas fa-comment-dots text-sm text-gray-400"></i>
                  <span className="ml-4 font-bold text-gray-700">Messages</span>
                </button>
              </div>
              <div className="space-y-2 cursor-pointer pt-3 ">
                <button className="text-base w-full text-gray-900 font-normal rounded-lg hover:bg-slate-100 group transition duration-75 flex items-center p-2 focus:bg-blue-100">
                  <i className="fas fa-sack-dollar text-sm text-gray-400"></i>
                  <span className="ml-4 font-bold text-gray-700">
                    Payment Information
                  </span>
                </button>
              </div>
              <div className="space-y-2 cursor-pointer pt-3">
                <button className="text-base w-full text-gray-900 font-normal rounded-lg  hover:bg-slate-100 focus:bg-skate-100group transition duration-75 p-2 flex items-center focus:bg-blue-100">
                  <i className="fas fa-sliders-h text-sm text-gray-400"></i>
                  <span className="ml-4 font-bold text-gray-700">settings</span>
                </button>
              </div>

              <div className="realative pt-3 ">
                <button
                  id="dropdownInformationButton"
                  data-dropdown-toggle="dropdownInformation"
                  className=" text-slate-700 p-2 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center absolute flex items-center max-w-xs bg-slate-200 space-x-4 text-gray-500 rounded-lg shadow bottom-5 left-5 dark:text-gray-400"
                  type="button"
                >
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png"
                    alt="Rounded avatar"
                  ></img>
                  {data["name"]}
                  <i className="fas fa-angle-down px-2"></i>
                </button>
              </div>
              <div
                id="dropdownInformation"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style={{
                  position: "absolute",
                  inset: "auto auto 0px 0px",
                  margin: " 0px",
                  transform: "translate3d(440.8px, 2206.4px, 0px)",
                }}
              >
                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                  <div> {data["name"]}</div>
                  <div className="font-small text-gray-500 truncate">
                    {data["specification"]}
                  </div>
                  <div className="font-medium truncate">drgadam@helco.com</div>
                </div>
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownInformationButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Operations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Patients
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
