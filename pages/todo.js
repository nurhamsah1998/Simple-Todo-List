import React from 'react';
import Register from './register';
import Link from 'next/link';
import { useState } from 'react';
import { uid } from 'uid';

export default function Todo() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  function submit(e) {
    e.preventDefault();
    const newData = [...data];
    const msg = {
      id: uid(),
      isiPesan: value,
    };
    newData.push(msg);
    setData(newData);
  }

  function inp(e) {
    const v = e.target.value;
    setValue(v);
  }

  return (
    <div className="w-full p-10">
      <Link href="/">
        <a className="mb-10">log out</a>
      </Link>

      <form onSubmit={submit} className="flex items-baseline">
        <input onChange={inp} placeholder="Enter List" className="border-[1px] py-3 pl-4 pr-3 w-full rounded-md border-gray-300 focus:border-indigo-600 " type="text" />
        <button type="submit" className="ml-5 bg-indigo-600 py-3 px-4 rounded-lg text-white font-bold">
          add
        </button>
      </form>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex items-baseline justify-between mt-5 px-10">
              <h1 className="text-[30px]">{item.isiPesan}</h1>
              <button type="submit" className="ml-5 py-3 px-4 rounded-lg text-white">
                <img src="https://kontenbase-todo.vercel.app/delete.svg" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
