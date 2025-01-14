import Image from "next/image";
import Marquee from "react-fast-marquee";

// data
const clientsLocationData = [
  { image: "/BD.png", name: "Bangladesh" },
  { image: "/Brazil.png", name: "Brazil" },
  { image: "/BD.png", name: "Bangladesh" },
  { image: "/France.png", name: "France" },
  { image: "/India.png", name: "India" },
  { image: "/Pakistan.png", name: "Pakistan" },
  { image: "/Germany.png", name: "Germany" },
  { image: "/BD.png", name: "Bangladesh" },
  { image: "/France.png", name: "France" },
  { image: "/Newzealand.png", name: "Newzealand" },
  { image: "/Spain.png", name: "Spain" },
  { image: "/BD.png", name: "Bangladesh" },
  { image: "/Pakistan.png", name: "Pakistan" },
  { image: "/Newzealand.png", name: "Newzealand" },
];

function ClientsLocation() {
  return (
    <div>
      <Marquee
        speed={60}
        direction="left"
        pauseOnHover
        gradient
        gradientWidth={50}
      >
        {clientsLocationData.map((location, ind) => (
          <div
            key={ind}
            className="w-[200px] lg:w-[250px] flex items-center gap-3 shadow-lg p-3 lg:p-4 rounded-md mr-3 lg:mr-6 border transition-all duration-300 hover:border-[#80a4d9]"
          >
            <Image
              src={location?.image}
              width={400}
              height={400}
              alt={location?.name}
              className="max-w-12 lg:max-w-16 w-full h-full"
            />
            <p>{location?.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default ClientsLocation;
