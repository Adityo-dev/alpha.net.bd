import Image from "next/image";
import Link from "next/link";

const ourServiceCart = [
  {
    image: "/services/Basics-of-Web-Design.png",
    icon: "https://imgur.com/wJHnLPr.png",
    title: "web design",
    description: "our web design package starts from 10000Tk",
    url: "https://login.dinihost.com/index.php?rp=/store/website-design",
  },
  {
    image: "https://imgur.com/7s3fnsP.png",
    icon: "https://imgur.com/MGHJDI9.png",
    title: "Software development",
    description: "our Software development package starts from 10000Tk",
    url: "https://login.dinihost.com/index.php?rp=/store/software-development",
  },
  {
    image: "https://imgur.com/XI3ITw4.png",
    icon: "https://imgur.com/a7xmxiP.png",
    title: "SEO service",
    description: "our SEO service package starts from 10000Tk",
    url: "#",
  },
  {
    image: "/services/email-marketing.png",
    icon: "/services/emailiconBusiness.png",
    title: "Business Email",
    description: "Email for Small Medium Business",
    url: "https://login.dinihost.com/index.php?rp=/store/email-services",
  },
  {
    image: "https://imgur.com/rY8y2MP.png",
    icon: "https://imgur.com/UeOGXm7.png",
    title: "Domain and hosting",
    description: "our Domain and hosting package starts from 10000Tk",
    url: "https://login.dinihost.com/",
  },
  {
    image: "https://imgur.com/RGa7eKz.png",
    icon: "https://imgur.com/e9scoiH.png",
    title: "Social media marketing",
    description: "our Social media marketing package starts from 10000Tk",
    url: "#",
  },
  {
    image: "/services/exchange-mail.png",
    icon: "/services/icon.jpeg",
    title: "Enterprise Email",
    description: "Enterprise Level Email Service",
    url: "https://login.dinihost.com/index.php?rp=/store/email-services/enterprise-email",
  },
  {
    image: "/services/masking-and-non-masking.png",
    icon: "/services/sms-msg.png",
    title: "Non Masking SMS",
    description: "SMS from Fixt Number",
    url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms",
  },
];

function OurService() {
  return (
    <section className="container mx-auto px-3 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
      {ourServiceCart.map((service, ind) => (
        <div
          key={ind}
          className="border border-[#DFDFDF] relative overflow-hidden"
        >
          <div className="relative">
            <Image
              src={service?.image}
              width={400}
              height={400}
              alt="image..."
              className="w-full h-52 object-cover"
            />
            <Image
              src={service?.icon}
              width={400}
              height={400}
              alt="icon..."
              className="w-14 h-14 absolute -bottom-6 left-0 right-0 mx-auto object-cover"
            />
          </div>
          <div className="px-6 py-6 mt-6">
            <h2 className="text-2xl font-semibold capitalize text-center">
              <Link
                href={service?.url}
                className="hover:text-blue-500 transition duration-300"
              >
                {service?.title}
              </Link>
            </h2>
            <p className="mt-6 text-center">
              {service?.description},
              <Link href={service?.url} className=" text ">
                {" "}
                click here for details
              </Link>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default OurService;
