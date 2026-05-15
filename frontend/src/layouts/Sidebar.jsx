import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-dark text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-10">
        WA Automation
      </h2>

      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="hover:text-primary"
        >
          Dashboard
        </Link>

        <Link
          to="/admin"
          className="hover:text-primary"
        >
          Admin
        </Link>

        <Link
          to="/campaigns"
          className="hover:text-primary"
        >
          Campaigns
        </Link>

        <Link
          to="/analytics"
          className="hover:text-primary"
        >
          Analytics
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;