import React, { useState } from "react";
import PlanWriteModal from "../components/planner/PlanFormModal";
import PlanStack from "../components/planner/PlanStats";
import NavSignOut from "../components/NavSignOut";
import Mypage from "../components/sign/Mypage";

function Plannerpage({ isOpenMypage, openMypageHandler }) {
  const [isOpenPlan, setIsOpenPlan] = useState(false);
  const openModalHandler = () => {
    setIsOpenPlan(!isOpenPlan);
    console.log("open");
  };
  const [planContent, setPlanContent] = useState({
    first: "",
    second: "",
    third: "",
  });

  const handleInputValue = (key) => (e) => {
    setPlanContent({ ...planContent, [key]: e.target.value });
    // console.log(planContent);
  };
  // console.log(planContent);

  const handleClose = function () {
    setIsOpenPlan(false);
  };

  const { first, second, third } = planContent;

  // todo: 버튼 선택해서 오늘 잘한 일, 노력한 일, 못한 일, 구분해서 출력되게 하기
  // 1. 버튼을 클릭하면 해당 글이 버튼에 연결된 state에 담기게 하기 => onChange
  const [todayPlan, setTodayPlan] = useState({
    success: [],
    effort: [],
    fail: [],
  });
  // console.log(todayPlan);
  // onClick 했을 때 setTodayPlan의 객체에 알맞게 담기도록 함수 작성
  //! 오늘 어려운 부분 : 오늘 잘한 일에 선택된 모든 플랜이 출력되게 하기
  //! 오늘 어려운 부분 : 출력되는 모든 플랜을 각각 <li> 태그 안에 넣어서 출력되게 하기
  // map 사용해보기
  /*
  [], '할일을 적는다', ['할일을 적는다'], '한다!!!!
  */
  const todayPlanValue = (e) => {
    const { value, name } = e.target;
    setTodayPlan({ ...todayPlan, [name]: [todayPlan[name].concat(value)] });
    console.log(todayPlan);
  };

  const { success, effort, fail } = todayPlan;

  return (
    <div>
      <NavSignOut openMypageHandler={openMypageHandler} />
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
              <li>{first}</li>
              <div className="plan-btn-box">
                <button
                  className="plan-btn"
                  title="오늘 잘한 일"
                  name="success"
                  value={first}
                  onClick={todayPlanValue}
                >
                  😎
                </button>
                <button
                  className="plan-btn"
                  title="오늘 노력한 일"
                  name="effort"
                  value={first}
                  onClick={todayPlanValue}
                >
                  🥲
                </button>
                <button
                  className="plan-btn"
                  title="오늘 못한 일"
                  name="fail"
                  value={first}
                  onClick={todayPlanValue}
                >
                  😩
                </button>
              </div>
            </div>
            <div className="plan-box">
              <li>{second}</li>
              <div className="plan-btn-box">
                <button
                  className="plan-btn"
                  title="오늘 잘한 일"
                  name="success"
                  value={second}
                  onClick={todayPlanValue}
                >
                  😎
                </button>
                <button
                  className="plan-btn"
                  title="오늘 노력한 일"
                  name="effort"
                  value={second}
                  onClick={todayPlanValue}
                >
                  🥲
                </button>
                <button
                  className="plan-btn"
                  title="오늘 못한 일"
                  name="fail"
                  value={second}
                  onClick={todayPlanValue}
                >
                  😩
                </button>
              </div>
            </div>
            <div className="plan-box">
              <li>{third}</li>
              <div className="plan-btn-box">
                <button
                  className="plan-btn"
                  title="오늘 잘한 일"
                  name="success"
                  value={third}
                  onClick={todayPlanValue}
                >
                  😎
                </button>
                <button
                  className="plan-btn"
                  title="오늘 노력한 일"
                  name="effort"
                  value={third}
                  onClick={todayPlanValue}
                >
                  🥲
                </button>
                <button
                  className="plan-btn"
                  title="오늘 못한 일"
                  name="fail"
                  value={third}
                  onClick={todayPlanValue}
                >
                  😩
                </button>
              </div>
            </div>
          </ul>
        </div>
        {isOpenPlan ? (
          <PlanWriteModal
            handleInputValue={handleInputValue}
            handleClose={handleClose}
            planContent={planContent}
          />
        ) : null}
        {isOpenMypage ? <Mypage /> : null}

        <div className="plan-analyse-container">
          <div className="plan-analyse-list">
            <ul className="plan-analyse-box">
              <li className="plan-analyse">
                <span className="plan-analyse-title">오늘 잘한 일</span>
                <ul className="plan-analyse-text">
                  <li>{success}</li>
                </ul>
              </li>
              <li className="plan-analyse">
                <span className="plan-analyse-title">오늘 노력한 일</span>
                <ul className="plan-analyse-text">
                  <li>{effort}</li>
                </ul>
              </li>
              <li className="plan-analyse">
                <span className="plan-analyse-title">오늘 못한 일</span>
                <ul className="plan-analyse-text">
                  <li>{fail}</li>
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
