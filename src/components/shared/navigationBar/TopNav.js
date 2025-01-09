import Link from "next/link";

// data
const topData = [
  {
    name: "office location",
    icon: "",
    url: "",
  },
  {
    name: "+88096123456",
    icon: "",
    url: "",
  },
  {
    name: "Login",
    icon: "",
    url: "",
  },
];

function TopNav() {
  return (
    <div className="bg-[#004080] py-2">
      <div className="container mx-auto px-6 flex items-center justify-end gap-6">
        {topData.map((info, ind) => (
          <Link href={info?.url} key={ind} className="capitalize text-white">
            {info?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
