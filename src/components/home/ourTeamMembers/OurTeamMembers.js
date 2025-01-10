import Image from "next/image";
import Link from "next/link";
// icon
import { ChevronRight } from "lucide-react";

const teamMembersData = [
  {
    image: "/avater.png",
    companyName: "Tanmoysoft",
    rating: "",
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    companyName: "Tanmoysoft",
    rating: "",
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    companyName: "Tanmoysoft",
    rating: "",
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    companyName: "Tanmoysoft",
    rating: "",
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    companyName: "Tanmoysoft",
    rating: "",
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
];

function OurTeamMembers() {
  return (
    <section className="container mx-auto px-6">
      <h2 className="text-3xl text-[#0E9AFF] font-semibold text-center mb-6">
        Our Team Members
      </h2>
      <div className="grid grid-cols-5 gap-6">
        {teamMembersData.map((member, ind) => (
          <div key={ind}>
            <div className="border border-b-2 border-b-[#0E9AFF] text-center pb-4">
              <Image src={member?.image} width={400} height={400} alt="" />
              <Link
                href={member?.moreInfo}
                className="text-[#0E9AFF] flex items-center justify-center gap-2"
              >
                Get more info <ChevronRight size={18} strokeWidth={1.2} />
              </Link>
            </div>
            <div className="space-y-3 mt-4">
              <p>{member?.companyName}</p>
              <p>{member?.description}</p>
              <p className="flex items-center space-x-2">
                <span className="w-12 h-[1px] bg-red-500"></span>
                <span className="font-semibold">{member?.companyName}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeamMembers;
