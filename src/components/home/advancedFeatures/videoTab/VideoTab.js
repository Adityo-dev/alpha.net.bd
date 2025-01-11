// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video } from "lucide-react";
// data
const videoData = [
  {
    value: "hosting",
    info: [
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to order only Domain from Web Host BD?",
        url: "",
      },
      {
        name: "How to order only hosting from Web Host BD?",
        url: "",
      },
      {
        name: "How to Open email account from cpanel and login web mail?",
        url: "",
      },
      {
        name: "How Open support ticker from our client area?",
        url: "",
      },
      {
        name: "How to Upload file in cPanel using File Manager?",
        url: "",
      },
      {
        name: "How to add Multiple user in cPanel?",
        url: "",
      },
    ],
  },
  {
    value: "domain",
    info: [
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Upload file in cPanel using File Manager?",
        url: "",
      },
      {
        name: "How Open support ticker from our client area?",
        url: "",
      },
      {
        name: "How to order only hosting from Web Host BD?",
        url: "",
      },
      {
        name: "How to Open email account from cpanel and login web mail?",
        url: "",
      },
      {
        name: "How to order only Domain from Web Host BD?",
        url: "",
      },
      {
        name: "How to add Multiple user in cPanel?",
        url: "",
      },
    ],
  },
  {
    value: "webDevelopment",
    info: [
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
      {
        name: "How to Order Domain Hosting Using Bkash, Nagad Rocket?",
        url: "",
      },
    ],
  },
];

function VideoTab() {
  return (
    <Tabs defaultValue="hosting" className="w-full">
      <TabsList className="grid w-full grid-cols-3 h-12">
        <TabsTrigger value="hosting">Hosting</TabsTrigger>
        <TabsTrigger value="domain">Domain</TabsTrigger>
        <TabsTrigger value="webDevelopment">web Development</TabsTrigger>
      </TabsList>
      {videoData.map((video, ind) => (
        <div key={ind}>
          <TabsContent value={video?.value} className="space-y-1.5">
            {video?.info.map((inf, ind) => (
              <div
                key={ind}
                className="flex items-center justify-between px-2 py-1  border bg-[#e9f2f8]"
              >
                <p className="flex items-center gap-2">
                  <span>
                    <Video
                      color="#0E9AFF"
                      fill="#0E9AFF"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span>{inf?.name}</span>
                </p>
                <button className="border px-4 py-1 bg-[#0E9AFF] text-white rounded-md">
                  Video
                </button>
              </div>
            ))}
          </TabsContent>
        </div>
      ))}
    </Tabs>
  );
}

export default VideoTab;
