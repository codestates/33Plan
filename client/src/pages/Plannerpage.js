import React, { useEffect, useState } from "react";
import PlanStack from "../components/planner/PlanStats";
import CategoryBtn from "../components/planner/CategoryBtn";
import axios from "axios";

function Plannerpage({ userInfo }) {
  /* plan 작성 */
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
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
      setTodos([...todos, { id: todos.length + 1, text: todo.trim() }]);
      setTodo("");
    } else if (todo === "") {
      alert("할 일을 작성해주세요");
    } else if (todos.length === 3) {
      setTodo("");
      alert("할 일을 모두 작성하셨어요~^0^");
    }
  };

  // todo: todos 배열의 객체 id값이 중복되지 않게 주어져야한다
  // if(countSum === 3 && todos.length < 3)??

  /* localStorage todo 삭제 */
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  /* localStorage 전체 삭제 */
  const localStorageClear = () => {
    localStorage.clear();
  };
  
  /* plan 카테고리별 카운트 */
  const [countSuccess, setCountSuccess] = useState(
    () => JSON.parse(window.localStorage.getItem("success")) || 0
  );
  const [countEffort, setCountEffort] = useState(
    () => JSON.parse(window.localStorage.getItem("effort")) || 0
  );
  const [countFail, setCountFail] = useState(
    () => JSON.parse(window.localStorage.getItem("fail")) || 0
  );

  useEffect(() => {
    localStorage.setItem("success", JSON.stringify(countSuccess));
  }, [countSuccess]);
  useEffect(() => {
    localStorage.setItem("effort", JSON.stringify(countEffort));
  }, [countEffort]);
  useEffect(() => {
    localStorage.setItem("fail", JSON.stringify(countFail));
  }, [countFail]);

  let countSum = countSuccess + countEffort + countFail;

  const handleTodoCategory = (todoId, key) => {
    if (key === "success") {
      setCountSuccess(countSuccess + 1);
      handleDeleteTodo(todoId);
    }
    if (key === "effort") {
      setCountEffort(countEffort + 1);
      handleDeleteTodo(todoId);
    }
    if (key === "fail") {
      setCountFail(countFail + 1);
      handleDeleteTodo(todoId);
    }
  };

  /*
  const birthday = new Date(); // 실행 날짜 출력
  const date1 = new Date(birthday);

  date1.setDate(birthday.getDate() + 2); // 3일 뒤 날짜
  console.log(birthday);
  console.log(date1);
  */

  // const handleCountValue = () => {
  //   if(todos && userInfo){
  //     axios.post("https://localhost:3000//planner/register/:id", {});
  //   }
  //   const { plan1, plan2, plan3 } = todos;
  // };
  
  return (
    <>
      <div className="planner">
        <div className="plan-container">
          <div className="plan-header">
            <h1>오늘 wooga 님이 할 일</h1>
          </div>
          {todos.length <= 3 && countSum < 9 ? (
            <form className="plan-list" onSubmit={handleFormSubmit}>
              <input
                name="todo"
                type="text"
                placeholder="오늘 할 일 3가지를 작성해 주세요"
                value={todo}
                onChange={handleInputChange}
              />
              <button className="plan-btn" type="submit">
                작성 완료
              </button>
            </form>
          ) : (
            <form>
              <button type="submit" onClick={localStorageClear}>
                모두 끝났습니다^0^
              </button>
            </form>
          )}
          <ul className="plan-items">
            {todos.map((todo) => (
              <li className="plan-item" key={todo.id}>
                <span className="plan-item-text">{todo.text}</span>
                <span>
                  <CategoryBtn
                    todoId={todo.id}
                    handleTodoCategory={handleTodoCategory}
                  />
                  <button
                    className="btn"
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <PlanStack
            countSuccess={countSuccess}
            countEffort={countEffort}
            countFail={countFail}
            countSum={countSum}
          />
        </div>
      </div>
    </>
  );
  
}

export default Plannerpage;