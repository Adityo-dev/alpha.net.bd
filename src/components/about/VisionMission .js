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
          <h2 className="text-3xl font-semibold mb-4">DianaHost Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is simple and one that combines creativity with the
            latest research and development in the tech world. We are a very
            customer-oriented company, putting our customers first and always
            focusing on gaining and deserving the trust of every single one of
            our customers. So, we listen to our customers, stay at the cutting
            edge of the latest trends in tech research, and constantly develop
            better web hosting products and services which enable us to fulfill
            this vision better and better every day.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col gap-6 md:flex-row-reverse items-center text-center sm:text-start space-y-6 md:space-y-0 ">
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
      </div>
    </div>
  );
};

export default VisionMission;
