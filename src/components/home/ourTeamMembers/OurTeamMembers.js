import OurTeamMembersSlider from "./OurTeamMembersSlider";

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
      <div>{<OurTeamMembersSlider ourTeamMembersData={teamMembersData} />}</div>
    </section>
  );
}

export default OurTeamMembers;
