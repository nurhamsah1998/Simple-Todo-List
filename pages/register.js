import React from 'react';
import Link from 'next/link';
import Todo from './todo';

export default function Register() {
  return (
    <div>
      <form className="max-w-[470px] mx-auto mt-20 ">
        <p className="text-[30px] font-bold">Create Account</p>
        <div className="grid mt-5">
          <label className="text-sm">Name</label>
          <input placeholder="Name" className="border-[1px] py-2 rounded-md pl-4 pr-3 border-gray-300 focus:border-indigo-600 " type="text" />
        </div>
        <div className="grid mt-5">
          <label className="text-sm">Email</label>
          <input placeholder="Email" className="border-[1px] py-2 pl-4 pr-3 rounded-md border-gray-300 focus:border-indigo-600 " type="password" />
        </div>
        <div className="grid mt-5">
          <label className="text-sm">Password</label>
          <input placeholder="Password" className="border-[1px] py-2 pl-4 pr-3 rounded-md border-gray-300 focus:border-indigo-600 " type="password" />
        </div>
        <button className="mt-5 bg-indigo-600 w-full py-3 rounded-lg text-white font-bold">Register</button>
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
