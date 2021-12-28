import React from 'react';
import Link from 'next/link';
import Todo from './todo';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      firstName: name,
      lastName: '',
      password: password,
    };

    axios
      .post('https://api.kontenbase.com/query/api/v1/256886a0-0b57-4a10-8387-54099d7f66ed/register', body)
      .then(function (respon) {
        router.push('/');
      })
      .catch(function (eror) {
        alert(eror);
      });
  };

  return (
    <div>
      <form onSubmit={submit} className="max-w-[470px] mx-auto mt-20 ">
        <p className="text-[30px] font-bold">Create Account</p>
        <div className="grid mt-5">
          <label className="text-sm">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border-[1px] py-2 rounded-md pl-4 pr-3 border-gray-300 focus:border-indigo-600 " type="text" />
        </div>
        <div className="grid mt-5">
          <label className="text-sm">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-[1px] py-2 pl-4 pr-3 rounded-md border-gray-300 focus:border-indigo-600 " type="text" />
        </div>
        <div className="grid mt-5">
          <label className="text-sm">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border-[1px] py-2 pl-4 pr-3 rounded-md border-gray-300 focus:border-indigo-600 " type="password" />
        </div>
        <button type="submit" className="mt-5 bg-indigo-600 w-full py-3 rounded-lg text-white font-bold">
          Register
        </button>
        <p className="mt-2">
          Already have an account?
          <Link href="/">
            <a className="cursor-pointer"> Login</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
