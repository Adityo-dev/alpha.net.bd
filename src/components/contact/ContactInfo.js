"use client";
export default function ContactInfo() {
  const loadTawkTo = () => {
    if (window.Tawk_API) return; // Avoid loading multiple times
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/55a81f9b84d307454c027a34/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  };

  return (
    <div className="container mx-auto px-3 lg:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Mail Us Card */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Mail Us
            </h3>
            <p className="mb-2 text-sm text-gray-600">
              Say something to start a live chat
            </p>
            <a
              href="mailto:sales@dinisoftbd.com"
              className="text-sm text-blue-600"
            >
              sales@dinisoftbd.com
            </a>
            <a href="tel:+8801788800151" className="text-sm text-blue-600">
              +8801788800151
            </a>
          </div>
        </div>

        {/* 24/7 Live Chat Card */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 18v-6a9 9 0 0118 0v6m-18 0h18M6 21h12a2 2 0 002-2v-1H4v1a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              24/7 Live Chat
            </h3>
            <p className="text-sm text-gray-600">
              We endeavour to answer all enquiries within 24 hours on business
              days.
            </p>
            <button
              className="flex items-center gap-2 font-semibold hover:bg-blue-500 hover:text-white text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-lg mt-2 transition-all duration-500"
              onClick={loadTawkTo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2C6.48 2 2 6.03 2 11c0 2.2 1 4.21 2.65 5.74L3 21l4.48-1.88C8.62 20.36 10.24 21 12 21c5.52 0 10-4.03 10-9s-4.48-9-10-9zm0 16c-1.45 0-2.81-.4-3.98-1.09L5 18l.91-2.85C4.37 13.93 4 12.51 4 11c0-4.07 3.59-7 8-7s8 2.93 8 7-3.59 7-8 7z" />
              </svg>
              Live Chat
            </button>
          </div>
        </div>

        {/* Visit Us Card */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Visit Us
            </h3>
            <p className="text-sm text-gray-600">
              Modern Moor, (Mutual Trust Bank Market), Ghashiapara Road,
              Dinajpur, Banglaedesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
