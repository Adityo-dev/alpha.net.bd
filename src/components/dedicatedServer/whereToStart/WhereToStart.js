import { MailOpen, MessageSquare, PhoneCall, TicketsPlane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactData = [
  {
    icon: <MessageSquare size={36} strokeWidth={1.5} />,
    name: "Sales Live Chat",
    color: "#22A4CA",
    url: "#",
  },
  {
    icon: <TicketsPlane size={36} strokeWidth={1.5} />,
    name: "Support Tickets",
    color: "#C49E37",
    url: "#",
  },
  {
    icon: <PhoneCall size={36} strokeWidth={1.5} />,
    name: "Call Us Now",
    color: "#34A143",
    url: "#",
  },
  {
    icon: <MailOpen size={36} strokeWidth={1.5} />,
    name: "Send Email",
    color: "#C02459",
    url: "#",
  },
];

function WhereToStart() {
  return (
    <section className="bg-[#02345C] text-white relative">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl mb-3 font-semibold">
            Not sure where to start?
          </h2>
          <p className="text-[#b3c2ce] leading-relaxed">
            Talk to one of our hosting specialists who will review your needs
            and propose a tailored hosting solution that matches your specific
            business reality and requirements.
          </p>

          {/* Contact Options */}
          <div className="flex flex-wrap gap-4 mt-10">
            {contactData.map((contact, ind) => (
              <Link
                href={contact?.url}
                key={ind}
                className="w-40 h-28 rounded-lg flex flex-col items-center justify-center pt-4 gap-4 hover:opacity-85 transition-all duration-300"
                style={{ backgroundColor: contact.color }}
              >
                <p>{contact.icon}</p>
                <p className="bg-[#42424233] w-full h-12 flex items-center justify-center rounded-b-lg font-medium text-sm">
                  {contact.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/commen-support-img.png"
            width={400}
            height={400}
            alt="Support"
            className="max-w-full w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default WhereToStart;
