import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Register from './register';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [value, setvalue] = useState('');
  const router = useRouter();

  function submit(f) {
    f.preventDefault();
    if (value === '2') {
      router.push('/todo');
    } else {
      alert('User name dan Password anda Salah!!');
    }
  }
  function ip(e) {
    const v = e.target.value;
    setvalue(v);
  }
  return (
    <div className="">
      <form onSubmit={submit} className="max-w-[470px] mx-auto mt-20 ">
        <p className="text-[30px] font-bold">Login Account</p>
        <div className="grid mt-5">
          <label className="text-sm">Email</label>
          <input onChange={ip} placeholder="Username" className="border-[1px] py-2 rounded-md pl-4 pr-3 border-gray-300 focus:border-indigo-600 " type="text" />
        </div>
        <div className="grid mt-5">
          <label className="text-sm">Password</label>
          <input onChange={ip} placeholder="Password" className="border-[1px] py-2 pl-4 pr-3 rounded-md border-gray-300 focus:border-indigo-600 " type="password" />
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
