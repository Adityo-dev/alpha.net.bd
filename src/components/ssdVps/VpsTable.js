const tableHeader = [
  "Plan Name",
  "Speed",
  "Memory",
  "Disk Space",
  "Bandwidth",
  "Price",
  "",
];

function VpsTable({ tableData }) {
  return (
    <main className="bg-[#F5F7FA]">
      <section className="container mx-auto py-16 px-6 relative space-y-10">
        {tableData.map((table, ind) => (
          <div key={ind} className=" relative bg-white ">
            <h2 className="text-2xl font-bold  p-4 border border-b-0">
              {table?.title}
            </h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="text-left">
                  {tableHeader.map((head, ind) => (
                    <th key={ind} className="border px-6 py-3">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table?.info.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : null}
                  >
                    <td className="border px-6 py-3">{item?.planName}</td>
                    <td className="border px-6 py-3">{item?.speed}</td>
                    <td className="border px-6 py-3">{item?.memory}</td>
                    <td className="border px-6 py-3">{item?.diskSpace}</td>
                    <td className="border px-6 py-3">{item?.bandwidth}</td>
                    <td className="border px-6 py-3">Tk{item?.price}</td>
                    <td className="border px-6 py-3">
                      <button className="bg-green-500 uppercase text-white px-4 py-2.5 rounded">
                        Order now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </main>
  );
}

export default VpsTable;
