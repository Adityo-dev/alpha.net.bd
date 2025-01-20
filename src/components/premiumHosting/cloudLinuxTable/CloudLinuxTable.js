function CloudLinuxTable() {
  return (
    <section className="p-10 bg-gradient-to-r from-[#75b12c] to-[#00b159] text-white">
      <div className="container mx-auto px-3 lg:px-6 flex items-center gap-6">
        <div className="w-1/4">
          <h1 className="text-2xl font-semibold mb-4">
            CloudLinux (<span className="text-[#ffff00]">LVE Limits</span>)
          </h1>
          <p>
            The CloudLinux OS Lightweight Virtualized Environment is a
            kernel-level technology that isolates each tenant into their own
            environment and provides them with the amount of resources (CPU, IO,
            memory, processes, etc.) that can be used – specific to each
            individual customer.
          </p>
        </div>
        <div className="overflow-x-auto w-3/4">
          <table className="table-auto w-full border-collapse border">
            <thead>
              <tr className="">
                <th className="border px-4 py-2 text-left"></th>
                <th className="border px-4 py-2">PREMIUM 50</th>
                <th className="border px-4 py-2">PREMIUM 100</th>
                <th className="border px-4 py-2">PREMIUM PRO</th>
                <th className="border px-4 py-2">VPS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  CPU Cores
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  3 vCPU
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  4 vCPU
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  6 vCPU
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  3 vCPU
                </td>
              </tr>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  Memory (RAM)
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  3 GB
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  4 GB
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  6 GB
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  6 GB
                </td>
              </tr>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  I/O Usage
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  50MB/s
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  100MB/s
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  200MB/s
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  NO LIMIT
                </td>
              </tr>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  IOPS
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  2024
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  3024
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  4024
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  NO LIMIT
                </td>
              </tr>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  Entry Processes
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  50
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  100
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  150
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  NO LIMIT
                </td>
              </tr>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  NPROC
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  150/nPROC
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  200/nPROC
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  250/nPROC
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  NO LIMIT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CloudLinuxTable;
