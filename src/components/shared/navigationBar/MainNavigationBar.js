// components
import { CircleArrowRight} from "lucide-react";
import BottomNav from "./BottomNav";
import CenterNav from "./CenterNav";
import TopNav from "./TopNav";
// data
const bottomNavData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "domain",
    url: "https://login.dinihost.com/",
  },
  {
    name: "hosting",
    url: "/premium-hosting",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "Super Faster Shared Hosting on BDIX Network",
        name: "Linux Shared Hosting (BDIX)",
        url: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "Tune Your Reseller Hosting",
        name: "Linux Shared Hosting (USA)",
        url: "https://login.dinihost.com/index.php?rp=/store/ssd-reseller-hosting",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Windows Shared Hosting",
        title: "Microsoft Windows Server & ASP.NET support Base Hosting",
        url: "https://login.dinihost.com/index.php?rp=/store/windows-shared-hosting-ssd",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Linux Shared Hosting (USA)",
        title: "Global Network Based High Performance Shared Hosting",
        url: "https://login.dinihost.com/index.php?rp=/store/linux-shared-hosting-usa",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Linux Reseller Hosting (USA)",
        title: "Global Network Based High Performance Reseller Hosting",
        url: "https://login.dinihost.com/index.php?rp=/store/reseller-hosting-usa",
      },

      {
        icon: <CircleArrowRight size={20} />,
        name: "Linux Shared Hosting (Singapore)",
        title: "Global Faster Network Shared Hosting",
        url: "https://login.dinihost.com/index.php?rp=/store/linux-shared-hosting-singapore",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Linux Reseller Hosting (Singapore)",
        title: "Global Faster Network Shared Hosting",
        url: "https://login.dinihost.com/index.php?rp=/store/reseller-hosting-singapore",
      },

    ],
  },
  {
    name: "Vps",
    url: "/ssd-vps",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "Bangladeshi Network Based Vps",
        name: "VPS (BDIX)",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "24 X 7 Support ",
        name: "Managed VPS (BDIX)",
        url: "https://login.dinihost.com/index.php?rp=/store/managed-vps-bdix",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "VPS (USA)",
        title: "High Performance Based VPS",
        url: "https://login.dinihost.com/index.php?rp=/store/ssd-vps-service",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed VPS (USA)",
        title: "99.99% Uptime",
        url: "https://login.dinihost.com/index.php?rp=/store/managed-vps-usa",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "VPS (Singapore)",
        title: "Global Network Based VPS",
        url: "https://login.dinihost.com/index.php?rp=/store/vps-singapore",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed VPS (Singapore)",
        title: "Speed Guarantee on Singapore VPS",
        url: "https://login.dinihost.com/index.php?rp=/store/managed-vps-singapore",
      },
    ],
  },
  {
    name: "dedicated server",
    url: "/dedicated-server",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "Fresh Dedicated Server",
        name: "Dedicated Server (BDIX)",
        url: "https://login.dinihost.com/index.php?rp=/store/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "Friendly Support & Uptime",
        name: "Managed Dedicated Server (BDIX)",
        url: "https://login.dinihost.com/index.php?rp=/store/dedicated-serverbdix",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Dedicated Server (USA)",
        title: "High Resource Data Center",
        url: "https://login.dinihost.com/index.php?rp=/store/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed Dedicated Server (USA)",
        title: "Maximum Trafic Guarantee",
        url: "https://login.dinihost.com/index.php?rp=/store/dedicated-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Dedicated Server (Singapore)",
        title: "Advance Technology DC",
        url: "https://login.dinihost.com/index.php?rp=/store/dedicated-serversingapore",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Managed Dedicated Server (Singapore)",
        title: "T3 Level Data Center",
        url: "https://login.dinihost.com/index.php?rp=/store/dedicated-serversingapore",
      },
    ],
  },
  {
    name: "services",
    url: "#",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "Linux & Windows",
        name: "RDP",
        url: "https://login.dinihost.com/index.php?rp=/store/services",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "Email for Small Medium Business",
        name: "Business Email",
        url: "https://login.dinihost.com/index.php?rp=/store/email-services",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "VPN",
        title: "10 Network based VPN service",
        url: "https://login.dinihost.com/index.php?rp=/store/vpn",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Enterprise Email",
        title: "Enterprise Level Email Service",
        url: "https://login.dinihost.com/index.php?rp=/store/email-services/enterprise-email",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Software Development",
        title: "We can provide all kinds of software",
        url: "https://login.dinihost.com/index.php?rp=/store/software-development",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Google Email (Gsuits)",
        title: "100% Inboxing email service",
        url: "https://login.dinihost.com/index.php?rp=/store/email-services/google-email-gsuits",
      },

      {
        icon: <CircleArrowRight size={20} />,
        name: "Website Design",
        title: "Create you Excellent Website with Us",
        url: "https://login.dinihost.com/index.php?rp=/store/website-design",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Zimbra Mail Server ",
        title: "Open Source License Mail Service",
        url: "https://login.dinihost.com/index.php?rp=/store/email-services/zimbra-mail-server",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Backup Server",
        title: "Storage VPS for backup",
        url: "https://login.dinihost.com/index.php?rp=/store/backup-server",
      },
    ],
  },
  {
    name: "SMS",
    url: "#",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "SMS from Fixt Number",
        name: "Non Masking SMS",
        url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "11 Digit Company Name SMS",
        name: "Masking SMS",
        url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Voice SMS",
        title: "Voice call SMS",
        url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "OTP SMS",
        title: "Legal OTP SMS Only",
        url: "https://login.dinihost.com/index.php?rp=/store/bulk-sms",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "API Documentation",
        title: "",
        url: "https://dinisofbd.com/doc/smsapi.pdf",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Login your sms Portal",
        title: "SMS Login",
        url: "https://sms.dinisoftbd.com/login/",
      },
    ],
  },
  {
    name: "web design",
    url: "https://login.dinihost.com/index.php?rp=/store/website-design",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "We can provide all kinds of software",
        name: "Software Development",
        url: "https://login.dinihost.com/index.php?rp=/store/website-design",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "Create you Excellent Website with Us",
        name: "Website Design",
        url: "https://login.dinihost.com/index.php?rp=/store/website-design",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "e-Commerce Website",
        title: "Wordpress, Laravel, Node.js etc",
        url: "https://login.dinihost.com/index.php?rp=/store/website-design",
      },
    ],
  },
  {
    name: "about Us",
    url: "#",
    info: [
      {
        icon: <CircleArrowRight size={20} />,
        title: "",
        name: "About DINISOFT",
        url: "/about-us",
      },
      {
        icon: <CircleArrowRight size={20} />,
        title: "",
        name: "Privacy Policy",
        url: "https://dinisoftbd.com/wp/pp/",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Refund Policy",
        title: "",
        url: "https://dinisoftbd.com/wp/rfp/",
      },
      {
        icon: <CircleArrowRight size={20} />,
        name: "Terms of Service",
        title: "",
        url: "https://dinisoftbd.com/wp/tos/",
      },
    ],      
  },
  {
    name: "Colocation",
    url: "https://login.dinihost.com/index.php?rp=/store/colocation",
  },
  {
    name: "Affiliate Program",
    url: "https://login.dinihost.com/index.php?rp=/store/affiliate-program",
  },
  {
    name: "Contact",
    url: "/contact-us",
  },
];

function MainNavigationBar() {
  return (
    <main className="space-y-2">
      <TopNav />
      <CenterNav navData={bottomNavData} />
      <BottomNav navData={bottomNavData} />
    </main>
  );
}

export default MainNavigationBar;
