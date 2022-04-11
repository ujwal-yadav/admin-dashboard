import React, { useEffect, useState } from "react";
import { SidePanel } from "../components/SidePanel";
import "./Dashboard.css";
import axios from "axios";

export const Dashboard = () => {
  const [data, setData] = useState("");
  const [apdata, setApdata] = useState("");
  const [opt, setOpt] = useState(1);

  const getPatientData = async () => {
    try {
      let res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
      );
      setData(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAppoinData = async () => {
    try {
      let res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
      );

      setApdata(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const optSelect = (a) => {
    setOpt(a);
  };

  useEffect(() => {
    getPatientData();
    getAppoinData();
  }, []);

  return (
    <div>
      <div>
        <div className="flex overflow-hidden bg-white">
          <SidePanel />
          <div
            id="main-content"
            className="h-full w-full bg-blue-50 relative overflow-y-auto "
          >
            <div className="px-4 border-20 divide-y">
              <div className="md:flex md:items-center md:justify-between  py-4 md:py-4 xl:py-4 ">
                <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                  <li>
                    <i className="far fa-user text-blue-500 text-2xl font-bold pr-2"></i>
                  </li>
                  <li>
                    <h1 className="text-xl font-bold text-slate-700">
                      {data["name"]}
                    </h1>
                  </li>
                </ul>
                <div className="flex sm:justify-center space-x-4">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className="fas fa-search text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <i className="fas fa-plus-circle  text-3xl text-blue-500 cursor-pointer"></i>
                  </div>
                  <div>
                    <i className="fad fa-bell text-3xl  cursor-pointer"></i>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 rounded overflow-hidden">
                <div className="w-full"></div>
              </div>

              <div className="md:flex md:items-center md:justify-between  py-4 md:py-4 xl:py-4">
                <div className="flex items-center flex-wrap mb-6 md:mb-0">
                  <div className="text-md font-semibold text-blue-500 cursor-pointer">
                    Patient List
                  </div>
                  <i className="fas fa-angle-right px-1 text-2xl text-slate-400"></i>
                  <div className="text-md font-semibold text-slate-400 cursor-pointer">
                    {data["name"]}
                  </div>
                </div>
                <div className="flex sm:justify-center space-x-4">
                  <div>
                    <i className="far fa-print text-2xl text-slate-400 hover:text-slate-700 cursor-pointer"></i>
                  </div>
                  <div>
                    <i className="far fa-edit text-2xl text-slate-400 hover:text-slate-700 cursor-pointer"></i>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 rounded overflow-hidden">
                <div className="w-full "></div>
              </div>
              <div className="bg-gray-300 rounded overflow-hidden">
                <div className="w-full "></div>
              </div>
            </div>

            <main>
              <div className="pt-6 px-4">
                <div className="grid  grid-cols-1 lg:grid-cols-4  gap-4 lg:gap-0">
                  <div className="bg-white shadow rounded-lg py-4 px-2 2xl:col-h1-2  lg:mr-2 ">
                    <div className=" flex items-center justify-between cursor-pointer ">
                      <section className="text-gray-600 text-center body-font">
                        <div className="container mx-auto flex py-10 flex items-center justify-center flex-col">
                          <img
                            className="w-1/4 mb-10 object-cover object-center rounded-full"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                          />
                          <div className="text-center lg:w-2/3 w-full">
                            <h1 className="text-xl font-bold text-slate-700">
                              {data["name"]}
                            </h1>
                            <p className="leading-relaxed">{data["e-email"]}</p>
                            <div className="flex justify-center divide-x my-4">
                              <div className="w-full text-center text-md font-bold">
                                {data["Past"]}
                                <div className="text-gray-400 text-sm font-thin">
                                  Past
                                </div>
                              </div>

                              <div className="w-full text-center text-md font-bold">
                                {data["Upcoming"]}
                                <div className="text-gray-400 text-sm font-thin">
                                  Upcoming
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <button className="border-2 border-gray-200 font-semibold text-md w-full text-center text-gray-500 p-2 focus:outline-none hover:bg-gray-200 rounded">
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="bg-white col-span-1 lg:col-span-2 shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-h1-2 lg:mr-6 ">
                    <div className="flex flex-cols items-center justify-between mb-4 h-full">
                      <div className="grid grid-rows-3 grid-flow-col lg:gap-20 gap-1 ">
                        <div className="text-gray-400  text-sm font-semibold border-b-2 pb-2 ">
                          Gender
                          <div className="text-gray-900 text-md font-normal">
                            {data["Gender"]}
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          Street Address
                          <div className="text-gray-900 text-md font-normal">
                            {data["Street Address"]}
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          Member Status
                          <div className="text-gray-900 text-md font-normal">
                            {data["Member Status"]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-rows-3 grid-flow-col lg:gap-20 gap-1">
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          Birthday
                          <div className="text-gray-900 text-md font-normal">
                            {data["Birthday"]}
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          City
                          <div className="text-gray-900 text-md font-normal">
                            Cilacap
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          Registered Date
                          <div className="text-gray-900 text-md font-normal">
                            {data["Register Date"]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-rows-3 grid-flow-col lg:gap-20 gap-1">
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          Phone Number
                          <div className="text-gray-900 text-md font-normal">
                            {data["Phone Number"]}
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm font-semibold border-b-2 pb-2">
                          Zipcode
                          <div className="text-gray-900 text-md font-normal">
                            {data["ZIP Code"]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white shadow rounded-lg py-4 px-2 2xl:col-h1-2 ">
                    <div className=" flex items-center justify-between">
                      <div className="w-full rounded">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap lg:flex-row sm:flex-col">
                          <p className="text-gray-500 text-md text-center mr-auto font-medium  ">
                            Notes
                          </p>
                          <span className="inline-flex sm:ml-auto sm:mt-0 sm:justify-start text-blue-500 font-medium">
                            See all
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between">
                      <div className="bg-slate-200 w-full rounded-t  h-44">
                        <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row space-y-3 ">
                          <p className="text-gray-500 text-md sm:text-left font-medium">
                            -This pateint is Lorem ipsum.
                          </p>
                          <p className="text-gray-500 text-md sm:text-left font-medium ">
                            -Lorem ipsum Quis cupiditate sit aperiam.
                          </p>
                          <p className="text-gray-500 text-md sm:text-left font-medium">
                            -Non pariatur consequatur aut.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between bg-slate-200 rounded-b pt-10">
                      <div className="w-full">
                        <div className="container mx-auto py-4 px-2 flex flex-wrap flex-col sm:flex-row ">
                          <button
                            type="button"
                            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start  text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600  focus:outline-none "
                          >
                            save note
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between">
                      <div className="w-full rounded">
                        <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
                          <p className="text-gray-500 text-md sm:text-left font-medium">
                            Lorem ipsum dolor
                          </p>
                        </div>
                        <div className="container mx-auto px-5 flex flex-wrap flex-col sm:flex-row">
                          <p className="text-gray-400 text-md sm:text-left">
                            <i className="fal fa-user pr-1 text-blue-500 font-medium"></i>
                            Darg kemin ehlu
                          </p>

                          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2  text-gray-400 text-sm">
                            30 April '22
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* second row */}

            <main>
              <div className="pt-6 px-4">
                <div className=" grid  grid-cols-1 lg:grid-cols-3  gap-4 lg:gap-0">
                  <div className="bg-white col-span-3 lg:col-span-2  rounded-lg p-4 sm:p-4 xl:p-6 2xl:col-h1-2 lg:mr-6">
                    <div className="bg-gray-200 rounded-lg container mx-auto flex flex-wrap mb-2 py-2">
                      <button
                        onClick={() => optSelect("1")}
                        className=" flex relative sm:items-center mx-auto  px-4 py-2 rounded-md font-medium text-blue-500 cursor-pointer  hover:bg-gray-50 focus:bg-white "
                      >
                        Upcoming Appointments
                      </button>
                      <button
                        onClick={() => optSelect("2")}
                        className="flex relative  sm:items-center  mx-auto  px-4 py-2 rounded-md font-medium text-blue-500 cursor-pointer  hover:bg-gray-50 focus:bg-white"
                      >
                        Past Appointments
                      </button>
                      <button
                        onClick={() => optSelect("3")}
                        className="flex relative  sm:items-center  mx-auto  px-4 py-2 rounded-md font-medium text-blue-500 cursor-pointer  hover:bg-gray-50 focus:bg-white"
                      >
                        Medical Records
                      </button>
                    </div>
                    <div className="bg-slate-200 grid grid-col rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-h1-2">
                      <section className="text-gray-600 body-font">
                        <div className="container  mx-auto flex flex-wrap">
                          <div className="flex relative  sm:items-center  mx-auto w-full">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                              <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-400  text-white relative z-10 title-font font-medium text-sm"></div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                              <div className="flex-grow flex-col bg-white shadow rounded p-4 my-4 w-full">
                                <div className="flex lg:flex-row flex-col justify-center  lg:divide-x">
                                  <div className="w-full text-center text-xl font-semibold py-4">
                                    {apdata &&
                                      opt == 1 &&
                                      apdata["Upcoming Appointments"]["Date"]}
                                    {apdata &&
                                      opt == 2 &&
                                      apdata["Post Appointment"]["Date"]}
                                    {apdata &&
                                      opt == 3 &&
                                      apdata["Medical Records"]["status"]}
                                    <div className="text-gray-400 text-sm font-medium">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"]["Time"]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Time"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                  <div className="w-full text-center text-sm font-thin py-4">
                                    Treatment
                                    <div className="text-gray-600 text-md font-bold">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"][
                                          "Treatment"
                                        ]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Treatment"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                  <div className="w-full text-center text-sm font-thin py-4">
                                    Dentist
                                    <div className="text-gray-600 text-md font-bold">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"][
                                          "Dentist"
                                        ]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Dentist"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                  <div className="w-full text-center text-sm font-thin py-4">
                                    nurse
                                    <div className="text-gray-600 text-md font-bold">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"][
                                          "Nurse"
                                        ]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Nurse"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="text-gray-600 body-font">
                        <div className="container  mx-auto flex flex-wrap">
                          <div className="flex relative  sm:items-center  mx-auto w-full">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                              <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-emerald-400  text-white relative z-10 title-font font-medium text-sm"></div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                              <div className="flex-grow flex-col bg-white shadow rounded p-4 my-4 w-full">
                                <div className="flex lg:flex-row flex-col justify-center  lg:divide-x">
                                  <div className="w-full text-center text-xl font-semibold py-4">
                                    {apdata &&
                                      opt == 1 &&
                                      apdata["Upcoming Appointments"]["Date"]}
                                    {apdata &&
                                      opt == 2 &&
                                      apdata["Post Appointment"]["Date"]}
                                    {apdata &&
                                      opt == 3 &&
                                      apdata["Medical Records"]["status"]}
                                    <div className="text-gray-400 text-sm font-medium">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"]["Time"]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Time"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                  <div className="w-full text-center text-sm font-thin py-4">
                                    Treatment
                                    <div className="text-gray-600 text-md font-bold">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"][
                                          "Treatment"
                                        ]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Treatment"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                  <div className="w-full text-center text-sm font-thin py-4">
                                    Dentist
                                    <div className="text-gray-600 text-md font-bold">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"][
                                          "Dentist"
                                        ]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Dentist"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                  <div className="w-full text-center text-sm font-thin py-4">
                                    nurse
                                    <div className="text-gray-600 text-md font-bold">
                                      {apdata &&
                                        opt == 1 &&
                                        apdata["Upcoming Appointments"][
                                          "Nurse"
                                        ]}
                                      {apdata &&
                                        opt == 2 &&
                                        apdata["Post Appointment"]["Nurse"]}
                                      {apdata &&
                                        opt == 3 &&
                                        apdata["Medical Records"]["status"]}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <div className="bg-white shadow rounded-lg py-4 px-2 2xl:col-h1-2 lg:h-4/5">
                    <div className=" flex items-center justify-between mb-3 ">
                      <div className="w-full rounded">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap lg:flex-row sm:flex-col">
                          <p className="text-gray-700 text-md text-center mr-auto font-semibold cursor-pointer ">
                            Files/document
                          </p>
                          <span className="inline-flex sm:ml-auto sm:mt-0 sm:justify-start text-blue-500 font-medium cursor-pointer">
                            Add Files
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className=" flex items-center justify-between cursor-pointer">
                      <div className="w-full mx-4 rounded-md border-2">
                        <div className="container mx-auto p-5 flex flex-wrap flex-col sm:flex-row space-y-3 ">
                          <p className="text-gray-600 text-md sm:text-left font-medium">
                            <i className="fas fa-file-alt pr-2 text-gray-500"></i>
                            Check Up result.pdf
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between cursor-pointer mt-4 ">
                      <div className=" w-full mx-4 rounded-md border-2">
                        <div className="container mx-auto p-5 flex flex-wrap flex-col sm:flex-row space-y-3 ">
                          <p className="text-gray-600 text-md sm:text-left font-medium">
                            <i className="fas fa-file-alt pr-2 text-gray-500"></i>
                            Blood test result.pdf
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between cursor-pointer mt-4">
                      <div className=" w-full mx-4 rounded-md border-2">
                        <div className="container mx-auto p-5 flex flex-wrap flex-col sm:flex-row space-y-3 ">
                          <p className="text-gray-600 text-md sm:text-left font-medium">
                            <i className="fas fa-file-alt pr-2 text-gray-500"></i>
                            Mri result.pdf
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <footer className="md:flex md:items-center md:justify-between  p-1 md:p-6 xl:p- my-6"></footer>
            <p className="text-center text-sm text-gray-500 my-10">
              &copy;
              <a
                href="https://themesberg.com"
                className="hover:underline"
                target="_blank"
              >
                helco
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
