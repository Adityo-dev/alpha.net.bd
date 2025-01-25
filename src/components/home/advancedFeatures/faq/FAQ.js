// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqData = [
  {
    title: "Why you choose us?",
    d: "We understand the uptime importance. We pledge to deliver in excess of 99.9% uptime, each and every month. We have 30 Days moneyback guarantee, so you can try our service without any risk. We'll refund you if you're not satisfied. Our customer support is 24x7x365. With your hosting package you also gain 24x7 accesses to our expert support team.",
    info: [
      "We guarantee an uptime of over 99.9% every month, ensuring your website remains accessible and reliable at all times",
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment without any hassle.",
      "Absolutely! Our expert support team is available 24x7x365 to assist you with any issues or questions.",
    ],
  },
  {
    title: "Need any help?",
    d: "Our customer support is 24x7x365. With your hosting package you also gain 24x7 accesses to our expert support team.",
    info: [
      "Our expert support team is available 24x7x365. You can reach us via email, live chat, or our support hotline anytime you need assistance.",
      "Yes, all hosting packages come with 24x7 access to our expert support team at no additional cost.",
      "Our support team is equipped to assist you with technical issues, account inquiries, or any challenges you may face with your hosting services.",
    ],
  },
  {
    title: "How can i pay you?",
    d: "Scan this QR and fill the form and pay.",
    image: "/com.png",
    info: [
      "We have been providing reliable domain hosting services since 2012, with over 13 years of experience in Bangladesh's hosting industry.",
      "DiniSoft BD is known as the best domain hosting provider in Bangladesh. We offer the perfect domain names and hosting plans tailored to your needs, backed by years of expertise.",
    ],
  },
  {
    title: "What's your current offer",
    d: "Office is coming",
    info: [
      "Yes, we have exciting offers coming soon! Stay tuned for updates on our latest deals and discounts.",
      "Our new offer is on the way! Keep an eye on our website or announcements for the official launch.",
    ],
  },
];

function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="1">
      {faqData.map((faq, ind) => (
        <AccordionItem key={ind} value={(ind + 1).toString()}>
          <AccordionTrigger className="bg-[#e9e9e9] text-[#3300CC] mt-0.5 p-3">
            {faq?.title}
          </AccordionTrigger>
          <AccordionContent className="bg-[#fcfcfc] p-4 flex flex-col gap-4">
            <div>
              <p className="text-gray-500 ms-10 leading-6">{faq?.d}</p>
              {faq?.image && (
                <div>
                  <Image
                    src={faq.image}
                    alt="FAQ Image"
                    width={300}
                    height={300}
                    className="w-14 h-14"
                  />
                </div>
              )}
            </div>
            <span className="space-y-2">
              {faq?.info.map((inf, ind) => (
                <li key={ind}>{inf}</li>
              ))}
            </span>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQ;
