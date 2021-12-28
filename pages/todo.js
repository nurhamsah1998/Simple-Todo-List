import React from 'react';
import Register from './register';
import Link from 'next/link';
import { useState } from 'react';
import { uid } from 'uid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import List from './list';

export default function Todo() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.kontenbase.com/query/api/v1/256886a0-0b57-4a10-8387-54099d7f66ed/todos?$limit=100')
      .then((res) => {
        setTodo(res.data);
      })
      .catch((er) => {
        alert('asd');
      });
  }, []);

  function submit(e) {
    e.preventDefault();
    if (value === '') {
      alert('masukkan katanya mblo!!');
      return false;
    } else {
      alert('sdf');
    }
    const newData = [...data];
    const msg = {
      id: uid(),
      isiPesan: value,
    };
    newData.push(msg);
    setData(newData);

    const body = {
      name: value,
    };

    axios
      .post('https://api.kontenbase.com/query/api/v1/256886a0-0b57-4a10-8387-54099d7f66ed/todos', body)
      .then(function (r) {})
      .catch(function (e) {
        alert('ANDA GAGAL!!');
      });
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
      <List todos={todo} />
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
