import { useState, useEffect } from 'react';
import ApiBackend from '../services/ApiBackend.jsx';
import Title from '../components/title/Title.jsx';
import SimpleAlert from '../components/alerts/SimpleAlert.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiBackend.login({ email, password });
      console.log(response);
      localStorage.setItem('token', response.token);
      setIsLoggedIn(true);
      navigate("/admin");
    } catch (error) {
      console.error('Erro de login:', error);
      setShowAlert(true);
    }
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-LetterColor">
            <Title wordBlue={"Hacer"} wordPink={"Login"} />
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {showAlert && <SimpleAlert icon="error" text="Usuário não autorizado." />}
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-poppinsRegular text-LetterColor">Correo</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border font-poppinsRegular border-gray-300 text-LetterColor sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryColor block w-full p-2.5"
                    placeholder="correo@acogida.es"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-poppinsRegular text-LetterColor">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 font-poppinsRegular  border border-gray-300 text-LetterColor sm:text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-2.5"
                    required
                  />
                </div>
                <button type="submit" className="w-full text-LetterColor bg-tertiaryColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-poppinsBold rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
