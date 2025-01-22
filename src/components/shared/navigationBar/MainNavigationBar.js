// components
import { CircleArrowRight} from "lucide-react";
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
        icon: <CircleArrowRight size={20} />,
        title: "a",
        name: "Linux Shared Hosting (BDIX)",
        url: "/premium-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "b",
        name: "Linux Shared Hosting (USA)",
        url: "/premium-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Linux Shared Hosting (Singapore)",
        title: "c",
        url: "/premium-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Windows Shared Hosting(USA)",
        title: "d",
        url: "/premium-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Reseller Hosting (BDIX)",
        title: "e",
        url: "/premium-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Reseller Hosting (USA)",
        title: "f",
        url: "/premium-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
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
        icon: <CircleArrowRight size={20} />,
        title: "a",
        name: "VPS (USA)",
        url: "/ssd-vps",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "b",
        name: "VPS (BDIX)",
        url: "/ssd-vps",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "VPS (Singapore)",
        title: "c",
        url: "/ssd-vps",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed VPS (USA)",
        title: "d",
        url: "/ssd-vps",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed VPS (BDIX)",
        title: "e",
        url: "/ssd-vps",
      },
      {
        icon: <CircleArrowRight size={20} />,
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
        icon: <CircleArrowRight size={20} />,
        title: "a",
        name: "Dedicated Server(USA)",
        url: "/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "b",
        name: "Dedicated Server(BDIX)",
        url: "/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Dedicated Server(Singapore)",
        title: "c",
        url: "/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed Dedicated Server (USA)",
        title: "d",
        url: "/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed Dedicated Server (BDIX)",
        title: "e",
        url: "/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
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
        icon: <CircleArrowRight size={20} />,
        title: "a",
        name: "RDP",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "b",
        name: "VPS",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "SSL",
        title: "c",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Website design",
        title: "d",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed Dedicated Server (BDIX)",
        title: "e",
      },
      {
        icon: <CircleArrowRight size={20} />,
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
        icon: <CircleArrowRight size={20} />,
        title: "a",
        name: "RDP",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "b",
        name: "VPS",
      },
      {
        icon: <CircleArrowRight size={20} />,
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
        icon: <CircleArrowRight size={20} />,
        title: "a",
        name: "Software Development",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "b",
        name: "Web Development",
      },
      {
        icon: <CircleArrowRight size={20} />,
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
    name: "Colocation",
    url: "#",
  },
  {
    name: "Affiliate Program",
    url: "#",
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
