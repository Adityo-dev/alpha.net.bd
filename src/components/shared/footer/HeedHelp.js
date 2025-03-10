"use client";
import { BookUser, Mail, MessagesSquare, Phone } from "lucide-react";
import Link from "next/link";

const helpData = [
  {
    icon: <Phone size={20} strokeWidth={1} />,
    name: "Call us",
    url: "tel:+8801788800151",
  },
  {
    icon: <MessagesSquare size={20} strokeWidth={1} />,
    name: "Live Chat",
    url: "#",
  },
  {
    icon: <Mail size={20} strokeWidth={1} />,
    name: "mail Us",
    url: "mailto:sales@dinisoftbd.com",
  },
  {
    icon: <BookUser size={20} strokeWidth={1} />,
    name: "Open ticket",
    url: "https://login.dinihost.com/contact.php",
  },
];

function HeedHelp() {
  const loadTawkTo = () => {
    if (window.Tawk_API) return; // Avoid loading multiple times
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/55a81f9b84d307454c027a34/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  };

  return (
    <section className="w-full">
      <div
        className="container mx-auto px-3 md:px-6 py-8 rounded-lg space-y-6"
        style={{
          backgroundImage: `url('bg_dedicatedserver.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize text-center">
          Need Help? We are here to help you
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-center mx-auto max-w-7xl">
          Please feel free to consult with one of our experts, who will
          thoroughly evaluate your specific requirements and provide a tailored
          proposal that perfectly aligns with your company’s unique needs and
          realities.
        </p>

        <div className="max-w-[700px] w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {helpData.map((help, ind) =>
            help?.name === "Live Chat" ? (
              <button
                key={ind}
                onClick={loadTawkTo}
                className="flex items-center gap-2 px-4 py-2 sm:py-3 rounded-md capitalize font-semibold bg-[#0E3C9E] text-white hover:bg-[#0b2e7e] transition duration-300 text-nowrap"
              >
                <span>{help?.icon}</span>
                <span>{help?.name}</span>
              </button>
            ) : (
              <Link
                key={ind}
                href={help?.url}
                className="flex items-center gap-2 px-4 py-2 sm:py-3 rounded-md capitalize font-semibold bg-[#0E3C9E] text-white hover:bg-[#0b2e7e] transition duration-300 text-nowrap"
              >
                <span>{help?.icon}</span>
                <span>{help?.name}</span>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default HeedHelp;
