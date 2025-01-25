function AdvancedFeaturesTable() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800">
        Advanced Features
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-2 border-gray-400 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <th className="px-6 py-3 text-left font-semibold rounded-tl-lg border-2 border-gray-400">
                cPanel
              </th>
              <th className="px-6 py-3 text-left font-semibold border-2 border-gray-400">Litespeed</th>
              <th className="px-6 py-3 text-left font-semibold border-2 border-gray-400">CloudLinux</th>
              <th className="px-6 py-3 text-left font-semibold rounded-tr-lg border-2 border-gray-400">
                Softaculous
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t-2 border-gray-400 hover:bg-blue-50 transition-all duration-200">
              <td className="px-6 py-4 border-2 border-gray-400">PHP Selector</td>
              <td className="px-6 py-4 border-2 border-gray-400">Imunify360</td>
              <td className="px-6 py-4 border-2 border-gray-400">Python Version Selector</td>
              <td className="px-6 py-4 border-2 border-gray-400">Ruby on Rails</td>
            </tr>
            <tr className="bg-gray-50 border-t-2 border-gray-400 hover:bg-blue-50 transition-all duration-200">
              <td className="px-6 py-4 border-2 border-gray-400">Node.js Version Selector</td>
              <td className="px-6 py-4 border-2 border-gray-400">Imunify360 Security Firewall</td>
              <td className="px-6 py-4 border-2 border-gray-400">One Click Installer</td>
              <td className="px-6 py-4 border-2 border-gray-400">cP Terminal</td>
            </tr>
            <tr className="border-t-2 border-gray-400 hover:bg-blue-50 transition-all duration-200">
              <td className="px-6 py-4 border-2 border-gray-400">Modern Email Feature</td>
              <td className="px-6 py-4 border-2 border-gray-400">Live Code Feature</td>
              <td className="px-6 py-4 border-2 border-gray-400">Daily Backup</td>
              <td className="px-6 py-4 border-2 border-gray-400">24 x 7 Support</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdvancedFeaturesTable;
