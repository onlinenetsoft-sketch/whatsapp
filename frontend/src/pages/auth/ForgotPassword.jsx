import { useState } from 'react';
import toast from 'react-hot-toast';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    toast.success('Password reset link sent');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Forgot Password
      </h2>

      <form
        onSubmit={submitHandler}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;