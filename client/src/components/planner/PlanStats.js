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
  findData
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
              <dt>잘한 일</dt>
              <dd>{countSuccess}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>노력한 일</dt>
              <dd>{countEffort}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>못한 일</dt>
              <dd>{countFail}</dd>
            </dl>
          </div>
        </div>
        {findData
        ?<div className="plan-stats-container" >
          <h2>지금까지의 플랜 달성도</h2>
          <div className="plan-stats-list">
            <dl className="plan-stack-box">
              <dt>잘한 일</dt>
              <dd>{totalSuccess}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>노력한 일</dt>
              <dd>{totalEffortCount}</dd>
            </dl>
            <dl className="plan-stack-box">
              <dt>못한 일</dt>
              <dd>{totalFailCount}</dd>
            </dl>
          </div>
        </div>
        :null}
      </div>
    </>
  );
}

export default PlanStack;
