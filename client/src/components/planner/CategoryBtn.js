import React from "react";

function CategoryBtn({ todoId, handleTodoCategory }) {
  return (
    <>
      <button
        className="plan-items-btn"
        title="오늘 잘한 일"
        name={todoId}
        onClick={() => handleTodoCategory(todoId, "success")}
      >
        success
      </button>
      <button
        className="plan-items-btn"
        title="오늘 노력한 일"
        onClick={() => handleTodoCategory(todoId, "effort")}
      >
        effort
      </button>
      <button
        className="plan-items-btn"
        title="오늘 못한 일"
        onClick={() => handleTodoCategory(todoId, "fail")}
      >
        fail
      </button>
    </>
  );
}

export default CategoryBtn;
