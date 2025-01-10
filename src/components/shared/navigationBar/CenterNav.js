import Image from "next/image";
import Link from "next/link";

// data
const centerData = [
  {
    image: "/success-23.png",
    url: "#",
    alt: "Success logo",
  },
  {
    image: "/cPanel.png",
    url: "#",
    alt: "cPanel logo",
  },
  {
    image: "/basis-top.png",
    url: "#",
    alt: "BASIS top logo",
  },
];

function CenterNav() {
  return (
    <section className="container mx-auto px-6 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/brand-logo.svg"
          width={600}
          height={600}
          alt="Brand logo"
          className="w-full h-full"
        />
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href={"#"}
          className="text-4xl font-semibold text-red-600 uppercase"
        >
          OFFER
        </Link>

        {centerData.map((data, ind) => (
          <Link href={data.url} key={ind}>
            <Image
              src={data.image}
              width={400}
              height={400}
              alt={data.alt}
              className="w-24 h-full"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CenterNav;
