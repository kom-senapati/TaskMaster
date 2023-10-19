"use client";
import React, { useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [TaskList, setTaskList] = useState([]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function submitHandler(e) {
    e.preventDefault();
    setTaskList([...TaskList, { Title, Desc }]);
    setTitle("");
    setDesc("");
  }

  let renderTask = <h2>No Task</h2>;
  if (TaskList.length > 0) {
    renderTask = TaskList.map((todo, i) => {
      return (
        <li key={i}>
          <div
            className={`flex flex-row items-center justify-between mb-5 w-2/3 text-gray-500`}
          >
            <h5 className="text-xl font-semibold">{todo.Title}</h5>
            <h6 className="text-lg font-medium">{todo.Desc}</h6>
            <button
              className="btn btn-danger"
              onClick={(i) => deleteHandler(i)}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  function deleteHandler(i) {
    let t = [...TaskList];
    t.splice(i, 1);
    setTaskList(t);
  }

  return (
    <div
      data-theme={darkMode ? "forest" : "cupcake"}
      className={`w-full h-${(TaskList.length >= 4) ? "full" : "screen"} px-5 py-5`}
    >
      <div className="flex flex-row items-center justify-center space-x-8 mb-[5%]">
        <h1 className="text-5xl font-bold text-center">TaskMaster</h1>
        <button className="btn btn-ghost" onClick={toggleDarkMode}>
          {darkMode ? "Dark" : "Light"}
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add todo"
          className="input input-bordered m-5"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Description"
          className="input input-bordered m-5"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="btn btn-active btn-primary m-5">Add Task</button>
      </form>
      <hr />
      <div className="p-8">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}
