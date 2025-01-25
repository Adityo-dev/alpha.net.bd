const CompanyInfoTable = () => {
  const companyData = {
    "Name Of Company": "Dinisoft BD.",
    "Year Established": "2007",
    "Type Of Company": "Private Company",
    "Business Function": "Web Hosting, Software Development & Marketing",
    Founder: "Monju Ara",
    CEO: "Monju Ara",
    "Corporate Address":
      "Modern Moor (MTB Bank Market) Ghashipara Road, Dinajpur, Bangladesh.",
    "Members Of": [
     " Chamber of commerce & industries", 
      "Bangladesh Association of Software and Information Services (BASIS)",
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
    "Web Address": "www.dinisoftbd.com",
    Skype: "dinisoft",
    "Company Hotline": "+8801788800151",
    "Company email": "sales@dinisoftbd.com",
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
    DataCenter: "Bangladesh (BDIX), India, USA, UK, Germany & Singapore",


  };

  return (
    <div className="container mx-auto px-3 lg:px-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">At A Glance</h1>
      <table className="min-w-full table-auto border-collapse text-sm">
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
