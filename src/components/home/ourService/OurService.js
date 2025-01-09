import Image from "next/image";
import Link from "next/link";

const ourServiceCart = [
  {
    image: "https://imgur.com/XI3ITw4.png",
    icon: "https://imgur.com/wJHnLPr.png",
    title: "web design",
    description: "our web design package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/7s3fnsP.png",
    icon: "https://imgur.com/MGHJDI9.png",
    title: "Software development",
    description: "our Software development package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/XI3ITw4.png",
    icon: "https://imgur.com/a7xmxiP.png",
    title: "SEO service",
    description: "our SEO service package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/XI3ITw4.png",
    icon: "https://imgur.com/a7xmxiP.png",
    title: "SEO service",
    description: "our SEO service package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/rY8y2MP.png",
    icon: "https://imgur.com/UeOGXm7.png",
    title: "Domain and hosting",
    description: "our Domain and hosting package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/RGa7eKz.png",
    icon: "https://imgur.com/e9scoiH.png",
    title: "Social media marketing",
    description: "our Social media marketing package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/XI3ITw4.png",
    icon: "https://imgur.com/e3ghkan.png",
    title: "graphics design",
    description: "our graphics design package starts from 10000Tk",
    utl: "#",
  },
  {
    image: "https://imgur.com/gvMlClq.png",
    icon: "https://imgur.com/e3ghkan.png",
    title: "Graphics design",
    description: "our Graphics design package starts from 10000Tk",
    utl: "#",
  },
];

function OurService() {
  return (
    <section className="container mx-auto px-6 grid grid-cols-4 gap-6">
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
              {service?.title}
            </h2>
            <p className="mt-6 text-center">
              {service?.description},
              <Link href={service?.utl}> click here for details</Link>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default OurService;
