import { useState } from 'react';
import { Button, Input } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { signUp } from '../../api/auth';
import { validateEmail, validatePassword } from '../../utils/vaildators';
import toast from 'react-hot-toast';

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { formData, handleInputChange } = useForm({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await signUp(formData.email, formData.password);
      toast.success('회원가입 완료', { duration: 2000, id: 'sign-up-success' });
      navigate('/sign-in');
    } catch (error) {
      toast.error(`${error}`, { duration: 2000, id: 'sign-up-error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <h1 className='mb-6 text-2xl font-bold text-center'>Todo List</h1>

      <form
        onSubmit={handleSubmit}
        className='w-full max-w-sm space-y-4'
        noValidate
        aria-label='회원가입 양식'
      >
        <fieldset disabled={isLoading}>
          <legend className='sr-only'>회원가입 정보 입력</legend>

          <div className='space-y-8'>
            <Input
              type='email'
              label='이메일'
              id='signUp-email'
              name='email'
              placeholder='이메일'
              value={formData.email}
              onChange={handleInputChange}
              aria-required='true'
              error={
                validateEmail(formData.email)
                  ? ''
                  : '이메일 형식에 맞게 입력해주세요'
              }
            />
            <Input
              type='password'
              label='비밀번호'
              id='signUp-password'
              name='password'
              placeholder='비밀번호'
              value={formData.password}
              onChange={handleInputChange}
              aria-required='true'
              error={
                validatePassword(formData.password)
                  ? ''
                  : '비밀번호 8자리 이상 입력해주세요'
              }
            />
            <Input
              type='password'
              label='비밀번호 확인'
              id='signUp-password-check'
              name='passwordCheck'
              placeholder='비밀번호 확인'
              value={formData.passwordCheck}
              onChange={handleInputChange}
              aria-required='true'
              error={
                formData.password != formData.passwordCheck
                  ? '비밀번호가 일치하지 않습니다'
                  : ''
              }
            />
          </div>
        </fieldset>

        <div className='space-y-4'>
          <Button
            type='submit'
            label={isLoading ? '가입 중...' : '회원가입'}
            aria-label='회원가입 완료'
            disabled={
              formData.email == '' ||
              formData.password == '' ||
              formData.passwordCheck == '' ||
              formData.password != formData.passwordCheck ||
              isLoading
            }
          />
          <Link
            to='/sign-in'
            className='block w-full py-2 font-semibold text-center text-white transition bg-gray-500 rounded hover:bg-gray-600 outline-gray-600 disabled:opacity-50'
            tabIndex={isLoading ? -1 : 0}
          >
            뒤로가기
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
