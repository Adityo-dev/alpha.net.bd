import Image from "next/image";
import Link from "next/link";
// Components
import CopyRight from "./CopyRight";
import HeedHelp from "./HeedHelp";
import { Check, Mail, MapPin, PhoneCall } from "lucide-react";

const footerData = [
  {
    title: "About Dinisoft",
    info: [
      { name: "About Us", url: "/about-us" },
      { name: "Services", url: "/services" },
      { name: "Terms & Conditions", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "FAQs", url: "#" },
    ],
  },
  {
    title: "Services",
    info: [
      { name: "Web Hosting", url: "#" },
      { name: "Domain Registration", url: "#" },
      { name: "Cloud Services", url: "#" },
      { name: "Data Center", url: "#" },
      { name: "Technical Support", url: "#" },
    ],
  },
  {
    title: "Services",
    info: [
      { name: "Web Hosting", url: "#" },
      { name: "Domain Registration", url: "#" },
      { name: "Cloud Services", url: "#" },
      { name: "Data Center", url: "#" },
      { name: "Technical Support", url: "#" },
    ],
  },
  {
    title: "Mailing Address",
    info: [
      {
        name: (
          <>
            Modern Moor, (Mutual Trust Bank Market), <br />
            Ghashiapara Road, Dinajpur, Bangladesh
          </>
        ),
        icon: <MapPin size={20} />,
        url: "#",
      },
      {
        name: "+8801788800151",
        icon: <PhoneCall size={20} />,
        url: "tel:+8801788800151",
      },
      {
        name: "sales@dinisoftbd.com",
        icon: <Mail size={20} />,
        url: "mailto:sales@dinisoftbd.com",
      },
      {
        name: "Contact Us",
        icon: <Check size={20} />,
        url: "/contact-us",
      },
    ],
  },
];

// const payBill = {
//   title: "Pay bill through",
//   info: [
//     "/payment-1.png",
//     "/payment-2.png",
//     "/payment-3.png",
//     "/payment-4.png",
//     "/payment-5.png",
//     "/payment-6.png",
//     "/payment-7.png",
//     "/payment-8.png",
//   ],
// };

function Footer() {
  return (
    <footer className="bg-[#151515] text-white mt-64 relative">
      {/* Heed Help section */}
      <section className="absolute left-0 right-0 -top-[20%] xl:-top-[35%] flex justify-center px-3 lg:px-6">
        <HeedHelp />
      </section>
      {/* Footer Data Info */}
      <section className="container mx-auto px-3 lg:px-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pt-40 pb-10">
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-start md:justify-around gap-6 sm:gap-12 md:gap-6 col-span-1 sm:col-span-2 lg:col-span-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 uppercase">
                {section?.title}
              </h3>
              <ul className="space-y-4">
                {section.info.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {item?.icon && (
                      <span className="text-base">{item.icon}</span>
                    )}
                    <Link href={item?.url} className="text-sm hover:underline">
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pay Bill Section */}
        {/* <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-4 uppercase">{payBill?.title}</h3>
          <div className="grid grid-cols-6 gap-2">
            {payBill.info.map((imageSrc, idx) => (
              <Image
                key={idx}
                src={imageSrc}
                width={600}
                height={600}
                alt="Payment Method"
                className="w-full h-full object-contain"
              />
            ))}
          </div>
        </div> */}
      </section>

      {/* Logo & Description */}
      <section className="container mx-auto px-3 lg:px-6 flex flex-wrap gap-3 items-center justify-center mb-8">
          {/* <Image
            src="/logo.jpg"
            width={600}
            height={600}
            alt="Brand logo"
            className="w-32 h-full"
          /> */}
          <Image
            src="/SSLCommerz-Pay-With-logo-All-Size-03.png"
            width={1200}
            height={1200}
            alt="Brand logo"
            className="w-full md:w-3/4 object-cover mx-auto"
          />
        </section>

      {/* Copy Right Section */}
      <section>
        <CopyRight />
      </section>
    </footer>
  );
}

export default Footer;
