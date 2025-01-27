import Image from "next/image";

const tableHeader = [
  "Package",
  "CPU",
  "RAM",
  "Storage",
  "IP",
  "Bandwidth",
  "Price",
  "",
];

const tdStyles =
  "border px-6 py-4 text-sm xl:text-base text-nowrap text-gray-600";

function VpsTable({ tableData }) {
  return (
    <main className="bg-[#F5F7FA]">
      <section className="container mx-auto py-12 px-3 lg:px-6 space-y-6">
        {tableData.map((table, ind) => (
          <div
            key={ind}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <h2 className="text-2xl font-bold bg-gray-100 p-4 border-b border-gray-300">
              {table?.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="text-left bg-gray-100">
                    {tableHeader.map((head, ind) => (
                      <th
                        key={ind}
                        className="border px-6 py-3 text-base md:text-lg font-medium text-nowrap text-gray-700"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table?.info.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className={tdStyles}>{item?.planName}</td>
                      <td className={tdStyles}>{item?.speed}</td>
                      <td className={tdStyles}>{item?.memory}</td>
                      <td className={tdStyles}>{item?.diskSpace}</td>
                      <td className={tdStyles}>{item?.ip}</td>
                      <td className={tdStyles}>{item?.bandwidth}</td>
                      <td className={tdStyles}>Tk{item?.price}</td>
                      <td className="border px-6 py-4">
                        {item?.url ? (
                          <a
                            href={item.url}
                            className="bg-green-500 hover:bg-green-600 transition uppercase text-white text-nowrap px-4 py-2 rounded text-sm"
                          >
                            Order now
                          </a>
                        ) : (
                          <button
                            disabled
                            className="bg-gray-400 text-white uppercase px-4 py-2 rounded text-sm"
                          >
                            Not available
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="p-4 text-sm text-gray-600 bg-gray-100 text-center">
              For managed VPS 2500/- Will be added & USA Location 20% less or Singapore Location will be same
              </p>
            </div>
          </div>
        ))}

        {/* Image */}
              <div>
                  <Image
                   src={"/opareting-image.jpg"}
                   width={1000}
                   height={1000}
                   alt={"VPS"}
                   className="w-full h-full object-cover"
                  />
             </div>
      </section>
      
    </main>
  );
}

export default VpsTable;
