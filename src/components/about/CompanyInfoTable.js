const CompanyInfoTable = () => {
  const companyData = {
    "Name Of Company": "DianaHost",
    "Year Established": "2014",
    "Type Of Company": "Private Company",
    "Business Function": "Web, Software Development & Marketing",
    Founder: "Md. Oliar Rahman Khan Liton",
    CEO: "Khan Mohammad Nakib",
    "Corporate Address":
      "4th Floor, House # 6/20, Block # E, Lalmatia Housing State, Satmasjid Road, Dhanmondi, Dhaka-1207, Bangladesh.",
    "Members Of": [
      "Asia-Pacific Network Information Centre",
      "Bangladesh Association of Software and Information Services (BASIS)",
      "e-Commerce Association of Bangladesh (e-CAB)",
      "Bangladesh Association of Contact Center & Outsourcing",
      "Bangladesh Domain Hosting Provider Association (BDHPA)",
    ],
    Departments: [
      "Software Development",
      "Website Development",
      "Digital Marketing",
      "Ecommerce",
      "Business Development",
      "Management",
    ],
    "Web Address": "www.dianahost.com",
    Skype: "Litonphone",
    "Company Hotline": "+8809638 339900",
    "Company email": "support@dianahost.com.bd",
    "Area Of Expertise": [
      "Website Development",
      "Software Development",
      "Email Marketing",
      "SMS Marketing",
      "Graphics Design",
      "Web Hosting",
      "Domain Registration",
    ],
    "Market Coverage": [
      "Bangladesh",
      "USA",
      "UK",
      "Canada",
      "Australia",
      "Saudia Arabia",
      "Dubai",
      "India",
    ],
    Motto: "Ultra Fast Web Hosting & IT Solutions",
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">At A Glance</h1>
      <table className="min-w-full table-auto border-collapse  text-sm">
        <tbody>
          {Object.entries(companyData).map(([key, value]) => (
            <tr key={key} className="border-b border-t border-gray-300">
              <td className="py-4 pr-8 font-medium text-[#444444] ">{key}</td>
              <td className="py-4 px-6 text-[#444444]">
                {Array.isArray(value) ? (
                  <ul className="list-none list-inside">
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyInfoTable;
