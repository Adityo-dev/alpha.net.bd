// components
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
  },
  {
    name: "SSD VPS",
    url: "/ssd-vps",
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
    name: "SMS",
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
      <CenterNav />
      <BottomNav navData={bottomNavData} />
    </main>
  );
}

export default MainNavigationBar;
