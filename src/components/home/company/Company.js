import Image from "next/image";

const companyData = [
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
  { image: "/microsoft-azure.svg", alt: "microsoft-azure logo..." },
  { image: "/aws.svg", alt: "aws logo..." },
];

function Company() {
  return (
    <section
      className="relative w-full bg-gray-300"
      style={{
        backgroundImage: `url('/aboutbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto p-3 md:p-6 h-full w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2">
        {companyData.map((company, ind) => (
          <div
            key={ind}
            className="bg-white flex items-center justify-center p-2"
          >
            <Image
              src={company?.image}
              width={400}
              height={400}
              alt={company?.alt}
              className="w-16 h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Company;
