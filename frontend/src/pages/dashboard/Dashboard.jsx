import {
  MessageSquare,
  Users,
  BarChart3,
  Send,
} from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      title: 'Total Messages',
      value: '125,430',
      icon: <MessageSquare size={28} />,
    },
    {
      title: 'Active Contacts',
      value: '8,240',
      icon: <Users size={28} />,
    },
    {
      title: 'Campaigns',
      value: '124',
      icon: <Send size={28} />,
    },
    {
      title: 'Conversion Rate',
      value: '74%',
      icon: <BarChart3 size={28} />,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back to your automation panel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Campaign Activity
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>Summer Sale Campaign</span>

            <span className="text-green-600">
              Completed
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Festival Offers</span>

            <span className="text-yellow-500">
              Running
            </span>
          </div>

          <div className="flex justify-between">
            <span>Lead Follow-up Sequence</span>

            <span className="text-blue-500">
              Scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;