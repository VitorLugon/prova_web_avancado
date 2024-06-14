import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/context/AuthContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, authError } = useContext(AuthContext);
  const [formError, setFormError] = useState<string | null>(null);

  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      await login(data);
    } catch (error) {
      setFormError('Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
        <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor="username" className="mb-2">
            Usuário
          </label>
          <input
            {...register('username')}
            type="text"
            id="username"
            className="px-3 py-2 border rounded-md mb-4"
            placeholder="username"
          />

          <label htmlFor="password" className="mb-2">
            Senha
          </label>
          <input
            {...register('password')}
            type="password"
            id="password"
            className="px-3 py-2 border rounded-md mb-4"
            placeholder="password"
          />

          <input
            type="submit"
            value="Acessar"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
        {formError && <p className="text-red-500 mt-2">{formError}</p>}
        {authError && <p className="text-red-500 mt-2">{authError}</p>}
      </div>
    </div>
  );
};

export default Login;
