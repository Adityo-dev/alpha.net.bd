import Image from "next/image";
import Link from "next/link";
// icon
import { ChevronRight } from "lucide-react";

const teamMembersData = [
  {
    image: "/avater.png",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    moreInfo: "#",
  },
  {
    image: "/avater.png",
    moreInfo: "#",
  },
];

function OurTeamMembers() {
  return (
    <section className=" container mx-auto px-3 lg:px-6 ">
      <h2 className="text-3xl text-[#0E9AFF] font-semibold text-center mb-6">
        Our Team Members
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4 sm:gap-6">
        {teamMembersData.map((member, ind) => (
          <div key={ind}>
            <div className="border border-b-2 border-b-[#0E9AFF] text-center pb-4">
              <Image
                src={member?.image}
                width={400}
                height={400}
                alt=""
                className="object-contain"
              />
              <Link
                href={member?.moreInfo}
                className="text-[#0E9AFF] flex items-center justify-center gap-2"
              >
                Get more info <ChevronRight size={18} strokeWidth={1.2} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeamMembers;
