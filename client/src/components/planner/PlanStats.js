import React from "react";
import "./PlanStack.css";

function PlanStack({
  countSuccess,
  countEffort,
  countFail,
  countSum,
  totalSuccess,
  totalEffortCount,
  totalFailCount,
}) {
  let day = 1;
  if (countSum > 3 && countSum <= 6) day = 2;
  else if (countSum > 6 && countSum <= 9) day = 3;

  return (
    <>
      <div className="plan-stats">
        <div className="plan-stats-container">
          <h2>{day}일 동안 성공한 일</h2>
          <div className="plan-stats-list">
            <dl className="plan-stack-box">
              <dt>오늘 잘한 일</dt>
              <dd>{countSuccess}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>오늘 노력한 일</dt>
              <dd>{countEffort}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>오늘 못한 일</dt>
              <dd>{countFail}</dd>
            </dl>
          </div>
        </div>
        <div className="plan-stats-container">
          <h2>전체 기간동안 성공한 일</h2>
          <div className="plan-stats-list">
            <dl className="plan-stack-box">
              <dt>오늘 잘한 일</dt>
              <dd>{totalSuccess}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>오늘 노력한 일</dt>
              <dd>{totalEffortCount}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>오늘 못한 일</dt>
              <dd>{totalFailCount}</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanStack;
