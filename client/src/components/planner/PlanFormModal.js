import React from "react";
// import './PlanFormModal.css'

function PlanWriteModal({ handleInputValue, handleClose, planContent }) {
  // 작성완료 버튼을 누르면 데이터를
  const { first, second, third } = planContent;

  return (
    <div className="modal-container">
      <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            className="modal-input"
            type="text"
            placeholder={first ? null : "매일 물 1리터 마시기"}
            value={first}
            onChange={handleInputValue("first")}
          />
        </div>
        <div>
          <input
            className="modal-input"
            type="text"
            placeholder={second ? null : "책 1권 읽기"}
            value={second}
            onChange={handleInputValue("second")}
          />
        </div>
        <div>
          <input
            className="modal-input"
            type="text"
            placeholder={third ? null : "매일 운동장 돌기"}
            value={third}
            onChange={handleInputValue("third")}
          />
        </div>
        <button className="plan-write btn" type="button" onClick={handleClose}>
          작성완료
        </button>
      </form>
    </div>
  );
}

export default PlanWriteModal;
