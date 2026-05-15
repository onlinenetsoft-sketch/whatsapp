import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Automate WhatsApp Marketing &
          Customer Engagement
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Send campaigns, manage inbox,
          automate conversations and grow your
          business using one powerful platform.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Link
            to="/register"
            className="bg-primary text-white px-8 py-4 rounded-xl text-lg"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-gray-300 px-8 py-4 rounded-xl text-lg"
          >
            Login
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h3 className="text-2xl font-semibold mb-4">
            Broadcast Campaigns
          </h3>

          <p className="text-gray-600">
            Send bulk WhatsApp campaigns with
            analytics and scheduling.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h3 className="text-2xl font-semibold mb-4">
            Shared Team Inbox
          </h3>

          <p className="text-gray-600">
            Manage customer conversations with
            your support team.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h3 className="text-2xl font-semibold mb-4">
            AI Chatbot Automation
          </h3>

          <p className="text-gray-600">
            Automate replies and lead generation
            using AI chatbots.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Landing;