import React, { useEffect, useState } from "react";
import { GetUserDetails } from "../../Controllers/User/UserController";
import { Loading1 } from "../Loading1";
import ThemeToggle from "../../Controllers/ThemeToggle";
import { FaAngleRight } from "react-icons/fa";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

export default function UserProfile() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const handleCopy = () => {
    toast("Link copied. Share with your friends", {
      position: "top-center",
    });
    setIsCopied1(true);
    setTimeout(function () {
      setIsCopied1(false);
    }, 2000);
  };

  const handleCopy2 = () => {
    toast("Link copied. Share with your friends", {
      position: "top-center",
    });
    setIsCopied2(true);
    setTimeout(function () {
      setIsCopied2(false);
    }, 2000);
  };

  const userDataGet = async () => {
    const response = await GetUserDetails();
    if (response !== null) {
      setUser(response[0]);
      setUrl(
        `${window.location.origin}/register?referrer_code=${response[0].reffer_code}`
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    userDataGet();
  }, []);

  const handleLogout = async () => {
    Cookies.remove("token");
    Cookies.remove("mobile");
    localStorage.removeItem("userDetails");
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center m-auto inset-0">
        <Loading1 />
      </div>
    );
  }

  return (
    <div className="dark:bg-black min:h-screen pb-40">
      <ToastContainer />
      <div class="  px-2">
        <div class="rounded-lg   bg-white dark:bg-gray-800 px-2 pt-8 pb-10 shadow-lg">
          <div className="flex gap-4">
            <div class="relative     rounded-full">
              <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img
                class="mx-auto h-auto w-20 rounded-full"
                src={require("../../assets/photos/avatar.png")}
                alt=""
              />
            </div>
            <div>
              <h1 class="my-1  text-xl font-bold leading-8 text-gray-900 dark:text-gray-200">
                {user && user.uname}
              </h1>
              <h3 class="font-lg text-semibold  leading-6 text-gray-600 dark:text-gray-300">
                {user && user.email}
              </h3>
              <h3 class="font-lg text-semibold  leading-6 text-gray-600 dark:text-gray-300">
                {user && user.mobile}
              </h3>
            </div>
          </div>

          <div class="flex items-center py-3 rounded mt-3 text-lg bg-gray-100 dark:bg-gray-600 py-2 px-3">
            <span className="text-gray-800 dark:text-gray-300 font-semibold">
              Refer
            </span>
            <span class="ml-auto flex items-center justify-center gap-2 dark:text-gray-200 font-semibold">
              <CopyToClipboard
                text={url}
                onCopy={handleCopy}
                className={` px-3 py-1 rounded-lg text-gray-700    ${
                  isCopied1 ? "bg-[green]" : "bg-indigo-300"
                }`}
              >
                <button> {isCopied1 ? "Copied" : "Join In Left"} </button>
              </CopyToClipboard>
              <CopyToClipboard
                text={url}
                onCopy={handleCopy2}
                className={` px-3 py-1 rounded-lg text-gray-700    ${
                  isCopied2 ? "bg-[green]" : "bg-indigo-300"
                }`}
              >
                <button> {isCopied2 ? "Copied" : "Join In Right"} </button>
              </CopyToClipboard>
            </span>
          </div>

          <ul class="mt-3 divide-y rounded bg-gray-100 dark:bg-gray-600 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li class="flex items-center py-3 text-sm">
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Status
              </span>
              <span class="ml-auto">
                <span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                  Active
                </span>
              </span>
            </li>
            <li class="flex items-center py-3 text-sm">
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Reffer Code
              </span>
              <span class="ml-auto dark:text-gray-200 font-semibold">
                {user.reffer_code}
              </span>
            </li>
            <li class="flex items-center py-3 text-sm">
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Joined On
              </span>
              <span class="ml-auto dark:text-gray-200 font-semibold">
                {user && user.date.split("T")[0]}
              </span>
            </li>
            <li class="flex items-center py-3 text-sm">
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Theme
              </span>
              <span class="ml-auto dark:text-gray-200 font-semibold">
                <ThemeToggle />
              </span>
            </li>
          </ul>

          <ul class="mt-3 divide-y rounded bg-gray-100 dark:bg-gray-600 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <Link
              to={"/home?network=downline-member"}
              class="flex items-center py-3 text-lg"
            >
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Downline Member
              </span>
              <span class="ml-auto flex items-center justify-center gap-2 dark:text-gray-200 font-semibold">
                {user.my_downline}{" "}
                <FaAngleRight />
              </span>
            </Link>
            <Link
              to={"/home?network=direct-downline"}
              class="flex items-center py-3 text-lg"
            >
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Direct Downline
              </span>
              <span class="ml-auto flex items-center justify-center gap-2 dark:text-gray-200 font-semibold">
                {user.direct_downline}{" "}
                <FaAngleRight />
              </span>
            </Link>
            <Link
              to={{
                pathname: "/home",
                search: `?network=member-tree&uid=${user?.uid}`,
              }}
              class="flex items-center py-3 text-lg"
            >
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Member Tree
              </span>
              <span class="ml-auto dark:text-gray-200 font-semibold">
                {" "}
                <FaAngleRight />
              </span>
            </Link>
            <Link
              to={"/change-password"}
              class="flex items-center py-3 text-lg"
            >
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Change Password
              </span>
              <span class="ml-auto dark:text-gray-200 font-semibold">
                {" "}
                <FaAngleRight />
              </span>
            </Link>
            <Link
              to={{ pathname: "/home", search: "?change=securityPin" }}
              class="flex items-center py-3 text-lg"
            >
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Change PIN
              </span>
              <span class="ml-auto dark:text-gray-200 font-semibold">
                {" "}
                <FaAngleRight />
              </span>
            </Link>
          </ul>

          <button
            onClick={handleLogout}
            className="w-full text-center font-semibold bg-red-500 mt-3 rounded-sm  py-2"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
