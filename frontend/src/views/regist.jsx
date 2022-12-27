import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/stylere.css"

const Register = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  console.log(nama,email,password,role);
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/user', {
        nama: nama,
        email: email,
        password: password,
        role: role,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          setStatus('Akun berhasil dibuat silahkan login');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setEmail('');
    setNama('');
    setPassword('');
    // setTimeout(() => {
    //   navigate('/');
    // }, 5000);
  };

  return (
    <>
      <div className="container">
        <div className="w-80 bg-white rounded-lg shadow-lg">
          <p className="text-center text-2xl font-bold my-5">Register</p>
          <div className="p-5 ">
            <form onSubmit={HandleSubmit}>
              {status && <div className="bg-green-300 p-2 rounded-md text-center font-bold mb-3">{status}</div>}
              <input type="text" placeholder="Masukan Nama" value={nama} onChange={(e) => setNama(e.target.value)} className="input input-bordered  w-full mb-3" autoFocus required />
              <input type="email" placeholder="Masukan Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered  w-full mb-3" required />
              <input type="password" placeholder="Masukan Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered  w-full mb-3" required />
              <select
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="select select-bordered w-full max-w-xs mb-3"
              >
                <option disabled selected>
                  Pilih Status
                </option>
                <option value="user">User</option>
                <option value="Admin">Admin</option>
              </select>
              <br></br>
              <br></br>
              <button className="btn  w-full mb-3">Sign Up</button>
            </form>
            <div className="flex justify-center">
              <p>Sudah Punya Akun?</p>
              <Link className="btn" to={'/login'}> Sign In Disini</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
