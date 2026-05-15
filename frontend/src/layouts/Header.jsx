import { Link } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('token');

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    window.location.href = '/login';
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-bold text-primary"
      >
        WhatsApp Automation
      </Link>

      <div className="flex items-center gap-4">
        {token ? (
          <button
            onClick={logoutHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;