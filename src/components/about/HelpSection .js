import { Ticket } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Phone } from "lucide-react";

const HelpSection = () => {
  return (
    <div
      className={`bg-[url('/background.jpg')] bg-cover bg-center text-white rounded-lg p-10 relative overflow-hidden`}
    >
      <h1 className="text-3xl font-semibold text-center mb-4">
        Need Help? We Are Here To Help You
      </h1>
      <p className="text-center text-lg mb-8">
        Please feel free to consult with one of our experts, who will thoroughly
        evaluate your specific requirements and provide a tailored proposal that
        perfectly aligns with your company’s unique needs and realities.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+88 01823 662233"
          className="flex items-center gap-2 bg-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Phone size={16} /> Call US
        </a>
        <button className="flex items-center gap-2 bg-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          💬 Live Chat
        </button>
        <button className="flex items-center gap-2 bg-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          <PhoneCall size={16} /> Call Back
        </button>
        <button className="flex items-center gap-2 bg-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          <Ticket size={16} /> Open Ticket
        </button>
      </div>
    </div>
  );
};

export default HelpSection;
