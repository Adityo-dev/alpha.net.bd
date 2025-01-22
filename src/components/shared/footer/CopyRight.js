import Link from "next/link";
// icon
import { Facebook, Instagram, Twitter } from "lucide-react";
// data
const socialMedia = [
  { icon: <Facebook size={20} strokeWidth={1.2} />, url: "#" },
  { icon: <Instagram size={20} strokeWidth={1.2} />, url: "#" },
  { icon: <Twitter size={20} strokeWidth={1.2} />, url: "#" },
];

function CopyRight() {
  return (
<section className="bg-[#000000] text-gray-400">
  <div className="container mx-auto px-3 lg:px-6 py-3 flex gap-4 flex-col md:flex-row items-center justify-between text-center">
    <p className="text-sm text-center w-full">
      Copyright 2007 – 2025 Dinisoft. All Rights Reserved
    </p>

    <div className="flex items-center gap-4">
      {socialMedia.map((media, ind) => (
        <Link key={ind} href={media?.url}>
          {media?.icon}
        </Link>
      ))}
    </div>
  </div>
</section>
  );
}

export default CopyRight;
