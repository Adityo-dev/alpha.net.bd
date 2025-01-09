/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // ইমেজ লোডের জন্য HTTPS ব্যবহার
        hostname: "imgur.com", // ডোমেইন নির্দিষ্ট করুন
        port: "", // সাধারণত খালি রাখুন
        pathname: "/**", // সমস্ত পাথকে অনুমোদন দিন
      },
    ],
  },
};

export default nextConfig;
