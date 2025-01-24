import Image from "next/image";
import ServiceOfferingsCart from "./ServiceOfferingsCart";

const serviceOfferingsData = [
  {
    image: (
      <Image
        src="/services/doamin.png"
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
      { name: "Purchase Domain", url: "" },
      { name: "Transfer Domain", url: "" },
      { name: "Renew Domain", url: "" },
      { name: "Register .bd domain", url: "" },
    ],
    buttons: [
      { name: "Domain Price", url: "https://www.dinisoftbd.com/domain", transparent: true },
      {
        name: "Domain Login CP",
        url: "https://login.dinihost.com/index.php?rp=/login",
        transparent: false,
      },
    ],
    color: "#000094",
  },
  {
    image: (
      <Image
        src="/services/hosting.png"
        alt="hosting Icon"
        width={400}
        height={400}
      />
    ),
    title: "Hosting",
    details: [
      { name: "Shared Hosting (BDIX)", url: "" },
      { name: "Shared Hosting (Singapore)", url: "" },
      { name: "Shared Hosting (USA)", url: "" },
      { name: "Reseller Hosting (BDIX)", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#5d21d2",
  },
  {
    image: (
      <Image
        src="/services/vps.png"
        alt="vps Icon"
        width={400}
        height={400}
      />
    ),
    title: "VPS",
    details: [
      { name: "Unmanaged VPS", url: "" },
      { name: "Managed VPS", url: "" },
      { name: "Storage VPS", url: "" },
      { name: "Backup VPS", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#5d21d2",
  },
  {
    image: (
      <Image
        src="/services/DedicatedServer.png"
        alt="DedicatedServer Icon"
        width={400}
        height={400}
      />
    ),
    title: "Dedicated Server",
    details: [
      { name: "Unmanaged Dedicated Server", url: "" },
      { name: "Managed Dedicated Server", url: "" },
      { name: "High Performance Dedicated Server", url: "" },
      { name: "Resell Dedicated Server", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#FF4949",
  },
  {
    image: (
      <Image
        src="/services/Businessemail.png"
        alt="Businessemail Icon"
        width={400}
        height={400}
      />
    ),
    title: "Business Email",
    details: [
      { name: "Business Email", url: "" },
      { name: "Zimbra Email", url: "" },
      { name: "Enterprise Email", url: "" },
      { name: "Google Email (Gsuite)", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#0E9AFF",
  },
  {
    image: (
      <Image
        src="/services/Websitedesing.png"
        alt="Websitedesing Icon"
        width={400}
        height={400}
      />
    ),
    title: "Website Design",
    details: [
      { name: "Basic Website Design", url: "" },
      { name: "Advance Website Design", url: "" },
      { name: "Company Website Design", url: "" },
      { name: "News Paper Website Design", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#005D9A",
  },
  {
    image: (
      <Image
        src="/services/SMS.png"
        alt="SMS Icon"
        width={400}
        height={400}
      />
    ),
    title: "SMS",
    details: [
      { name: "Non Masking SMS", url: "" },
      { name: "Masking SMS", url: "" },
      { name: "Voice SMS", url: "" },
      { name: "OTP SMS", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#22C37D",
  },
  {
    image: (
      <Image
        src="/services/Software.png"
        alt="Software Icon"
        width={400}
        height={400}
      />
    ),
    title: "Software",
    details: [
      { name: "School Management Software", url: "" },
      { name: "Shop Management Software", url: "" },
      { name: "Hospital Management Software", url: "" },
      { name: "ERP", url: "" },
    ],
    buttons: [
      { name: "Order Now", url: "#", transparent: true },
      {
        name: "View Detail",
        url: "#",
        transparent: false,
      },
    ],
    color: "#99C33D",
  },
];

function ServiceOfferings() {
  return (
    <section className="container mx-auto px-3 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {serviceOfferingsData.map((serviceOffer, ind) => (
        <ServiceOfferingsCart key={ind} serviceOfferingsData={serviceOffer} />
      ))}
    </section>
  );
}

export default ServiceOfferings;
