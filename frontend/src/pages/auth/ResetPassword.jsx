import { useState } from 'react';
import toast from 'react-hot-toast';

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return toast.error('Passwords do not match');
    }

    toast.success('Password reset successful');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Reset Password
      </h2>

      <form
        onSubmit={submitHandler}
        className="space-y-4"
      >
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;