import React from "react";
import "./PlanStack.css";

function PlanStack() {
  return (
    <div className="plan-stats-container">
      <div className="planstats-title">Stats Zone</div>
      <div className="plan-stack">
        <div className="plan-stack-box">
          <div className="plan-stack-title">잘한 일</div>
          <div className="plan-stack-block">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
        </div>
        <div className="plan-stack-box">
          <div className="plan-stack-title">노력한 일</div>
          <div className="plan-stack-block">
            <div className="block"></div>
            <div className="block"></div>
          </div>
        </div>
        <div className="plan-stack-box">
          <div className="plan-stack-title">못한 일</div>
          <div className="plan-stack-block">
            <div className="block"></div>
          </div>
        </div>
      </div>

      <div className="plan-graph">
        <div className="graph-bar">
          <div className="bar green">
            <div className="desc">
              <span className="stats">잘한 일 3개</span>
            </div>
          </div>
          <div className="bar yellow">
            <div className="desc">
              <span className="stats">노력한 일 2개</span>
            </div>
          </div>
          <div className="bar gray">
            <div className="desc">
              <span className="stats">못한 일 2개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanStack;
