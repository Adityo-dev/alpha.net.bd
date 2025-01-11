export default function ContactInfo() {
  return (
    <div className="container mx-auto px-4 py-12">
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
            <p className="text-sm text-blue-600">Support@SmartHostBD.com</p>
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
              Angorpota, Dahagram - 5540, Patgram, Lalmonirhat, Dhaka,
              Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
