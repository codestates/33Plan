import React, { useState } from 'react';
import './Metatest.css';


function MetaTestResult ({expactedAnswer, result, comment, handleModalClose}) {
  /* TODO : 정답을 확인하는 창*/
//  예상스코어와 실제 정답을 사이의 비교하는 함수 구현 //삼겹살

  
  console.log('멘트',comment)
  return (
    <>
      <div className="modal-metatest">
        <div className="modal-metatest-container">  
          <h2>자신이 예상스코어</h2>
          <div>{expactedAnswer}개</div>
          <h2>실제 정답스코어</h2>
          <div>{result}개</div>
          <h2>결과</h2>
          <h2>{comment}</h2>
          <div>
            <button onClick={handleModalClose}>닫기</button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default MetaTestResult;