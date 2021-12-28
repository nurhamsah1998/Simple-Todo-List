import React from 'react';

export default function list({ todos }) {
  console.log(todos);
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex items-baseline justify-between mt-5 px-10">
              <h1 className="text-[30px]">{item.name}</h1>
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
