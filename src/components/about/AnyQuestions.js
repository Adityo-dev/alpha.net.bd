import { Phone } from "lucide-react";

function AnyQuestions() {
  return (
    <div className="bg-[#F4F4F7] py-10 ">
      <div className="container mx-auto px-2 flex flex-col lg:flex-row gap-5 items-center text-center lg:text-start justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold">
          HAVE ANY QUESTIONS?
        </h1>
        <p className="text-[#444444]">
          Do you want to take advantage of our special offers? Please call us
          today.
        </p>
        <a
          href="tel:+88 01823 662233"
          className="py-3 px-4 bg-[#8BC34A] rounded-lg text-white font-medium flex gap-2 items-center justify-center"
        >
          <Phone size={16} /> +88 01823 662233
        </a>
      </div>
    </div>
  );
}

export default AnyQuestions;
