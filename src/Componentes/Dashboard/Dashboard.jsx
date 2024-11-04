import React, { useEffect, useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWallet, FaGoogleWallet } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { GiWallet, GiMoneyStack } from "react-icons/gi";
import Hero1 from "./Hero1";
import GamesSlider from "./GamesSlider";
import { GetUserDetails } from "../../Controllers/User/UserController";
import { Loading1 } from "../Loading1";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const userDataGet = async () => {
    const response = await GetUserDetails();
    if (response !== null) {
      setUser(response[0]);
      setLoading(false);
    }
  };

  const data = [
    {
      id: 1,
      title: "Direct Members Count",
      value: user && user.direct_downline,
      link : "/home?network=direct-downline",
      icons: <BsFillPeopleFill size={20} />,
    },
    {
      id: 2,
      title: "My Investment",
      value: user && `₹${user.my_investment}`,
      link : "/home?investment=investment-history",
      icons: <FaWallet size={20} />,
    },
    {
      id: 3,
      title: "Total Withdrawal",
      value: user && `₹${user.withdrawal}`,
      link : "/home?money=withdrawal-history",
      icons: <PiHandWithdrawFill size={24} />,
    },
    {
      id: 3,
      title: "Total Deposit",
      value: user && `₹${user.deposit}`,
      link : "/home?money=deposit-history",
      icons: <PiHandWithdrawFill size={24} />,
    },
    {
      id: 4,
      title: "Total Members Downline",
      value: user && user.my_downline,
      link : "/home?network=downline-member",
      icons: <FaGoogleWallet size={22} />,
    },
    {
      id: 5,
      title: "Direct Income",
      value: "₹8400",
      link : "",
      icons: <FaMoneyBills size={24} />,
    },
    {
      id: 6,
      title: "ROI",
      value: "$0",
      link : "",
      icons: <GiWallet size={24} />,
    },
    {
      id: 7,
      title: "Matching Income",
      value: "$0",
      link : "",
      icons: <GiMoneyStack size={24} />,
    },
    {
      id: 3,
      title: "Total Business",
      value: "₹11,500",
      link : "",
      icons: <PiHandWithdrawFill size={24} />,
    },
  ];

  useEffect(() => {
    userDataGet();
  }, []);

  if (loading) {
    return (
      <div className="absolute top-0   z-[9999] w-screen h-screen flex items-center justify-center m-auto inset-0">
        <div className="w-screen h-screen top-0 z-[99999] blur-lg absolute" />
        <Loading1 />
      </div>
    );
  }

  return (
    <div>
      <Hero1 /> 
      <GamesSlider />
      <div className="w-full pb-10 overflow-hidden grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.map((item, index) => (
          <div class="mt-6 group w-[190px] h-[150px] rounded-[8px] bg-white dark:bg-gray-800 relative p-4 border-2 border-[#c3c6ce] transition duration-500 ease-out overflow-visible hover:border-[#008bf8] hover:shadow-lg">
            <div class="text-black h-full gap-2 grid  ">
              <p class="text-2xl font-bold dark:text-gray-200">{item.icons}</p>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                {item.title}
              </p>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                {item.value}
              </p>
            </div>
            <Link to={item.link} class="text-center transform translate-x-[-50%] translate-y-[125%] w-[60%] rounded-[1rem] border-none bg-[#008bf8] text-white text-base py-2 px-4 absolute left-1/2 bottom-0 opacity-0 transition duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 