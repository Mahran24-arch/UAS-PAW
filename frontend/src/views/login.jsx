import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { LoginUser, reset, getMe } from '../features/authSlice';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSucces, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSucces) {
      dispatch(getMe());
      axios.get('http://localhost:5000/me').then((response) => {
        setRole(response.data.role);
      });

      if (role === 'admin') {
        navigate('/dashboard');
      }
      if (role === 'user') {
        navigate('/index');
      }
    }
    dispatch(reset());
  }, [user, isSucces, dispatch, navigate]);
  const Auth = (e) => {
    e.preventDefault();

    dispatch(LoginUser({ email, password }));
  };

  console.log(role);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-white to-[#e0d0c1] w-screen flex justify-center items-center">
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg">
          <p className="text-center text-2xl font-bold my-5">Login</p>
          <div className="p-5 ">
            <form onSubmit={Auth}>
              {isError && <p className="bg-red-300 p-3 rounded mb-3 font-bold text-center">{message}</p>}
              <input type="text" placeholder="Masukan Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered  w-full mb-3" autoFocus required />
              <input type="password" placeholder="Masukan Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered  w-full mb-3" required />

              {isLoading ? (
                <button type="submit" disabled className="btn w-full mb-3">
                  Loading
                </button>
              ) : (
                <button type="submit" className="btn w-full mb-3">
                  Sign In
                </button>
              )}
            </form>
            <div className="flex justify-center">
              <p>Belum punya akun? Daftar Sekarang</p>
              <Link to={'/regist'}>
                <small className="underline text-sm ml-2">Sign Up Disini</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
