import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";

function ContactUs() {
  return (
    <>
      <div className=" bg-[#014cda]">
        <div className="container mx-auto max-w-[1390px] px-2 text-white text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl w-2/3 mx-auto ">Web hosting made easy & affordable, choose a fine-tuned web hosting services solution for successful personal and business websites.</p>
        </div>
      </div>
      <div className="container mx-auto max-w-[1390px] px-2">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Google img or google map */}
      <div>
        <GoogleMap />
      </div>

      <div className="mb-10">
        <h1 className="bg-[#EBF3FF] text-[#204674] text-center py-2 font-semibold text-xl border-t border-b border-[#80a4d9]">Location Of Our Clients</h1>
        
        {/* carusel add korte hobe */}
        <div className="container mx-auto max-w-[1390px] px-2">
          Country flag Carusel
        </div>
      </div>
    </>
  );
}

export default ContactUs;
