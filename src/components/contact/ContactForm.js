import { Mail } from "lucide-react";
import { MapPinPlus } from "lucide-react";
import { MapPinPlusInside } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="container mx-auto px-3 lg:px-6">
      <div className="grid grid-cols-12">
        {/* Contact Form Section */}
        <div className="col-span-8 rounded-lg  p-10 shadow-sm bg-[#FAFAFA]">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-11/12 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter email"
                className="w-11/12 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-11/12 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Business Info Card */}
        <div className="col-span-4  rounded-lg bg-[#0948B3] p-8 text-white shadow-lg">
          <h2 className="mb-6 text-[27px] font-bold">
            Looking for a excellent Business idea?
          </h2>
          <p className="mb-8">
            Drop by anytime, we endeavour to answer all enquiries within 24
            hours on business days.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPinPlus size={28} />
              <div>
                <h3 className="font-semibold">Company Location</h3>
                <p className="text-sm text-white/90">
                  Angorpota, Dahagram - 5540, Patgram, Lalmonirhat, Dhaka,
                  Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail size={20} />
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="text-sm text-white/90">Support@SmartHostBD.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
