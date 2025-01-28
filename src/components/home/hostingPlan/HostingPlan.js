"use client";
import { useState } from "react";
import { ChevronDown, Database } from "lucide-react";
import Link from "next/link";

const HostingPlan = () => {
  const hostingPlanData = [
    {
      category: "Shared Hosting",
      url: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting/1gb-pure-nvme-ssd",
      monthsAndTk: [
        { months: "12", tk: "1500" },
        { months: "24", tk: "2500" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "5 GB SSD space" },
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
      url: "https://login.dinihost.com/index.php?rp=/store/ssd-reseller-hosting/10gb-reseller-hosting-pure-ssd",
      monthsAndTk: [
        { months: "12", tk: "550" },
        { months: "24", tk: "6000" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "10 GB SSD space" },
        { icon: <Database />, info: "100 GB traffic/month" },
        { icon: <Database />, info: "20 cPanel" },
        { icon: <Database />, info: "cPanel/WHM" },
        { icon: <Database />, info: "Litespeed Server" },
        { icon: <Database />, info: "CloudLinux OS" },
        { icon: <Database />, info: "Basic email features" },
        { icon: <Database />, info: "25/hr email limit" },
        { icon: <Database />, info: "Softaculous" },
        { icon: <Database />, info: "Bangladesh data center" },
        { icon: <Database />, info: "24/7 Online support" },
      ],
    },
    {
      category: "VPS",
      url: "/ssd-vps",
      monthsAndTk: [
        { months: "1", tk: "2500" },
        { months: "3", tk: "7500" },
        { months: "6", tk: "15000" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "CPU: 8 vCore" },
        { icon: <Database />, info: "RAM: 16 GB RAM" },
        { icon: <Database />, info: "Bandwidth: 10TB" },
        { icon: <Database />, info: "Storage: 500GB NVME" },
        { icon: <Database />, info: "Standard Backup" },
        { icon: <Database />, info: "Full Root Access" },
        { icon: <Database />, info: "Basic OS" },
        { icon: <Database />, info: "Unmanaged" },
        { icon: <Database />, info: "1 IP" },
        { icon: <Database />, info: "Different Location" },
        { icon: <Database />, info: "24x7 Support" },
      ],
    },
    {
      category: "Dedicated Server",
      url: "/dedicated-server",
      monthsAndTk: [
        { months: "1", tk: "8500" },
        { months: "3", tk: "25000" },
        { months: "6", tk: "50000" },
      ],
      detailsInfo: [
        { icon: <Database />, info: "CPU: Intel 8 Core" },
        { icon: <Database />, info: "RAM: 16 GB RAM" },
        { icon: <Database />, info: "Bandwidth: 10TB" },
        { icon: <Database />, info: "Storage: 500GB NVME" },
        { icon: <Database />, info: "Standard Backup" },
        { icon: <Database />, info: "Full Root Access" },
        { icon: <Database />, info: "Basic OS" },
        { icon: <Database />, info: "Unmanaged" },
        { icon: <Database />, info: "1 IP" },
        { icon: <Database />, info: "Different Location" },
        { icon: <Database />, info: "24x7 Support" },
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
           Find the Best Service Right for Your Business
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
            <Link href={`${plan.url}`}>
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
