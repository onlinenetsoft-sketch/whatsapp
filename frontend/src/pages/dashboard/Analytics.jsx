function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold">
            Message Delivery
          </h2>

          <p className="text-5xl font-bold mt-4 text-primary">
            98%
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold">
            Open Rate
          </h2>

          <p className="text-5xl font-bold mt-4 text-green-500">
            81%
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold">
            Click Rate
          </h2>

          <p className="text-5xl font-bold mt-4 text-blue-500">
            64%
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">
          Weekly Performance
        </h2>

        <div className="h-72 flex items-center justify-center text-gray-400">
          Chart Integration Area
        </div>
      </div>
    </div>
  );
}

export default Analytics;