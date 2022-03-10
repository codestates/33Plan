import React, { useState } from "react";
import data from "./dummydata.js";
import MetaTestAnswer from "./MetaTestAnswer.js";
import "./Metatest.css";
import { Link } from "react-router-dom";

function MetaTestQuiz({ handleOpenMetaTest }) {
  /* TODO : 메타인지 테스트에 랜덤으로 2초마다 60초동안 카드가 랜더링되게 하기 */
  const [metaData, setMetaData] = useState("");
  const [timerNum, setTimerNum] = useState("");
  // 퀴즈가 끝난뒤 정답입력페이지로 이동구현
  const [nextPage, setNextPage] = useState(true);

  // 테스트 시작후 버튼 숨기기
  const [testBtn, setTestBtn] = useState(true);

  const handleMetaTest = () => {
    randomMetaData();
    // countingSecond()
    setTestBtn(false);
    handleNextPage();
    let num = 0;
    let timer = setInterval(() => setTimerNum(num++), 1000);
    let minutTimer = setTimeout(() => clearInterval(timer), 2000);
    return () => {
      clearTimeout(minutTimer);
    };
  };

  //테스트 완료후 정답확인입력 컴포넌트로 이동함수
  const handleNextPage = () => {
    setTimeout(() => setNextPage(false), 2000);
  };

  // 60초 카운터타이머 함수
  // const countingSecond = () => {
  //   let num = 61;
  //   let timer = setInterval(() => setsecond(num--), 1000)
  //   setTimeout(() => clearInterval(timer),62000)
  // }

  //랜덤 배열 만들기
  const randomMetaData = () => {
    let newMetaData = [];
    let newData = [...data];
    while (newData.length > 20) {
      let randomData = newData.splice(
        Math.floor(Math.random() * newData.length),
        1
      )[0];
      newMetaData.push(randomData);
    }
    setMetaData(newMetaData);
  };
  //

  return (
    <>
      {nextPage ? (
        <div className="modal-metatest">
          <div className="modal-metatest-container">
            <h2>★ 제시된 단어를 적지말고 기억해주세요 ★</h2>
            {/* <div className="modal-metatest-container-second">
                {second}초
              </div> */}
            <div className="modal-metatest-container-card">
              <p className="card-font">{metaData[timerNum]}</p>
            </div>
            {testBtn ? (
              <button
                className="modal-metatest-container-btn"
                type="button"
                onClick={() => {
                  handleMetaTest();
                }}
              >
                딱 한번만 누르세요
              </button>
            ) : (
              <Link to="/">
                <button
                  className="modal-metatest-container-btn"
                  type="button"
                  onClick={handleOpenMetaTest}
                >
                  닫기
                </button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <MetaTestAnswer
          metaData={metaData}
          handleOpenMetaTest={handleOpenMetaTest}
        />
      )}
    </>
  );
}

export default MetaTestQuiz;
