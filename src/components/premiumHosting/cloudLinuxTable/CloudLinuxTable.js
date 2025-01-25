function CloudLinuxTable() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#166195] to-[#2280c3] text-white">
      <div className="container mx-auto px-3 lg:px-6 flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/4">
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
        <div className="overflow-x-auto  w-full lg:w-3/4">
          <table className="table-auto w-full border-collapse border overflow-x-auto">
            <thead>
              <tr className="">
                <th className="border px-4 py-2 text-left"></th>
                <th className="border px-4 py-2 text-nowrap">Basic</th>
                <th className="border px-4 py-2 text-nowrap">Standard</th>
                <th className="border px-4 py-2 text-nowrap">Business</th>
                <th className="border px-4 py-2 text-nowrap">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  CPU Cores
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  1 vCPU
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  1 vCPU
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  2 vCPU
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  2 vCPU
                </td>
              </tr>
              <tr>
                <td className="border border-white text-black text-lg text-right px-4 py-2">
                  Memory (RAM)
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  1 GB
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  1 GB
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  2 GB
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  2 GB
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
                  1024
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  1024
                </td>
                <td className="border border-white px-4 py-2 text-center">
                  2024
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
                  50
                </td>
                <td className="border border-white px-4 py-2 text-center">
                100
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
