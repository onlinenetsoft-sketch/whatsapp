import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
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
      toast.success('Registration successful');

      navigate('/login');
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Register
      </h2>

      <form
        onSubmit={submitHandler}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg"
          required
        />

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
          Register
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-primary"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;