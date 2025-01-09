import { Database } from "lucide-react";
import ServiceOfferingsCart from "./ServiceOfferingsCart";

const serviceOfferingsData = [
  {
    image: <Database />,
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
    image: <Database />,
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
    image: <Database />,
    title: "Web Design",
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
    image: <Database />,
    title: "Business Email",
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
    image: <Database />,
    title: "Domains & Hosting",
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
    image: <Database />,
    title: "Business Phone",
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
    image: <Database />,
    title: "SSL",
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
    image: <Database />,
    title: "Sms",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#5d21d2",
    url: "",
  },
];

function ServiceOfferings() {
  return (
    <section className="container mx-auto px-6 grid grid-cols-4 gap-6">
      {serviceOfferingsData.map((serviceOffer, ind) => (
        <ServiceOfferingsCart key={ind} serviceOfferingsData={serviceOffer} />
      ))}
    </section>
  );
}

export default ServiceOfferings;
