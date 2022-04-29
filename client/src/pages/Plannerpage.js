import React, { useEffect, useState } from "react";
import PlanStack from "../components/planner/PlanStats";
import CategoryBtn from "../components/planner/CategoryBtn";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

axios.defaults.withCredentials = true;

function Plannerpage({ userInfo }) {
  const planUserInfo = { ...userInfo };

  //* plan localStorage에서 가져오기
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else return [];
  });

  const [todo, setTodo] = useState("");

  //* plan 카테고리별 카운트
  const [countSuccess, setCountSuccess] = useState(
    () => JSON.parse(window.localStorage.getItem("success")) || 0
  );
  const [countEffort, setCountEffort] = useState(
    () => JSON.parse(window.localStorage.getItem("effort")) || 0
  );
  const [countFail, setCountFail] = useState(
    () => JSON.parse(window.localStorage.getItem("fail")) || 0
  );

  //* 전체 기간동안 성공한 일 카운트
  const [totalSuccess, setTotalSuccess] = useState(0);
  const [totalEffortCount, setTotalEffortCount] = useState(0);
  const [totalFailCount, setTotalFailCount] = useState(0);

  // 전체기간동안 자료 조회 랜더링
  const [findData, setFindData] = useState(false);

  //* 서버로 get 요청 함수 실행
  useEffect(() => {
    countTotalValue();
  }, [countSuccess, countEffort, countFail]);

  useEffect(() => {
    localStorage.setItem("success", JSON.stringify(countSuccess));
  }, [countSuccess]);
  useEffect(() => {
    localStorage.setItem("effort", JSON.stringify(countEffort));
  }, [countEffort]);
  useEffect(() => {
    localStorage.setItem("fail", JSON.stringify(countFail));
  }, [countFail]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCountTotal = (data) => {
    const { successCount, effortCount, failCount } = data;
    setTotalSuccess(successCount);
    setTotalEffortCount(effortCount);
    setTotalFailCount(failCount);
  };

  const countTotalValue = () => {
    axios
      .get(`https://localhost:4000/planner/summary/${planUserInfo.id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        handleCountTotal(res.data.data);
        // console.log("res: ", res.data.data);
      });
  };

  const handleCountValue = (todoId, key) => {
    const getPlan = (todos, todoId) => {
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) return todos[i].text;
      }
    };

    const plan = getPlan(todos, todoId);

    // console.log(todos);
    // console.log("유저정보: ", planUserInfo);
    // console.log("플랜: ", plan);

    if (todos && planUserInfo) {
      axios
        .post(
          `https://localhost:4000/planner/register/${planUserInfo.id}`,
          {
            plan,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          // console.log(res); // plans 테이블에 삽입된 레코드의 결과 반환 => res.data.data.planData
          axios
            .post(
              `https://localhost:4000/planner/classification/${key}/${res.data.data.id}`,
              {
                plan,
              },
              {
                "Content-Type": "application/json",
              }
            )
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!planUserInfo.email){
      alert("로그인이 필요한 기능입니다")
    } else {
      if (todo !== "" && todos.length < 3) {
        setTodos([...todos, { id: Date.now(), text: todo.trim() }]);
        setTodo("");
      } else if (todo === "") {
        alert("할 일을 작성해주세요");
      } else if (todos.length === 3) {
        setTodo("");
        alert("할 일을 모두 작성하셨어요~^0^");
      }
    }
  };

  /* localStorage todo 삭제 */
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  /* localStorage 전체 삭제 */
  const localStorageClear = () => {
    localStorage.clear();
  };

  let countSum = countSuccess + countEffort + countFail;

  const handleTodoCategory = (todoId, key) => {
    handleCountValue(todoId, key);

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
  // 그동안 자료 조회 핸들러
  const handleFindata = () => {
    setFindData(!findData)
  }

  return (
    <>
      <div className="planner">
        <div className="plan-container">
          <div className="plan-header">
            <h1>오늘 {planUserInfo.nickname} 님이 할 일</h1>
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
              <button className="plan-list-btn" type="submit">
                작성완료
              </button>
            </form>
          ) : (
            <form>
              <button
                className="plan-reset-btn"
                type="submit"
                onClick={localStorageClear}
              >
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
                    className="remove-btn"
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="trash" />
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
            totalSuccess={totalSuccess}
            totalEffortCount={totalEffortCount}
            totalFailCount={totalFailCount}
            findData={findData}
          />
          {/* 전체 데이터 조회 */}
          {findData
          ? null
          :<button onClick={handleFindata} className="mainpage-test-btn">전체 결과 조회</button>
          }
        </div>
      </div>
    </>
  );
}

export default Plannerpage;
