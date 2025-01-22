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
    name: "domain",
    url: "#",
  },
  {
    name: "hosting",
    url: "/premium-hosting",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "Linux Shared Hosting (BDIX)",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "Linux Shared Hosting (USA)",
      },
      {
        icon: <Lock size={20} />,
        name: "Linux Shared Hosting (Singapore)",
        title: "c",
      },
      {
        icon: <Lock size={20} />,
        name: "Windows Shared Hosting(USA)",
        title: "d",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (BDIX)",
        title: "e",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (USA)",
        title: "f",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (Singapore)",
        title: "g",
      },
      
    ],
  },
  {
    name: "Vps",
    url: "#",
  },
  {
    name: "dedicated server",
    url: "/dedicated-server",
  },
  {
    name: "services",
    url: "#",
  },
  {
    name: "sms",
    url: "#",
  },
  {
    name: "web design",
    url: "#",
  },
  {
    name: "about Us",
    url: "about-us",
  },
  {
    name: "Contact",
    url: "/contact-us",
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
