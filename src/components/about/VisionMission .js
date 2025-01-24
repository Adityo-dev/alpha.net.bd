import React from "react";
import Image from "next/image";

const VisionMission = () => {
  return (
    <div className="container mx-auto px-3 lg:px-6 py-8 space-y-12">
      {/* Vision Section */}
      <div className="flex flex-col justify-center gap-6 md:flex-row items-center text-center sm:text-start space-y-6 md:space-y-0 ">
        <div className="flex-shrink-0">
          <Image
            src="/about_image1.jpg"
            alt="Mission Icon"
            width={150}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
          It is Hostmights mission to deliver excellence in all levels of services to our clients. To work hard everyday because we love what we do with a passion. To be a global leader in providing world class facilities with the highest level of uptime. To have the highest level of integrity and work ethic. We are passionate about bringing you the latest innovations and technology. We aim to always update our software, servers, platforms and systems to help you stay ahead of the competition.   
          </p>
        </div>
      </div>

      {/* Mission Section */}
      {/* <div className="flex flex-col gap-6 md:flex-row-reverse items-center text-center sm:text-start space-y-6 md:space-y-0 ">
        <div className="flex-shrink-0">
          <Image
            src="/about_image2.jpg"
            alt="Vision Icon"
            width={150}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold my-4">DianaHost Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple. To provide trouble-free, customer-focused,
            reliable, and affordable web hosting services. We aim to continue
            operating a profitable web hosting company that makes customers
            happy. We back our rock-solid hosting solutions and top-notch
            infrastructure with the best customer service and technical support.
            A successful business needs to be committed to client solutions,
            innovation, creativity, and a warm, caring attitude toward all of
            our customers’ business needs.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default VisionMission;
