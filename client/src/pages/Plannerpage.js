import React, { useEffect, useState } from "react";
// import PlanWriteModal from "../components/planner/PlanFormModal";
// import PlanStack from "../components/planner/PlanStats";


function Plannerpage({userInfo}) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos) {
      return JSON.parse(savedTodos);
    } else return [];
  });
  const [todo, setTodo] = useState("");
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo !== "" && todos.length < 3) {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: todo.trim(), category: "" },
      ]);
      setTodo("");
    } else if(todo === '') {
      alert('할 일을 작성해주세요')
    }
  };

  const handleDeleteTodo = (todoId) => {
  
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  // 로그인이 되지 않을때 화면 표시
  if (!userInfo.email) {
    return (
      <div className="planner">
        <div className="plan-container">
        <h1>로그인이 필요한 페이지 입니다.</h1>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="planner">
          <div className="plan-container">
            <div className="plan-header">
              <h1>오늘 wooga 님이 할 일</h1>
            </div>
            {todos.length < 3 ? (
              <form className="plan-list" onSubmit={handleFormSubmit}>
                <input
                  name="todo"
                  type="text"
                  placeholder="오늘 할 일 3가지를 작성해 주세요"
                  value={todo}
                  onChange={handleInputChange}
                />
                <button className="plan-btn" type="submit">작성 완료</button>
              </form>
            ) : null}
            <ul>
              {todos.map((todo, idx) => (
                <li key={idx}>
                  <span>{todo.text}</span>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Plannerpage;