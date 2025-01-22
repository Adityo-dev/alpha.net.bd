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
    url: "#",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "Linux Shared Hosting (BDIX)",
        url: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "Linux Shared Hosting (USA)",
        url: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Linux Shared Hosting (Singapore)",
        title: "c",
        url: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Windows Shared Hosting(USA)",
        title: "d",
        url: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (BDIX)",
        title: "e",
        url: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (USA)",
        title: "f",
        url: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (Singapore)",
        title: "g",
        url: "/premium-hosting",
      },
    ],
  },
  {
    name: "Vps",
    url: "#",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "VPS (USA)",
        url: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "VPS (BDIX)",
        url: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "VPS (Singapore)",
        title: "c",
        url: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed VPS (USA)",
        title: "d",
        url: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed VPS (BDIX)",
        title: "e",
        url: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed VPS (Singapore)",
        title: "f",
        url: "/ssd-vps",
      },
    ],
  },
  {
    name: "dedicated server",
    url: "#",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "Dedicated Server(USA)",
        url: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "Dedicated Server(BDIX)",
        url: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Dedicated Server(Singapore)",
        title: "c",
        url: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (USA)",
        title: "d",
        url: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (BDIX)",
        title: "e",
        url: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (Singapore)",
        title: "f",
        url: "/dedicated-server",
      },
    ],
  },
  {
    name: "services",
    url: "#",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "RDP",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "VPS",
      },
      {
        icon: <Lock size={20} />,
        name: "SSL",
        title: "c",
      },
      {
        icon: <Lock size={20} />,
        name: "Website design",
        title: "d",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (BDIX)",
        title: "e",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (Singapore)",
        title: "f",
      },
    ],
  },
  {
    name: "SMS",
    url: "#",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "RDP",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "VPS",
      },
      {
        icon: <Lock size={20} />,
        name: "SSL",
        title: "c",
      },
    ],
  },
  {
    name: "web design",
    url: "#",
    info: [
      {
        icon: <Lock size={20} />,
        title: "a",
        name: "Software Development",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "Web Development",
      },
      {
        icon: <Lock size={20} />,
        name: "E-commerce",
        title: "c",
      },
    ],
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
