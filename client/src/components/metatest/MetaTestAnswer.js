import React, { useState } from 'react';
import MetaTestResult from './MetaTestResult.js';
import './Metatest.css';

function MetaTestAnswer ({metaData}) {
  /* TODO : 정답을 확인하는 창*/
  console.log(metaData)
  const [resultPage , setResultPage] = useState(true)
 
  //유저가 입력하는 예상결과값
  const [expactedAnswer, setExpactedAnswer] = useState('')
  
  //유저가 입력하는 정답값
  const [inputAnswer, setInputAnswer] = useState([])
  console.log("입력되는 정답값",inputAnswer)


  //입력창에 정답입력값
  const [inputValue, setInputValue] = useState('')

  //결과 저장되는 값 
  const [result, setResult] = useState(10)
  

  const handleMetaTestResult = (expactedAnswer,result) => {
    handlecheckResult()
    handleComment(expactedAnswer,result)
    setResultPage(false)
  }

  // 정답확인함수
  const handlecheckResult = () => {
    const newInputAnswer = [...inputAnswer]
    const newdummydata = [...metaData]
    const checkedResult = newdummydata.filter(el => newInputAnswer.includes(el))
    setResult(checkedResult.length)
  }

  const [comment, setComment] = useState('')

  const handleComment = (expactedAnswer,result) => {
    if(expactedAnswer === result){
      setComment('자기 자신을 잘 알고 있습니다.')
    } else if(expactedAnswer < result){
      setComment('현재 과대평가 중 입니다. 정신차리세요')
    } else {
      setComment('현재 과소평가 중 입니다. 빡세게 하세요')
    }
  }


  return (
    <>
      {resultPage
      ? <div className="modal-metatest">
          <div className="modal-metatest-container">
            <h2>예상스코어</h2>
            <div className="modal-metatest-input">
              <input
                type="number"
                placeholder="예상개수"
                onChange={ (e) => {setExpactedAnswer(e.target.value)}}
              />
             </div>
             <p>{expactedAnswer}개</p>
            <h2>정답입력(단어하나씩 입력)</h2>
            <div className="modal-metatest-input">
              <input
                type="text"
                placeholder="정답입력"
                onChange={ (e) => {setInputValue(e.target.value)}}
              />
              <button onClick={ (e) => {
                let newInputAnswer = [...inputAnswer];
                newInputAnswer.push(inputValue);
                setInputAnswer(newInputAnswer);
              }}>정답저장
              </button>
             </div>
            <h2>정답판</h2>
            <p>{inputAnswer}</p>
            <div>
              <button onClick={handleMetaTestResult}>결과 확인</button>
            </div>
          </div>  
        </div>
    : <MetaTestResult expactedAnswer={expactedAnswer} result={result} comment={comment}/>
    }  
    </>
  );
}

export default MetaTestAnswer;

