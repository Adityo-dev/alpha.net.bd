// components
import { Lock } from "lucide-react";
import BottomNav from "./BottomNav";
import CenterNav from "./CenterNav";
import TopNav from "./TopNav";
// data
const bottomNavData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Dedicated Server",
    url: "/dedicated-server",
    info: [
      {
        icon: <Lock size={20} />,
        title: "ASP.NET Hosting",
        name: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        title: "ASP.NET Hosting",
        name: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "MVC hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "Linux cPanel Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "corporate web hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "application Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "become a reseller",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "BDIX cPanel Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "BDIX windows Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
    ],
  },
  {
    name: "SSD VPS",
    url: "/ssd-vps",
    info: [
      {
        icon: <Lock size={20} />,
        title: "ASP.NET Hosting",
        name: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        title: "ASP.NET Hosting",
        name: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "MVC hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "Linux cPanel Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "corporate web hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "application Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "become a reseller",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "BDIX cPanel Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
      {
        icon: <Lock size={20} />,
        name: "BDIX windows Hosting",
        title: "high-performance ASP.NET hosting platform",
      },
    ],
  },
  {
    name: "premium hosting",
    url: "/premium-hosting",
  },
  {
    name: "About",
    url: "/about-us",
  },
  {
    name: "Contact",
    url: "/contact-us",
  },
  {
    name: "VPS",
    url: "#",
  },
  {
    name: "Dedicated Server",
    url: "#",
  },
  {
    name: "Cloud",
    url: "#",
  },
  {
    name: "License",
    url: "#",
  },
  {
    name: "Data Center",
    url: "#",
  },
  {
    name: "Company",
    url: "#",
  },
];

function MainNavigationBar() {
  return (
    <main className="space-y-2">
      <TopNav />
      <CenterNav navData={bottomNavData} />
      <BottomNav navData={bottomNavData} />
    </main>
  );
}

export default MainNavigationBar;
