import TestimonialSlider from "./TestimonialSlider";

const testimonialData = [
  {
    companyName: "Tanmoysoft",
    rating: 5,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 4,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 3,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 5,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 2,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 4,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 5,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "Tanmoysoft",
    rating: 5,
    description:
      "I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support. 10/10 ",
    name: "tanmoy Debnath",
    moreInfo: "#",
  },
];

function Testimonial() {
  return (
    <main>
      <TestimonialSlider testimonialData={testimonialData} />
    </main>
  );
}

export default Testimonial;
