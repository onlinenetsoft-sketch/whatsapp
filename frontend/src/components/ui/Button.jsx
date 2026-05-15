function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}) {
  const variants = {
    primary:
      'bg-primary text-white hover:opacity-90',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger:
      'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-3 rounded-xl font-medium transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;