import React, { useState } from "react";
import PlanWriteModal from "../components/planner/PlanFormModal";
import PlanStack from "../components/planner/PlanStats";
import NavSignOut from "../components/NavSignOut"

function Plannerpage() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };
  const [plan, setPlan] = useState({
    first: "",
    second: "",
    third: "",
  });

  const handleInputValue = (key) => (e) => {
    setPlan({ ...plan, [key]: e.target.value });
  };

  // const { first, second, third } = plan;

  return (
    <div>
      <NavSignOut/>
      <div className="planner">

        <div className="plan-container">
          <div className="plan-header">
            <h1>오늘 wooga 님이 할 일</h1>
            <button className="plan-modal btn" onClick={openModalHandler}>
              작성하기
            </button>
          </div>

          <ul className="plan-list">
            <div className="plan-box">
              <li>버튼 만들기</li>
              <div className="plan-btn-box">
                <button className="plan-btn">good</button>
                <button className="plan-btn">trying</button>
                <button className="plan-btn">bad</button>
              </div>
            </div>
            <div className="plan-box">
              <li>잘한 일/ 노력한 일/ 못한 일 레이아웃 만들기</li>
              <div className="plan-btn-box">
                <button className="plan-btn">good</button>
                <button className="plan-btn">trying</button>
                <button className="plan-btn">bad</button>
              </div>
            </div>
            <div className="plan-box">
              <li>스택 컴포넌트 만들기</li>
              <div className="plan-btn-box">
                <button className="plan-btn">good</button>
                <button className="plan-btn">trying</button>
                <button className="plan-btn">bad</button>
              </div>
            </div>
          </ul>
        </div>
        {isOpen ? <PlanWriteModal handleInputValue={handleInputValue} /> : null}

        <div className="plan-analyse-container">
          <div className="plan-analyse-list">
            <ul className="plan-analyse-box">
              <li className="plan-analyse">
                <span className="plan-analyse-title">오늘 잘한 일</span>
                <ul className="plan-analyse-text">
                  <li>버튼 만들기</li>
                  <li>잘한 일/ 노력한 일/ 못한 일 레이아웃아웃아웃아웃</li>
                </ul>
              </li>
              <li className="plan-analyse">
                <span className="plan-analyse-title">오늘 노력한 일</span>
                <ul className="plan-analyse-text">
                  <li>어쩌고 저쩌고 어쩔삼성 비스포크</li>
                </ul>
              </li>
              <li className="plan-analyse">
                <span className="plan-analyse-title">오늘 못한 일</span>
                <ul className="plan-analyse-text">
                  <li>어쩌고 저쩌고 어쩔삼성 비스포크포크포크</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PlanStack />
    </div>
  );
}

export default Plannerpage;
