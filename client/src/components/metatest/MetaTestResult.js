import React, { useState, useEffect } from "react";
import "./Metatest.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function MetaTestResult({ expactedAnswer, result, handleOpenMetaTest }) {
  // 결과 판독 멘트
  const [comment, setComment] = useState("");
  // 로딩중 표시
  const [loading, setLoading] = useState(false);
  // 에러 표시
  const [error, setError] = useState(null);
  // 결과 확인 함수

  const expactedAnswerNum = Number(expactedAnswer);

  const resultNum = Number(result);

  const metaTestReader = async () => {
    try {
      setError(null);
      // props를 정확하게 사용하기 위해 타입을 변경
      if (
        expactedAnswerNum === resultNum 
      ) {
        setComment("자기 자신을 잘 알고 있습니다.");
      } else if (Number(expactedAnswer) < Number(result)) {
        setComment("현재 과소평가 중 입니다.");
      } else {
        setComment("현재 과대평가 중 입니다.");
      }
      setLoading(true);
    } catch (e) {
      setError(e);
    }
    const loadingImg = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(loadingImg);
    };
  };
  useEffect(() => {
    metaTestReader();
  }, [comment]);

  if (loading) {
    return (
      <div className="modal-metatest">
        <div className="modal-metatest-container">
          <FontAwesomeIcon icon={faSpinner} pulse className="faspinner"/>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>"에러발생"</div>;
  }
  return (
    <>
      <div className="modal-metatest">
        <div className="modal-metatest-container">
          <dl className="modal-metatest-content score">
            <dt>자신이 예상스코어</dt>
            <dd>{expactedAnswer}개</dd>
          </dl>
          <dl className="modal-metatest-content score">
            <dt>실제 정답스코어</dt>
            <dd>{result}개</dd>
          </dl>
          {/* <h2>결과</h2> */}
          <h2 className="modal-metatest-content comment">{comment}</h2>
          <div>
            <button className="metatest-input-btn" onClick={handleOpenMetaTest}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetaTestResult;
