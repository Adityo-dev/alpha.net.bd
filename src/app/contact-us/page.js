import ClientsLocation from "@/components/contact/ClientsLocation";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";

function ContactUs() {
  return (
    <main className="space-y-12">
      <div className="bg-[#014cda]">
        <div className="container mx-auto px-3 lg:px-6 w-full h-64 md:h-80 flex flex-col items-center justify-center text-white text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-base sm:text-lg w-full md:w-2/3 mx-auto ">
            Web hosting made easy & affordable, choose a fine-tuned web hosting
            services solution for successful personal and business websites.
          </p>
        </div>
      </div>

      <ContactInfo />
      <ContactForm />

      {/* Google img or google map */}
      {/* <div>
        <GoogleMap />
      </div> */}

      <div className="space-y-6">
        <h1 className="bg-[#EBF3FF] text-[#204674] text-center py-2 font-semibold text-xl border-t border-b border-[#80a4d9]">
          Location Of Our Clients
        </h1>

        {/* carusel add korte hobe */}
        <div className="container mx-auto px-3 lg:px-6">
          <ClientsLocation />
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
