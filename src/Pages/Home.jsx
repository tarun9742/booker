import React from "react";
import { FcPortraitMode } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { PiNetworkFill } from "react-icons/pi";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import InnerSection from "./userPages/InnerSection";
import { FaCoins } from "react-icons/fa6";

export default function Home() {
  return (
    <div className=" ">
      <nav class="bg-[#919ffdfc] z-10 border-b-2 border-gray-200 dark:bg-gray-900 fixed w-full">
        <div class="  flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse sm:pl-64"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap  text-white">
              Finance
            </span>
          </a>
          <div class="flex flex-col items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="flex text-sm bg-gray-800 rounded-full md:me-0  ring-4  ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              onClick={() => {
                document.getElementById("user-dropdown").classList.toggle("hidden");
              }}
            >
              <FcPortraitMode size={30} />
            </button>
            <div
              class="z-50 hidden my-4 mt-10 right-2 shadow-xl text-base list-none bg-white  absolute divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <Link
                    to={"/reset-password"}
                    class="block px-4 py-2 text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Reset Password
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    class="block px-4 py-2 text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-drawer-target="sidebar-multi-level-sidebar"
              data-drawer-toggle="sidebar-multi-level-sidebar"
              aria-controls="sidebar-multi-level-sidebar"
              type="button"
              onClick={() => {
                const sidebar = document.getElementById(
                  "sidebar-multi-level-sidebar"
                );
                sidebar.classList.toggle("translate-x-0");
                sidebar.classList.toggle("-translate-x-full");
              }}
              class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen border-r-2   transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pt-16 py-4 overflow-y-auto no-scrollbar bg-[#919ffdfc] dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li className="side-bar-list">
              <Link
                to={{ pathname: "/home", search: `?dashboard` }}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </Link>
            </li>
            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown =
                    document.getElementById("events-dropdown");
                  moneyDropdown.classList.toggle("hidden");
                }}
              >
                <PiNetworkFill size={24} />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Events
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="events-dropdown"
                class="hidden side-bar-drop-list list-disc py-2 pl-4 space-y-2"
              >
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?event=inplay` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Inplay
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?event=cricket` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Cricket
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?event=football` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Football
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?event=tennis` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Tennis
                  </Link>
                </li>
              </ul>
            </li>

            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown =
                    document.getElementById("casino-dropdown");
                  moneyDropdown.classList.toggle("hidden");
                }}
              >
                <FaCoins size={20} />

                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Live Casino
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="casino-dropdown"
                class="hidden side-bar-drop-list list-disc py-2 pl-4 space-y-2"
              >
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?game=color-game` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Color Play
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?game=card-2020` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Card 2020
                  </Link>
                </li>
              </ul>
            </li>
            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown = document.getElementById(
                    "investment-dropdown"
                  );
                  moneyDropdown.classList.toggle("hidden");
                }}
              >
                <FaMoneyBillTransfer size={24} />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Investment
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="investment-dropdown"
                class="hidden side-bar-drop-list list-disc py-2 pl-2 space-y-2"
              >
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?investment=new-investment`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    New Investment
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?investment=investment-history`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Investment History
                  </Link>
                </li>
              </ul>
            </li>
            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown =
                    document.getElementById("network-dropdown");
                  moneyDropdown.classList.toggle("hidden");
                }}
              >
                <PiNetworkFill size={24} />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Network
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="network-dropdown"
                class="hidden side-bar-drop-list list-disc py-2 pl-4 space-y-2"
              >
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?network=downline-member`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    My Downline Member
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?network=direct-downline`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Direct Downline
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?network=add-new-member`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Add New Member
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?network=member-tree` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    My Member Tree
                  </Link>
                </li>
              </ul>
            </li>

            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown =
                    document.getElementById("money-dropdown");
                  moneyDropdown.classList.toggle("hidden");

                  const moneyInDropdown =
                    document.getElementById("money-in-dropdown");
                  moneyInDropdown.classList.add("hidden");

                  const moneyOutDropdown =
                    document.getElementById("money-out-dropdown");
                  moneyOutDropdown.classList.add("hidden");
                }}
              >
                <BsBank2 size={24} />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Money
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="money-dropdown"
                class="hidden side-bar-drop-list list-disc py-2 pl-2 space-y-2"
              >
                <li className="ml-11">
                  <button
                    onClick={() => {
                      const moneyDropdown =
                        document.getElementById("money-in-dropdown");
                      moneyDropdown.classList.toggle("hidden");
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Money In
                  </button>
                </li>
                <ul
                  id="money-in-dropdown"
                  class="hidden side-bar-drop-list list-square	 py-2 space-y-2 pl-4"
                >
                  <li>
                    <Link
                      to={{ pathname: "/home", search: `?money=usdt-deposit` }}
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-6 group  dark:text-white dark:hover:bg-gray-700"
                    >
                      - USDT Deposit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/home",
                        search: `?money=deposit-history`,
                      }}
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-6 group  dark:text-white dark:hover:bg-gray-700"
                    >
                      - Deposit History
                    </Link>
                  </li>
                </ul>
                <li className="ml-11">
                  <button
                    onClick={() => {
                      const moneyDropdown =
                        document.getElementById("money-out-dropdown");
                      moneyDropdown.classList.toggle("hidden");
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Money Out
                  </button>
                </li>
                <ul
                  id="money-out-dropdown"
                  class="hidden side-bar-drop-list list-square	 py-2 space-y-2 pl-4"
                >
                  <li>
                    <Link
                      to={{ pathname: "/home", search: `?money=withdrawal` }}
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-6 group  dark:text-white dark:hover:bg-gray-700"
                    >
                      - Withdrawal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/home",
                        search: `?money=withdrawal-history`,
                      }}
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-6 group  dark:text-white dark:hover:bg-gray-700"
                    >
                      - Withdrawal History
                    </Link>
                  </li>
                </ul>
              </ul>
            </li>

            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown =
                    document.getElementById("account-dropdown");
                  moneyDropdown.classList.toggle("hidden");
                }}
              >
                <RiAccountCircleFill size={24} />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  My Account
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="account-dropdown"
                class=" hidden py-2 pl-2 list-disc	  space-y-2"
              >
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?account=send-money` }}
                    class="flex items-center w-full p-2  pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Send Money
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?account=today-history` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Today History
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?account=account-history`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Account History
                  </Link>
                </li>
              </ul>
            </li>

            <li className="side-bar-list">
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const moneyDropdown =
                    document.getElementById("income-dropdown");
                  moneyDropdown.classList.toggle("hidden");
                }}
              >
                <GiTakeMyMoney size={24} />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  My Income
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="income-dropdown"
                class=" hidden py-2 pl-2 list-disc	  space-y-2"
              >
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?income=matching-income`,
                    }}
                    class="flex items-center w-full p-2  pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Matching Income
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{
                      pathname: "/home",
                      search: `?income=refferer-income`,
                    }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    Refferer Income
                  </Link>
                </li>
                <li className="ml-11">
                  <Link
                    to={{ pathname: "/home", search: `?income=roi-income` }}
                    class="flex items-center w-full p-2 pl-0 text-gray-900 transition duration-75 rounded-lg   group  dark:text-white dark:hover:bg-gray-700"
                  >
                    ROI Income
                  </Link>
                </li>
              </ul>
            </li>

            <li className="bg-[#ffb2b2] rounded-lg">
              <a
                href="/"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#abbaff] dark:hover:bg-gray-700 group"
              >
                <IoLogOut size={26} />
                <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Content */}
      <div class="p-8 sm:ml-64  pt-24 ">
        <InnerSection />
      </div>
    </div>
  );
}
