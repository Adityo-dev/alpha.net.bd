"use client";
import { useState } from "react";
import { ChevronDown, Database } from "lucide-react";
import Link from "next/link";

const HostingPlan = () => {
  const hostingPlanData = [
    {
      category: "Shared Hosting",
      monthsAndTk: [
        { months: "1", tk: "240" },
        { months: "2", tk: "470" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "3 GB SSD space" },
        { icon: <Database />, info: "100 GB traffic/month" },
        { icon: <Database />, info: "1 CPU core limit" },
        { icon: <Database />, info: "512 MB RAM" },
        { icon: <Database />, info: "20 EP & 100 NP" },
        { icon: <Database />, info: "20 MB/s I/O" },
        { icon: <Database />, info: "Basic email features" },
        { icon: <Database />, info: "25/hr email limit" },
        { icon: <Database />, info: "CloudLinux OS" },
        { icon: <Database />, info: "Bangladesh data center" },
        { icon: <Database />, info: "24/7 Online support" },
      ],
    },
    {
      category: "Reseller Hosting",
      monthsAndTk: [
        { months: "1", tk: "480" },
        { months: "2", tk: "940" },
        { months: "3", tk: "1380" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "10 GB SSD space" },
        { icon: <Database />, info: "Unlimited traffic/month" },
        { icon: <Database />, info: "2 CPU cores" },
        { icon: <Database />, info: "2 GB RAM" },
        { icon: <Database />, info: "50 EP & 200 NP" },
        { icon: <Database />, info: "30 MB/s I/O" },
        { icon: <Database />, info: "Enhanced email features" },
        { icon: <Database />, info: "50/hr email limit" },
        { icon: <Database />, info: "LiteSpeed Web Server" },
        { icon: <Database />, info: "Bangladesh data center" },
        { icon: <Database />, info: "24/7 Online support" },
      ],
    },
    {
      category: "VPS",
      monthsAndTk: [
        { months: "1", tk: "1200" },
        { months: "2", tk: "2300" },
        { months: "3", tk: "3400" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "30 GB SSD space" },
        { icon: <Database />, info: "Unlimited traffic/month" },
        { icon: <Database />, info: "4 CPU cores" },
        { icon: <Database />, info: "4 GB RAM" },
        { icon: <Database />, info: "100 EP & 400 NP" },
        { icon: <Database />, info: "50 MB/s I/O" },
        { icon: <Database />, info: "Advanced email features" },
        { icon: <Database />, info: "100/hr email limit" },
        { icon: <Database />, info: "LiteSpeed Enterprise Server" },
        { icon: <Database />, info: "Global data centers" },
        { icon: <Database />, info: "Priority 24/7 Support" },
      ],
    },
    {
      category: "Dedicated Server",
      monthsAndTk: [
        { months: "1", tk: "2500" },
        { months: "2", tk: "4900" },
        { months: "3", tk: "7200" },
        { months: "4", tk: "9500" },
        { months: "5", tk: "11700" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "100 GB SSD space" },
        { icon: <Database />, info: "Unlimited traffic/month" },
        { icon: <Database />, info: "8 CPU cores" },
        { icon: <Database />, info: "16 GB RAM" },
        { icon: <Database />, info: "200 EP & 800 NP" },
        { icon: <Database />, info: "100 MB/s I/O" },
        { icon: <Database />, info: "Enterprise-grade email features" },
        { icon: <Database />, info: "Unlimited email accounts" },
        { icon: <Database />, info: "LiteSpeed Enterprise Server" },
        { icon: <Database />, info: "Global data centers" },
        { icon: <Database />, info: "Dedicated 24/7 Support" },
      ],
    },
  ];

  const [dropdownStates, setDropdownStates] = useState(
    hostingPlanData.map((plan) => ({
      selected: `${plan.monthsAndTk[0].months} Month - Tk ${
        plan.monthsAndTk[0].tk || ""
      }`,
      isOpen: false,
    }))
  );

  const toggleDropdown = (index) => {
    setDropdownStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? { ...state, isOpen: !state.isOpen }
          : { ...state, isOpen: false }
      )
    );
  };

  const handleSelection = (index, month) => {
    setDropdownStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? {
              ...state,
              selected: `${month.months} Month - Tk ${month.tk || ""}`,
              isOpen: false,
            }
          : state
      )
    );
  };

  return (
    <section className="container mx-auto px-3 lg:px-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          Find the Hosting Plan thats Right for Your Business
        </h2>
        <p className="text-lg sm:text-xl mt-3">
          We Have the Features and service you deserve!.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
        {hostingPlanData.map((plan, planIndex) => (
          <div
            key={planIndex}
            className={`px-6 py-4 rounded-lg ${
              planIndex % 2 === 0
                ? "bg-[#e0f7f4] text-[#00594c]"
                : "bg-[#fff3e0] text-[#b85d00]"
            }`}
          >
            <h2 className="text-2xl font-semibold uppercase text-center">
              {plan.category}
            </h2>
            <div className="relative mt-4">
              <button
                type="button"
                className="w-full bg-white py-2 px-3 rounded-md border text-left focus:outline-none flex justify-between items-center"
                onClick={() => toggleDropdown(planIndex)}
              >
                {dropdownStates[planIndex]?.selected}
                <ChevronDown strokeWidth={1.5} />
              </button>
              {dropdownStates[planIndex]?.isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
                  {plan.monthsAndTk.map((month, index) => (
                    <li
                      key={index}
                      className="cursor-pointer py-2 px-3 hover:bg-indigo-100"
                      onClick={() => handleSelection(planIndex, month)}
                    >
                      {month.months} Month - Tk {month?.tk}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link href="#">
              <button
                className={`w-full py-2 mt-4 ${
                  planIndex % 2 === 0 ? "bg-[#008f7e]" : "bg-[#ff8c00]"
                } text-white font-semibold rounded-lg`}
              >
                Order Now
              </button>
            </Link>
            <div className="space-y-6 mt-6">
              {plan.detailsInfo.map((info, index) => (
                <p key={index} className="flex items-center gap-4">
                  {info.icon}
                  {info.info}
                </p>
              ))}
            </div>

            <h1 className="text-3xl font-semibold text-center mt-6">
              ৳
              <span>
                {dropdownStates[planIndex].selected.split(" - Tk ")[1]}
              </span>
              /
              <span className="text-2xl">
                {dropdownStates[planIndex].selected.split(" ")[0]}month
              </span>
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostingPlan;
