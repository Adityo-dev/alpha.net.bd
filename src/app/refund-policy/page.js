import Image from "next/image";
import React from "react";

const refundPolicy = () => {
  return (
    <div className="max-w-[1452px] mx-auto p-6">
        <div>
                 <Image
                    src={"/services/refund-1.jpg"}
                    alt="about_us_Bg"
                    width={2000}
                    height={2000}
                    className="w-full h-64 md:h-80 object-fill"
                 />
        </div>
      <h1 className="text-3xl font-bold mb-4 mt-8 text-[#46494c]">Refund Policies </h1>

      <p className="mb-6 text-[#686e78]">
      If you are dissatisfied with any aspect of our service, please contact our support department, who will attempt to resolve the issue. If the problem cannot be resolved and you remain unsatisfied, you are entitled to a refund within 30 days. Please note that refunds are not available for .COM, .NET, .ORG, or any other domain names, SSL Certificates, Domain Transfer In fees, Domain Transfer Out fees, or any other products or services provided by Dinisoft through third-party companies.
      </p>

      <section className="mb-8 text-[#686e78]">
        <p className="mb-4">
        No refunds are provided for VPS or dedicated servers under any circumstances, except as may be explicitly provided in the Acceptable Use Policy or Terms and Conditions.
        </p>
        <p className="mb-4">
        No refunds will be made if we terminate your hosting or other services due to a violation of our Acceptable Use Policy or any other violation of our Terms and Conditions, except as may be provided therein. Your statutory rights remain unaffected.
        </p>
        <p className="mb-4">
        Credit on your account cannot be refunded and must be used for purchases and renewals.
        </p>
        <p className="mb-4">
        Setup fees are non-refundable.
        </p>
        <p className="mb-4">
        Accounts purchased under a promotion, with or without a promo code, are excluded from the 30 Days money-back guarantee.
        </p>
        <p className="mb-4">
        Excess funds sent to Dinisoft can only be reimbursed in the form of credit and cannot be refunded.
        </p>
        <p className="mb-4">
        All returns and refunds will be credited to the customer’s account within 10 to 45 days. No argument is acceptable in this case.
        </p>
      </section>

   
    </div>
  );
};

export default refundPolicy;
