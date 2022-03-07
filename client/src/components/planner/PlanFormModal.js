import React from "react";
// import './PlanFormModal.css'

function PlanWriteModal({ handleInputValue, handleClose, planContent }) {
  // 작성완료 버튼을 누르면 데이터를
  const { fistContent, secondContent, thirdContent } = planContent;


  return (
    <div className="modal-container">
      <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            className="modal-input"
            type="text"
            placeholder="첫번째 할 일"
            onChange={handleInputValue("first")}
          />
        </div>
        <div>
          <input
            className="modal-input"
            type="text"
            placeholder="두번째 할 일"
            onChange={handleInputValue("second")}
          />
        </div>
        <div>
          <input
            className="modal-input"
            type="text"
            placeholder="세번째 할 일"
            onChange={handleInputValue("third")}
          />
        </div>
        <button className="plan-write btn" type="submit" onClick={handleClose}>
          작성완료
        </button>
      </form>
    </div>
  );
}

export default PlanWriteModal;
