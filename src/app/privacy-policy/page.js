import Image from "next/image";
import Link from "next/link";
import React from "react";

const privacyPolicy = () => {
  return (
    <div className="max-w-[1452px] mx-auto p-6">
        <div>
                 <Image
                    src={"/services/privacy-policy.jpg"}
                    alt="about_us_Bg"
                    width={2000}
                    height={2000}
                    className="w-full h-64 md:h-80 object-fill"
                 />
        </div>
      <h1 className="text-3xl font-bold mb-4 mt-8 text-[#46494c]">Privacy Policy</h1>

      <p className="mb-6 text-[#686e78]">
        Your privacy is very important to us, below explains the information we collect from you, what we do with that information and our information security policy.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Your Information</h2>
        <p className="mb-4 text-[#686e78]">
        When you sign up for any of our services we will ask you to provide contact information for your convenience as well as legal reasons. This will include name, home address, e-mail addresses and payment details (credit or debit card and PayPal). If you need support our staff may need to know information to solve the problem such as operating system, browser software and editing software. When you visit this website we do record certain information using Google Analytics such as your location, browser version, ip address, screen resolution, operating system and flash support. This is so we can continue to provide the most convenient web site for all our visitors. Our website is protected by a Secure Sockets Layer (SSL) and verified by Equifax. This helps prevent eavesdropping on our website, just look for the padlock.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">How Your Information Is Used</h2>
        <ul className="list-disc list-inside mb-4 text-[#686e78]">
          <p className="mb-4 ">
          We will use your personal identifiable information in the following ways.
          </p>
          <li>For payment purposes and to provide convenient and targeted support.</li>
         <li>To contact you and announce special offers, general announcements and news. Please note you can opt out of receiving these emails at anytime by following the instructions at the bottom of the e-mail.</li>
         <li>To improve our service and the marketing of our service. This could include using your demographic location to improve targeting of our website and customize your visit.</li>
        </ul>
        <p className="mb-4 text-[#686e78]">
        We will NEVER provide your personally identifiable information to any persons other than A law enforcement or regulatory agency at their request, third parties who provide services on our behalf such as payment processing, only if they agree not to miss use this information.
        </p>
        <p className="mb-4 text-[#686e78]">
          We do not under any circumstances apart from the above give away or sell your information to any third parties.
        </p>
        <p className="mb-4 text-[#686e78]">
        Your personal information is safe with us, your information is safely encrypted using SSI. Our service is not available to anyone under the age of 13, never will we intentionally maintain information about anyone under the age of 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Cookies</h2>
        <p className="mb-4 text-[#686e78]">
        A cookie is a small text file that is stored on a users computer for record-keeping purposes. We use cookies on this site. We do not link the information we store in cookies to any personally identifiable information you submit while on our site. We use both session ID cookies and persistent cookies. We use session cookies to make it easier for you to navigate our site. A session ID cookie expires when you close you browser. A persistent cookie remains on your hard drive for an extended period of time much like the cookie used for our affiliate program. You can remove persistent cookies by following directions provided in your Internet browsers ‘help’ file. We set a persistent cookie to store your passwords, so you do not have to enter it more than once. Persistent cookies also enable us to track and target the interests of our users to enhance the experience on our site. If you reject cookies, you may still use our site, but you will be asked to enter your username and password again every time you closed your browser or your session has timed out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Log Files</h2>
        <p className="mb-4 text-[#686e78]">
        As is true of most Web sites, we gather certain information automatically and store it in log files. This information includes Internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and click stream data. We use this information, which does not identify individual users, to analyze trends, to administer the site, to track users movements around the site and to gather demographic information about our user base as a whole. We do not link this automatically-collected data to personally identifiable information. IP addresses are tied to personally identifiable information to prevent and block abusers to keep using our services such as members who violates our terms of service. We use a third-party tracking service that uses cookies and log files to track non-personally identifiable information about visitors to our site in the aggregate of usage and volume statistics to determine how our users navigate through our website and to know how many users are using our services demographically. We use the information you provide about yourself or others to complete the transaction for which it is intended. This may include administering a service such as registration, email, forum, etc., or contacting you if you have indicated your permission to do so by agreeing to accept further notification and service announcement from us on your member profile page. You can choose to opt-out from receiving any further notification from your member profile page. We do not share this information with outside parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Surveys</h2>
        <p className="mb-4 text-[#686e78]">
        Upon using our free services, you may be requested to participate in our periodic internal surveys that are conducted by Dinisoft to determine your personal interests. These surveys are strictly voluntary. The data collected through these surveys will only be used to improve our products and services and will never be sold to any third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Communications From The Site</h2>
        <p className="mb-4 text-[#686e78]">
        When we receive email, we use return email addresses to reply with the information requested. Such addresses are not used for any other purpose and are not shared with outside parties. When supplying contact information to Dinisoft you can indicate your preference if you would like to be contacted to receive information and updates about our services by logging in to your Dinisoft account, going to your member profile page and choose not to receive any further notification emails from us or other information pertaining to Dinisoft. Information you submit to us will not be used for this purpose unless you indicate this as your preference. When supplying contact information to Dinisoft you can indicate your preference on your members profile page to participate in the Dinisoft newsletter. You will receive a confirmation email from us when placing an order on our site and paying through PayPal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Newsletter</h2>
        <p className="mb-4 text-[#686e78]">
        We provide you the opportunity to ‘opt-in’ and ‘opt-out’ of our newsletter at any time. Our newsletter is sent every month so it will certainly contain allot of useful information and any offers we may have. If you no longer wish to receive our newsletter and promotional communications, you may opt-out of receiving them at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Information Sharing and Disclosure</h2>
        <p className="mb-4 text-[#686e78]">
        We collect information from our website visitors using <Link className="text-[#004080]" href={"https://www.google.com/analytics/"}>Google Analytics</Link>. We use this information to better design our Web site and services. This information is never shared with any third party. We do not link aggregate user data with personally identifiable information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Accessing and Correcting Your Information</h2>
        <p className="mb-4 text-[#686e78]">
          You can access and update your information by logging into your account
          and navigating to the My Details section. Requests for corrections can
          be made by contacting us with credible proof of error.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Specific Terms and Conditions</h2>
        <p className="mb-4 text-[#686e78]">
          Email correspondence via our service is private. We will not monitor or
          disclose contents unless required by law or to enforce the Service
          Agreement. By using our service, you agree to our technical processing
          terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Security</h2>
        <p className="mb-4 text-[#686e78]">
          We follow industry standards to protect personal information. While we
          strive to safeguard your data, no transmission method is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Links To Other Sites</h2>
        <p className="mb-4 text-[#686e78]">
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices. We encourage you to review
          their privacy policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#46494c]">Changes To This Privacy Statement</h2>
        <p className="mb-4 text-[#686e78]">
          Updates to our privacy policy will be posted on this page. Significant
          changes will be communicated via email or site notices. Please review
          this policy periodically.
        </p>
      </section>
    </div>
  );
};

export default privacyPolicy;
