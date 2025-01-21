// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "Why you choose us?",
    d: "we have been providing domain hosting since 2012, so we have 13 years of experience as a domain hosting provider in bangladesh. web host BD is the best domain hosting provider in Bangladesh. You van Get your right domain name and hosting plan here",
    info: [
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
    ],
  },
  {
    title: "Need any help?",
    d: "we have been providing domain hosting since 2012, so we have 13 years of experience as a domain hosting provider in bangladesh. web host BD is the best domain hosting provider in Bangladesh. You van Get your right domain name and hosting plan here",
    info: [
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
    ],
  },
  {
    title: "How can i pay you?",
    d: "we have been providing domain hosting since 2012, so we have 13 years of experience as a domain hosting provider in bangladesh. web host BD is the best domain hosting provider in Bangladesh. You van Get your right domain name and hosting plan here",
    info: [
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
    ],
  },
  {
    title: "Does Web Host BD allow office visit?",
    d: "we have been providing domain hosting since 2012, so we have 13 years of experience as a domain hosting provider in bangladesh. web host BD is the best domain hosting provider in Bangladesh. You van Get your right domain name and hosting plan here",
    info: [
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
      "Domain Hosting provider provider with Reasonable price and Hosting plan",
    ],
  },
];

function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="1">
      {faqData.map((faq, ind) => (
        <AccordionItem key={ind} value={(ind + 1).toString()}>
          <AccordionTrigger className="bg-[#e9e9e9] text-[#0E9AFF] mt-0.5 p-3">
            {faq?.title}
          </AccordionTrigger>
          <AccordionContent className="bg-[#fcfcfc] p-4 flex flex-col gap-4">
            <span className="text-gray-500 ms-10 leading-6">{faq?.d}</span>
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
