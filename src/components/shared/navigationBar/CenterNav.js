import { Menu, PhoneCall, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// data
const centerData = [
  {
    image: "/success-23.png",
    url: "#",
    alt: "Success logo",
  },
  {
    image: "/cPanel.png",
    url: "#",
    alt: "cPanel logo",
  },
  {
    image: "/basis-top.png",
    url: "#",
    alt: "BASIS top logo",
  },
];

function CenterNav({ navData }) {
  return (
    <section className="container mx-auto px-3 lg:px-6 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/logo.jpg"
          width={600}
          height={600}
          alt="Brand logo"
          className="w-20 md:w-24 2xl:w-32  h-full"
        />
      </Link>

      <div className="hidden 2xl:flex items-center gap-4">
        <Link
          href={"#"}
          className="text-4xl font-semibold text-red-600 uppercase"
        >
          OFFER
        </Link>
        {/* 
        {centerData.map((data, ind) => (
          <Link href={data.url} key={ind}>
            <Image
              src={data.image}
              width={400}
              height={400}
              alt={data.alt}
              className="w-24 h-full"
            />
          </Link>
        ))} */}
      </div>
      {/* mobile nav bar */}
      <div className="flex gap-5 items-center 2xl:hidden">
        <PhoneCall size={20} strokeWidth={2} />
        <UserRound size={20} strokeWidth={2} />

        <Sheet>
          <SheetTrigger asChild>
            <Menu size={32} strokeWidth={2} variant="outline" />
          </SheetTrigger>
          <SheetContent className="w-full p-3 md:p-4 border-s-0 bg-[#004080] text-white">
            <SheetHeader className="w-full h-[100vh] overflow-scroll ">
              <Accordion type="single" collapsible={true}>
                {navData.map((nav, ind) => (
                  <AccordionItem key={ind} value={`item-${ind}`}>
                    {nav?.info ? (
                      <AccordionTrigger className="py-3">
                        <Link href={nav?.url}>
                          <SheetTitle className="text-base font-normal text-white">
                            <SheetClose>{nav?.name}</SheetClose>
                          </SheetTitle>
                        </Link>
                      </AccordionTrigger>
                    ) : (
                      <div className="py-3 outline-none text-start">
                        <Link href={nav?.url}>
                          <SheetClose>{nav?.name}</SheetClose>
                        </Link>
                      </div>
                    )}
                    {nav?.info && (
                      <AccordionContent>
                        {nav?.info.map((subNav, subInd) => (
                          <SheetDescription
                            key={subInd}
                            className="flex items-center gap-2 border-b py-3 last:border-none text-white ms-4"
                          >
                            {subNav?.icon}
                            {subNav?.title}
                          </SheetDescription>
                        ))}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

export default CenterNav;
