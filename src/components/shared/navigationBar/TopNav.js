import Link from "next/link";
// icon
import { LogOut, MapPin, Phone } from "lucide-react";

// data
const topData = [
  {
    name: "office location",
    icon: <MapPin size={18} strokeWidth={1.5} />,
    url: "",
  },
  {
    name: "+88096123456",
    icon: <Phone size={18} strokeWidth={1.5} />,
    url: "",
  },
  {
    name: "Login",
    icon: <LogOut size={18} strokeWidth={1.5} />,
    url: "",
  },
];

function TopNav() {
  return (
    <div className="bg-[#004080]">
      <div className="container mx-auto px-6 flex items-center justify-end gap-6 border-r border-[#4b698a]">
        {topData.map((info, ind) => (
          <Link
            href={info?.url}
            key={ind}
            className="capitalize text-white border-s border-[#4b698a] ps-6 py-2 flex items-center gap-1 text-nowrap"
          >
            {info?.icon}
            {info?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
