import React from 'react';

interface InputProps {
  type: 'email' | 'password' | 'text';
  label: string;
  id: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

const Input = ({
  type,
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  className,
}: InputProps) => {
  const style = className;
  return (
    <div className='relative w-full max-w-sm'>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={onChange}
        className={`p-2 w-full border border-gray-300 rounded outline-gray-400 ${style}`}
        required
      />
      {error && (
        <span className='absolute left-0 text-sm text-red-500 -bottom-5'>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
