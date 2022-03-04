import React from "react";
// import './PlanFormModal.css'

function PlanWriteModal({ handleInputValue }) {

  return (
    <div className="modal-container">
      <form className="modal-from">
        <div>
          {/* <span>첫번째 할 일</span> */}
          <input
            className="modal-input"
            type="text"
            placeholder="첫번째 할 일"
            onChange={handleInputValue("first")}
          />
        </div>
        <div>
          {/* <span>두번째 할 일</span> */}
          <input
            className="modal-input"
            type="text"
            placeholder="두번째 할 일"
            onChange={handleInputValue("second")}
          />
        </div>
        <div>
          {/* <span>세번째 할 일</span> */}
          <input
            className="modal-input"
            type="text"
            placeholder="세번째 할 일"
            onChange={handleInputValue("third")}
          />
        </div>
        <button className="plan-write btn">작성완료</button>
      </form>
    </div>
  );
}

export default PlanWriteModal;