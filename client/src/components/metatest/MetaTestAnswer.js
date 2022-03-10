import React, { useState } from "react";
import MetaTestResult from "./MetaTestResult.js";
import "./Metatest.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function MetaTestAnswer({ metaData, handleOpenMetaTest }) {
  /* TODO : 정답을 확인하는 창*/
  // console.log(metaData);
  const [resultPage, setResultPage] = useState(true);

  //유저가 입력하는 예상결과값
  const [expactedAnswer, setExpactedAnswer] = useState("");

  //유저가 입력하는 정답값
  const [inputAnswer, setInputAnswer] = useState([]);
  // console.log("입력되는 정답값", inputAnswer);

  //입력창에 정답입력값
  const [inputValue, setInputValue] = useState("");

  //결과 저장되는 값
  const [result, setResult] = useState("");

  const handleMetaTestResult = () => {
    handlecheckResult();
    setResultPage(false);
  };

  // 정답확인함수
  const handlecheckResult = () => {
    const newInputAnswer = [...inputAnswer];
    const newdummydata = [...metaData];
    const checkedResult = newdummydata.filter((el) =>
      newInputAnswer.includes(el)
    );
    setResult(checkedResult.length);
  };

  // 정답 삭제 기능
  const handleDeleteTodo = (el) => {
    setInputAnswer(inputAnswer.filter((answer) => answer !== el));
  };

  return (
    <>
      {resultPage ? (
        <div className="modal-metatest">
          <div className="modal-metatest-container-answer">
            <div className="modal-metatest-box">
              <h2 className="modal-metatest-title">예상스코어</h2>
              <div className="modal-metatest-content">
                <input
                  className="modal-metatest-input"
                  type="number"
                  placeholder="예상개수"
                  onChange={(e) => {
                    setExpactedAnswer(e.target.value);
                  }}
                />
                <span>{expactedAnswer}개</span>
              </div>
            </div>
            {/* 정답입력폼 */}
            <form className="modal-metatest-box">
              <h2 className="modal-metatest-title">정답입력</h2>
              <input
                className="modal-metatest-input"
                type="text"
                placeholder="정답을 하나씩 입력하세요"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                onSubmit={(e) => e.preventDefault()}
                // value={false ? inputValue : null}
              />
              <button
                className="metatest-input-btn"
                onClick={(e) => {
                  e.preventDefault();
                  let newInputAnswer = [...inputAnswer];
                  newInputAnswer.push(inputValue);
                  setInputAnswer(newInputAnswer);
                }}
              >
                입력
              </button>
            </form>
            <ul className="modal-metatest-list">
              {inputAnswer.map((el, idx) => {
                return (
                  <li key={idx} className="modal-metatest-item">
                    {el}
                    <button
                      className="metatest-remove-btn"
                      key={idx}
                      onClick={() => handleDeleteTodo(el)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="trash" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div>
              <button
                className="metatest-input-btn"
                onClick={handleMetaTestResult}
              >
                결과 확인
              </button>
            </div>
          </div>
        </div>
      ) : (
        <MetaTestResult
          expactedAnswer={expactedAnswer}
          result={result}
          handleOpenMetaTest={handleOpenMetaTest}
        />
      )}
    </>
  );
}

export default MetaTestAnswer;
