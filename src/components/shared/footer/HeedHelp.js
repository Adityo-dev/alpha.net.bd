import { Phone } from "lucide-react";
import Link from "next/link";

const helpData = [
  {
    icon: <Phone size={20} strokeWidth={1} />,
    name: "Call us",
    url: "#",
  },
  {
    icon: <Phone size={20} strokeWidth={1} />,
    name: "Live Chat",
    url: "#",
  },
  {
    icon: <Phone size={20} strokeWidth={1} />,
    name: "Call Back",
    url: "#",
  },
  {
    icon: <Phone size={20} strokeWidth={1} />,
    name: "Open ticket",
    url: "#",
  },
];

function HeedHelp() {
  return (
    <section
      className="container mx-auto px-6  rounded-lg py-8 space-y-6"
      style={{
        backgroundImage: `url('bg_dedicatedserver.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-4xl font-semibold capitalize text-center">
        Heed Help? we are here to help you
      </h3>
      <p className="w-3/4 text-center mx-auto ">
        Please feel free to consult with one of experts, who will thoroughly
        evaluate your specific requirements and provider aq tailored proposal
        that perfectly aligns with your company unique needs and realities
      </p>
      <div className="flex items-center justify-around">
        {helpData.map((help, ind) => (
          <div key={ind}>
            <Link
              key={ind}
              href={help?.url}
              className="flex items-center gap-2 border px-4 py-3 rounded-md capitalize font-semibold bg-[#0E3C9E] border-none"
            >
              <span>{help?.icon}</span>
              <span>{help?.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeedHelp;
