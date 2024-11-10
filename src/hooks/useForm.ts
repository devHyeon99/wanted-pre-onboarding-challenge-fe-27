import { useState } from 'react';

const useForm = <T extends Record<string, string>>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    handleInputChange,
    setFormData,
  };
};

export default useForm;
