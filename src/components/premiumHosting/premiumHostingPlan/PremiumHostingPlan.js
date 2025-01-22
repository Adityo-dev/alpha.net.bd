import {
  ArrowRightFromLine,
  Clock7,
  HardDrive,
  MailOpen,
  Microchip,
  Search,
  ShieldX,
  Snowflake,
  Volleyball,
  Wifi,
} from "lucide-react";

function PremiumHostingPlan({ plans }) {
  return (
    <main className="container mx-auto px-3 lg:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        PREMIUM HOSTING PLAN
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
        {plans.map((plan, ind) => (
          <div key={ind}>
            <div>
              <div>
                {plan?.prm && (
                  <p className="flex items-center justify-center gap-6 uppercase mb-2">
                    <span className="bg-[#166195] text-white font-semibold px-2 ">
                      {plan?.prm}
                    </span>
                    <span className="text-[#ff0000]">1 YEARS</span>
                    <span className="bg-[#166195] text-white font-semibold px-2 ">
                      {plan?.price * 12}
                    </span>
                  </p>
                )}
              </div>
              {plan?.powerful && (
                <p className="w-3/5 mx-auto text-center bg-[#2280c3] text-white font-semibold py-1">
                  {plan?.powerful}
                </p>
              )}
            </div>
            <div className="border-l-8 rounded-t-2xl border-[#166195]">
              <div className="bg-[#166195] text-white p-6 rounded-t-xl">
                <h2 className="text-3xl uppercase font-semibold text-center">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold text-center my-4 ">
                  <sup>TK </sup>
                  <span className="text-6xl">{plan.price}</span>
                  <sub className="text-xl">/mo</sub>
                </p>
              </div>

              <div className="border-r">
                {plan?.prm && (
                  <div className="space-y-2 p-6">
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Search size={16} />
                      <span>{plan?.features?.hosting}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <HardDrive size={16} />
                      <span>{plan?.features?.storage}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Wifi size={16} />
                      <span>{plan?.features?.bandwidth}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Snowflake size={16} />
                      <span>{plan?.features?.subDomain}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <MailOpen size={16} />
                      <span>{plan?.features?.emailAccounts}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <ArrowRightFromLine size={16} />
                      <span>{plan?.features?.sshAccess}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Clock7 size={16} />
                      <span>{plan?.features?.backup}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Volleyball size={16} />
                      <span>{plan?.features?.support}</span>
                    </p>
                  </div>
                )}

                {plan?.powerfulFeatures && (
                  <div className="space-y-2 p-6">
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Microchip size={16} />
                      <span>{plan?.powerfulFeatures?.processor}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Microchip size={16} />
                      <span>{plan?.powerfulFeatures?.ram}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <HardDrive size={16} />
                      <span>{plan?.powerfulFeatures?.storage}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Wifi size={16} />
                      <span>{plan?.powerfulFeatures?.bandwidth}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Snowflake size={16} />
                      <span>{plan?.powerfulFeatures?.dedicatedIP}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <Snowflake size={16} />
                      <span>{plan?.powerfulFeatures?.rootAccess}</span>
                    </p>
                    <p className="flex items-center gap-2 border-b pb-2.5">
                      <MailOpen size={16} />
                      <span>{plan?.powerfulFeatures?.deliveryTime}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ShieldX size={16} />
                      <span>{plan?.powerfulFeatures?.moneyback}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button className="w-full bg-[#2280c3] uppercase text-white font-semibold py-4 border-s-8 border-[#F5F5F5]">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PremiumHostingPlan;
