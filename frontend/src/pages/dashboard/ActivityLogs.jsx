function ActivityLogs() {
  const logs = [
    'User Admin logged in',
    'Campaign sent to 1,200 contacts',
    'Template approved by Meta',
    'Subscription upgraded to Professional',
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Activity Logs
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="space-y-5">
          {logs.map((log, index) => (
            <div
              key={index}
              className="border-b pb-4 last:border-none"
            >
              <p>{log}</p>

              <span className="text-sm text-gray-400">
                {new Date().toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityLogs;