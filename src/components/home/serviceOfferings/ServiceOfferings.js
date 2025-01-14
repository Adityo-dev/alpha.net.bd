import { Database } from "lucide-react";
import ServiceOfferingsCart from "./ServiceOfferingsCart";

const serviceOfferingsData = [
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "Dedicated Server",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#5d21d2",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "VPS",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#5d21d2",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "Web Design",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#0E9AFF",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "Business Email",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#FF4949",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "Domains & Hosting",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#000094",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "Business Phone",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#005D9A",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "SSL",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#99C33D",
    url: "",
  },
  {
    image: <Database size={55} strokeWidth={1.2} />,
    title: "Sms",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#22C37D",
    url: "",
  },
];

function ServiceOfferings() {
  return (
    <section className="container mx-auto px-3 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
      {serviceOfferingsData.map((serviceOffer, ind) => (
        <ServiceOfferingsCart key={ind} serviceOfferingsData={serviceOffer} />
      ))}
    </section>
  );
}

export default ServiceOfferings;
