import Image from "next/image";

function Banner() {
  return (
    <section>
      <div className="container mx-auto px-3 lg:px-6 flex flex-wrap items-center gap-4 justify-center sm:justify-between py-6">
        <div className="w-full lg:w-3/4 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
          <Image
            src={"/speed.png"}
            width={400}
            height={400}
            alt="Speed Guarantee"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain"
          />
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Premium Shared Web Hosting in Bangladesh
            </h2>
            <p className="leading-6 sm:leading-7 text-sm sm:text-base mt-4">
              Premium web hosting is one of the most popular web hosting in
              Bangladesh. Due to the massive advancement of digitalization and
              e-commerce company expansion, people are looking for the best web
              hosting for their website. In this hosting package, we are
              offering the most feature-enriched premium web hosting.
            </p>
          </div>
        </div>
        <div className="w-auto mx-auto">
          <Image
            src={"/money-back-guarantee-1.png"}
            width={400}
            height={400}
            alt="Money Back Guarantee"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
