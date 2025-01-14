const tableHeader = [
  "Plan Name",
  "Speed",
  "Memory",
  "Disk Space",
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
                      <td className={tdStyles}>{item?.bandwidth}</td>
                      <td className={tdStyles}>Tk{item?.price}</td>
                      <td className="border px-6 py-4">
                        <button className="bg-green-500 hover:bg-green-600 transition uppercase text-white text-nowrap px-4 py-2 rounded text-sm">
                          Order now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default VpsTable;
