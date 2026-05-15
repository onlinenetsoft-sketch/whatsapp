function Reports() {
  const reports = [
    'Campaign Summary Report',
    'Delivery Analytics Report',
    'Customer Engagement Report',
    'Revenue Conversion Report',
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Reports
      </h1>

      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 border-b last:border-none"
          >
            <span>{report}</span>

            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;