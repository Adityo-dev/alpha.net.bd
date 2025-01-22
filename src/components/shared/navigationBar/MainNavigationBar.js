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
        path: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "Linux Shared Hosting (USA)",
        path: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Linux Shared Hosting (Singapore)",
        title: "c",
        path: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Windows Shared Hosting(USA)",
        title: "d",
        path: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (BDIX)",
        title: "e",
        path: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (USA)",
        title: "f",
        path: "/premium-hosting",
      },
      {
        icon: <Lock size={20} />,
        name: "Reseller Hosting (Singapore)",
        title: "g",
        path: "/premium-hosting",
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
        path: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "VPS (BDIX)",
        path: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "VPS (Singapore)",
        title: "c",
        path: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed VPS (USA)",
        title: "d",
        path: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed VPS (BDIX)",
        title: "e",
        path: "/ssd-vps",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed VPS (Singapore)",
        title: "f",
        path: "/ssd-vps",
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
        path: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        title: "b",
        name: "Dedicated Server(BDIX)",
        path: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Dedicated Server(Singapore)",
        title: "c",
        path: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (USA)",
        title: "d",
        path: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (BDIX)",
        title: "e",
        path: "/dedicated-server",
      },
      {
        icon: <Lock size={20} />,
        name: "Managed Dedicated Server (Singapore)",
        title: "f",
        path: "/dedicated-server",
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
