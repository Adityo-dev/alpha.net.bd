import Image from "next/image";
import Link from "next/link";
// Components
import CopyRight from "./CopyRight";
import HeedHelp from "./HeedHelp";

const footerData = [
  {
    title: "About xeonbd",
    info: [
      { name: "About Us", url: "#" },
      { name: "Our Services", url: "#" },
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
];

const payBill = {
  title: "Pay bill through",
  info: [
    "/payment-1.png",
    "/payment-2.png",
    "/payment-3.png",
    "/payment-4.png",
    "/payment-5.png",
    "/payment-6.png",
    "/payment-7.png",
    "/payment-8.png",
    "/payment-1.png",
    "/payment-2.png",
    "/payment-3.png",
    "/payment-4.png",
    "/payment-5.png",
    "/payment-6.png",
    "/payment-7.png",
    "/payment-8.png",
  ],
};

function Footer() {
  return (
    <footer className="bg-[#151515] text-white mt-40 relative">
      {/* Heed Help section */}
      <section className="absolute left-0 right-0 -top-32 flex justify-center">
        <HeedHelp />
      </section>
      {/* Footer Data Info */}
      <section className="container mx-auto p-6 grid grid-cols-3 gap-8 pt-40 pb-10">
        {/* Logo & Description */}
        <div className="space-y-8">
          <div>
            <Image
              src="/brand-logo.svg"
              width={600}
              height={600}
              alt="Brand logo"
              className="w-64"
            />
            <p className="mt-4 text-sm">
              Complete online solutions and infrastructure service provider.
              Owning Tier III standard data centers in Bangladesh, and
              colocation centers in the USA and Europe!
            </p>
          </div>

          <p className="text-sm border-t border-gray-600 pt-8">
            <span className="text-[#a0cf6d]">VAT/BLN ID:01234567890</span>
            <span> All prices are excluding 5% Govt.VAT</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="flex justify-around">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 uppercase">
                {section?.title}
              </h3>
              <ul className="space-y-1.5">
                {section.info.map((item, idx) => (
                  <li key={idx}>
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
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">{payBill?.title}</h3>
          <div className="grid grid-cols-6 gap-2">
            {payBill.info.map((imageSrc, idx) => (
              <Image
                key={idx}
                src={imageSrc}
                width={600}
                height={600}
                alt="Payment Method"
                className="w-full h-full"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Copy Right Section */}
      <section>
        <CopyRight />
      </section>
    </footer>
  );
}

export default Footer;
