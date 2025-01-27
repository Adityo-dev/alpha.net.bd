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
      { name: "Purchase Domain", url: "https://login.dinihost.com/" },
      { name: "Transfer Domain", url: "https://login.dinihost.com/" },
      { name: "Renew Domain", url: "https://login.dinihost.com/" },
      { name: "Register .bd domain", url: "https://login.dinihost.com/" },
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
      { name: "Shared Hosting (BDIX)", url: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting" },
      { name: "Shared Hosting (Singapore)", url: "https://login.dinihost.com/index.php?rp=/store/linux-shared-hosting-singapore" },
      { name: "Shared Hosting (USA)", url: "https://login.dinihost.com/index.php?rp=/store/linux-shared-hosting-usa" },
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
      { name: "Unmanaged VPS", url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps" },
      { name: "Managed VPS", url: "https://alpha-net-bd.vercel.app/ssd-vps" },
      { name: "Storage VPS", url: "https://login.dinihost.com/index.php?rp=/store/storage-vps" },
      { name: "Backup VPS", url: "https://login.dinihost.com/index.php?rp=/store/backup-vps" },
    ],
    buttons: [
      { name: "Order Now", url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps", transparent: true },
      {
        name: "View Detail",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps",
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
      { name: "Unmanaged Dedicated Server", url: "https://alpha-net-bd.vercel.app/dedicated-server" },
      { name: "Managed Dedicated Server", url: "https://login.dinihost.com/index.php?rp=/store/dedicated-serverbdix" },
      { name: "High Performance Dedicated Server", url: "https://login.dinihost.com/index.php?rp=/store/dedicated-serversingapore" },
      { name: "Resell Dedicated Server", url: "https://login.dinihost.com/index.php?rp=/store/dedicated-serversingapore" },
    ],
    buttons: [
      { name: "Order Now", url: "https://alpha-net-bd.vercel.app/dedicated-server", transparent: true },
      {
        name: "View Detail",
        url: "https://alpha-net-bd.vercel.app/dedicated-server",
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
      { name: "Business Email", url: "https://login.dinihost.com/index.php?rp=/store/email-services" },
      { name: "Zimbra Email", url: "https://login.dinihost.com/index.php?rp=/store/email-services/zimbra-mail-server" },
      { name: "Enterprise Email", url: "https://login.dinihost.com/index.php?rp=/store/email-services/enterprise-email" },
      { name: "Google Email (Gsuite)", url: "https://login.dinihost.com/index.php?rp=/store/email-services/google-email-gsuits" },
    ],
    buttons: [
      { name: "Order Now", url: "https://login.dinihost.com/index.php?rp=/store/email-services", transparent: true },
      {
        name: "View Detail",
        url: "https://login.dinihost.com/index.php?rp=/store/email-services",
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
      { name: "Basic Website Design", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
      { name: "Advance Website Design", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
      { name: "Company Website Design", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
      { name: "News Paper Website Design", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
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
      { name: "Non Masking SMS", url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms" },
      { name: "Masking SMS", url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms" },
      { name: "Voice SMS", url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms" },
      { name: "OTP SMS", url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms" },
    ],
    buttons: [
      { name: "Order Now", url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms", transparent: true },
      {
        name: "View Detail",
        url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms",
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
      { name: "School Management Software", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
      { name: "Shop Management Software", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
      { name: "Hospital Management Software", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
      { name: "ERP", url: "https://login.dinihost.com/index.php?rp=/store/website-design" },
    ],
    buttons: [
      { name: "Order Now", url: "https://login.dinihost.com/index.php?rp=/store/website-design", transparent: true },
      {
        name: "View Detail",
        url: "https://login.dinihost.com/index.php?rp=/store/website-design",
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
