import React, { useEffect, useState } from "react";
import PlanWriteModal from "../components/planner/PlanFormModal";
import PlanStack from "../components/planner/PlanStats";
import NavSignOut from "../components/NavSignOut";
import Mypage from "../components/sign/Mypage";

function Plannerpage() {
  const handleClose = function () {
    setIsOpenMypage(false);
  };

  /* 마이페이지 */
  const [isOpenMypage, setIsOpenMypage] = useState(false);
  const openMypageHandler = () => {
    setIsOpenMypage(true);
  };

  //! 여기부터 삭제
  const [isValidSignIn, setIsValidSignIn] = useState(true);

  const isLogout = () => {
    setIsValidSignIn(false);
  };
  //! 여기까지 삭제

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

  const handleDeleteTodo = () => {
    // localStorage.removeItem("todos")
    // let target = e.target.value;
    // let newTodos = todos.filter((todo) => todo.id !== target.id);
    // setTodos(newTodos);
    // let idx = 0;
    // users = JSON.parse(localStorage.getItem("users") || "[]"); //데이터를 가져옴
    // users.splice(idx,1); //삭제할 idx를 처리
    // localStorage.setItem("users", JSON.stringify(users)); setItem을 통해서 업데이트 해줌
    //? 데이터 정보를 어떻게 전달받지
  }
  
  if (!isValidSignIn) {
    return alert("로그인 후 이용하세요");
  } else {
    return (
      <>
        <NavSignOut openMypageHandler={openMypageHandler} isLogout={isLogout} />
        {isOpenMypage ? <Mypage handleClose={handleClose} /> : null}

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
                    onClick={handleDeleteTodo()}
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
