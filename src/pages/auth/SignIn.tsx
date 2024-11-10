import { Button, Input } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { signIn } from '../../api/auth';
import { setToken } from '../../utils/storage';
import toast from 'react-hot-toast';

const SignIn = () => {
  const navigate = useNavigate();

  const { formData, handleInputChange } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn(formData.email, formData.password);
      toast.success('로그인 성공', { duration: 2000, id: 'sign-in-success' });
      setToken(response.token);
      navigate('/');
    } catch (error) {
      toast.error(`${error}`, { duration: 2000, id: 'sign-up-error' });
    }
  };
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <h1 className='mb-6 text-2xl font-bold text-center'>Todo List</h1>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-sm space-y-4'
        noValidate
        aria-label='로그인 폼'
      >
        <Input
          type='email'
          label='이메일'
          id='signIn-email'
          name='email'
          placeholder='이메일'
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type='password'
          label='비밀번호'
          id='signIn-password'
          name='password'
          placeholder='비밀번호'
          value={formData.password}
          onChange={handleInputChange}
          className='mt-2'
        />
        <Button type='submit' label='로그인' />
        <Link
          to='/sign-up'
          className='block w-full max-w-sm py-2 mt-4 font-semibold text-center text-white transition bg-gray-500 rounded hover:bg-gray-600 outline-gray-600'
        >
          회원가입
        </Link>
      </form>
    </main>
  );
};

export default SignIn;
