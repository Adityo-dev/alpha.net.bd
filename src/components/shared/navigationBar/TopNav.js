import Link from "next/link";
// icon
import { LogOut, MapPin, Phone, Target } from "lucide-react";

// data
const topData = [
  {
    name: "office location",
    icon: <MapPin size={18} strokeWidth={1.5} />,
    url: "https://maps.app.goo.gl/mFaubb1Ztm5qcvB86",
  },
  {
    name: "+8801788800151",
    icon: <Phone size={18} strokeWidth={1.5} />,
    url: "tel:+8801788800151",
  },
  {
    name: "Login",
    icon: <LogOut size={18} strokeWidth={1.5} />,
    url: "https://login.dinihost.com/index.php?rp=/login",
  },
];

function TopNav() {
  return (
    <div className="bg-[#004080] hidden xl:block">
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
