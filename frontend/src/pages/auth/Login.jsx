import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      localStorage.setItem('token', 'demo_token');

      localStorage.setItem(
        'user',
        JSON.stringify({
          role: 'ADMIN',
        })
      );

      toast.success('Login successful');

      navigate('/dashboard');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Login
      </h2>

      <form
        onSubmit={submitHandler}
        className="space-y-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link
          to="/forgot-password"
          className="text-primary"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default Login;