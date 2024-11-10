import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  label: string;
  variant?: 'primary' | 'secondary';
}

const Button = ({
  type,
  label,
  variant = 'primary',
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'mt-4 w-full max-w-sm text-white font-semibold py-2 rounded transition';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 outline-blue-600'
      : 'bg-gray-500 hover:bg-gray-600 outline-gray-600';
  const disabledClasses = 'bg-gray-400 cursor-not-allowed';

  return (
    <button
      type={type}
      className={`${baseClasses} ${
        disabled ? disabledClasses : variantClasses
      }`}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
