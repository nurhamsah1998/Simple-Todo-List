import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Register from './register';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [value, setvalue] = useState('');
  const [value2, setvalue2] = useState('');
  const router = useRouter();

  function submit(f) {
    f.preventDefault();

    const body = {
      email: value,
      password: value2,
    };
    axios
      .post('https://api.kontenbase.com/query/api/v1/256886a0-0b57-4a10-8387-54099d7f66ed/login', body)
      .then(function (respon) {
        router.push('todo');
      })
      .catch(function (eror) {
        alert('mohon maaf akun anda tidak terdaftar!!!');
        setvalue2('');
        setvalue('');
      });
  }
  function ip(e) {
    const v = e.target.value;
    setvalue(v);
  }
  function ip2(e) {
    const v = e.target.value;
    setvalue2(v);
  }
  return (
    <div className="">
      <form onSubmit={submit} className="max-w-[470px] mx-auto mt-20 ">
        <p className="text-[30px] font-bold">Login Account</p>
        <div className="grid mt-5">
          <label className="text-sm">Email</label>
          <input value={value} onChange={ip} placeholder="Username" className="border-[1px] py-2 rounded-md pl-4 pr-3 border-gray-300 focus:border-indigo-600 " type="text" />
        </div>
        <div className="grid mt-5">
          <label className="text-sm">Password</label>
          <input value={value2} onChange={ip2} placeholder="Password" className="border-[1px] py-2 pl-4 pr-3 rounded-md border-gray-300 focus:border-indigo-600 " type="password" />
        </div>
        <button type="submit" className="mt-5 bg-indigo-600 w-full py-3 rounded-lg text-white font-bold">
          Login
        </button>
        <p className="mt-2">
          Don't have an account?
          <Link href="register">
            <a className="cursor-pointer"> Register</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
