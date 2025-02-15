import TestimonialSlider from "./TestimonialSlider";

const testimonialData = [
  {
    companyName: "",
    rating: 5,
    description:
      "DINISOFT কে পছন্দের মেইন কারণ হল যখনেই কোন প্রয়োজন হয় বা কোন সম্যসাইয় সম্মকিন হই সাইটের ডোমেইন/হোষ্টিং জনিত খুব দ্রুতই সমাধান পাই । আমি এই পর্যন্ত অনেক কেই রেফার করেছি , আশাকরি সবসময় সকল সমস্যা সমাধানে এমন রেসপন্স পাব । শুভ কামনা রইল DINISOFT এর জন্য ।",
    name: "Golam Kibria",
    moreInfo: "#",
  },
  {
    companyName: "",
    rating: 5,
    description:"১৫বছর যাবৎ দিনিসফটের সাথে আছি। কখনো প্রয়োজন পড়ে নাই তাদের ফোন দেয়ার। অনলাইনে নক করলেই সমাধান পাই। ধন্যবাদ দিনিসফট টিমকে।",
    name: "Maksud Ur Rahman",
    moreInfo: "#",
  },
  {
    companyName: "",
    rating: 5,
    description:"I have been using their domain & hosting services since 2018. I am fully satisfied, they will be providing you great support.",
    name: "Tanmoy Debnath",
    moreInfo: "#",
  },
  {
    companyName: "",
    rating: 5,
    description:"বিভিন্ন জায়গায় প্রতারিত হয়ে অবশেষে DINISOFTBD তে এসে সফলতার দুই বছর পার করলাম। মনের গভির থেকে DINISOFTBD পরিবার কে আন্তরিক মোবারকবাদ জানাচ্ছি। তাদের সেবা আর আন্তরিকতায় আমরা G21bd ( its a IT Firm by all kind of software solution ) অত্যন্ত আনন্দিত এবং চিন্তামুক্ত। ধন্যবাদ DINISOFTBD.",
    name: "Moniruzzaman",
    moreInfo: "#",
  },
  {
    companyName: "",
    rating: 5,
    description:"Dinisoft এর হোস্টিং ব্যবহার করে আমাদের নিউজ সাইট প্রায় ১২বছর যাবৎ চলছে। সমস্যা হয়নি কখনো। টুকিটাকি সমস্যা পেয়েছি তবে কোন ব্যাপার না। ১০এর মধ্যে ৮.৫ পাওয়ার মত।",
    name: "Ekusharkantho",
    moreInfo: "#",
  },
  {
    companyName: "",
    rating: 5,
    description:"I have been using their domain & hosting services since 2017. I am fully satisfied, they will be providing you great support ",
    name: "Tinasoftit",
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
