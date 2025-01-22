import { Database } from "lucide-react";
import ServiceOfferingsCart from "./ServiceOfferingsCart";
import Image from "next/image";

const serviceOfferingsData = [
  {
    image: (
      <Image
        src="/services/doamin.png" // Replace with the correct path in your public folder
        alt="domain Icon"
        width={400}
        height={400}
      />
    ),
    title: "Domains",
    form: (
      <form
        action="https://login.dinihost.com/cart.php?a=add&domain=register"
        placeholder="Find your Domain"
        method="post"
      >
        <span className="text-sm pb-2">Find your Domain:</span>
        <input
          type="text"
          name="query"
          size="20"
          className="border mr-2 rounded-md outline-none transition-all duration-300 hover:border-[#000094] px-2"
        />
        <input
          type="submit"
          value="Go"
          className="bg-[#000094] text-white px-3 rounded-md outline-none cursor-pointer"
        />
      </form>
    ),
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
    image: (
      <Image
        src="/services/hosting.png" // Replace with the correct path in your public folder
        alt="hosting Icon"
        width={400}
        height={400}
      />
    ),
    title: "Hosting",
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
    image: (
      <Image
        src="/services/vps.png" // Replace with the correct path in your public folder
        alt="vps Icon"
        width={400}
        height={400}
      />
    ),
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
    image: (
      <Image
        src="/services/DedicatedServer.png" // Replace with the correct path in your public folder
        alt="DedicatedServer"
        width={400}
        height={400}
      />
    ),
    title: "Dedicatd Server",
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
    image: (
      <Image
        src="/services/Businessemail.png" // Replace with the correct path in your public folder
        alt="Businessemail Icon"
        width={400}
        height={400}
      />
    ),
    title: "Business Email",
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
    image: (
      <Image
        src="/services/Websitedesing.png" // Replace with the correct path in your public folder
        alt="Websitedesing Icon"
        width={400}
        height={400}
      />
    ),
    title: "Website Design",
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
    image: (
      <Image
        src="/services/SMS.png" // Replace with the correct path in your public folder
        alt="SMS Icon"
        width={400}
        height={400}
      />
    ),
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
  {
    image: (
      <Image
        src="/services/Software.png" // Replace with the correct path in your public folder
        alt="Software Icon"
        width={400}
        height={400}
      />
    ),
    title: "Software",
    details: [
      { name: "Dedicated Server in BD", url: "" },
      { name: "Dedicated Server in USA", url: "" },
      { name: "Windows Dedicated Server", url: "" },
      { name: "Linux Dedicated Server", url: "" },
    ],
    color: "#99C33D",
    url: "",
  },
];

function ServiceOfferings() {
  return (
    <section className="container mx-auto px-3 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
      {serviceOfferingsData.map((serviceOffer, ind) => (
        <ServiceOfferingsCart key={ind} serviceOfferingsData={serviceOffer} />
      ))}
    </section>
  );
}

export default ServiceOfferings;
