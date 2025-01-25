import OurTeamMembersSlider from "./OurTeamMembersSlider";

const teamMembersData = [
  {
    name: "Monju Ara",
    designation: "Founder & CEO",
    image: "/avater.png",
  },
  {
    name: "Md Shahajahan Ali",
    designation: "Senior System Admin",
    image: "/avater.png",
  },
  {
    name: "Ruma Hasda",
    designation: "Support Executive",
    image: "/avater.png",
  },
  {
    name: "Md Juwel Hossain",
    designation: "Programmer",
    image: "/avater.png",
  },
  {
    name: "Mst Sadia Jahan Monisha",
    designation: "Sales Executive",
    image: "/avater.png",
  },
  {
    name: "Md Robiul Islam",
    designation: "Accounts Officer",
    image: "/avater.png",
  },
];

function OurTeamMembers() {
  return (
    <section className="container mx-auto px-3 lg:px-6">
      <h2 className="text-3xl text-[#0E9AFF] font-semibold text-center mb-6">
        Our Team Members
      </h2>
      <OurTeamMembersSlider ourTeamMembersData={teamMembersData} />
    </section>
  );
}

export default OurTeamMembers;
