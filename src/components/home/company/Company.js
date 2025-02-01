import Image from "next/image";

const companyData = [
  { image: "/company/apache-logo.png", alt: "apache-logo" },
  { image: "/company/cloudlinux-os-logo-png_seeklogo-352374.png", alt: "cloudlinux" },
  { image: "/company/DirectAdminLogo.svg.png", alt: "Direct Admin Logo" },
  { image: "/company/kv6919kedc-kvm-logo-kvm-axs-guard-documentation.png", alt: "kvm-logo-kvm-axs-guard-documentation" },
  { image: "/company/linux-server.jpg", alt: "linux server" },
  { image: "/company/litespeed-logo_darkbg.png", alt: "litespeed-logo_darkbg" },
  { image: "/company/MySQL-Logo.png", alt: "MySQL-Logo" },
  { image: "/company/phpmyadmin-hacking.webp", alt: "phpmyadmin-hacking" },
  { image: "/company/Screenshot 2025-01-30 095048.png", alt: "" },
  { image: "/company/Screenshot 2025-01-30 095145.png", alt: "" },
  { image: "/company/Screenshot 2025-01-30 095153.png", alt: "" },
  { image: "/company/Screenshot 2025-01-30 095202.png", alt: "" },
  { image: "/company/Screenshot 2025-01-30 095211.png", alt: "" },
  { image: "/company/Screenshot 2025-01-31 214154.png", alt: "" },
  { image: "/company/Screenshot 2025-01-31 214205.png", alt: "" },
  { image: "/company/solusvm-03.png", alt: "" },
  { image: "/company/was-ist-cpanel.png", alt: "" },
  { image: "/company/WEBZO-LOGO-n.png", alt: "" },
  { image: "/company/Windows-Server-1.png", alt: "" },
];

function Company() {
  return (
    <section
      className="relative w-full bg-gray-300"
      style={{
        backgroundImage: `url('/aboutbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto p-3 lg:p-6 h-full w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2">
        {companyData.map((company, ind) => (
          <div
            key={ind}
            className="bg-white flex items-center justify-center p-2"
          >
            <Image
              src={company?.image}
              width={400}
              height={400}
              alt={company?.alt}
              className="w-16 h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Company;
