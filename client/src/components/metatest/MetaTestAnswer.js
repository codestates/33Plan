import React, { useState } from 'react';
import MetaTestResult from './MetaTestResult.js';
import './Metatest.css';

function MetaTestAnswer ({metaData, handleOpenMetaTest}) {
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
  const [result, setResult] = useState('')
  

  const handleMetaTestResult = () => {
    handlecheckResult()
    setResultPage(false)
  }

  // 정답확인함수
  const handlecheckResult = () => {
    const newInputAnswer = [...inputAnswer]
    const newdummydata = [...metaData]
    const checkedResult = newdummydata.filter(el => newInputAnswer.includes(el))
    setResult(checkedResult.length)
  }

  // 정답 삭제 기능 
  const handleDeleteTodo = (el) => {
    console.log("값이 전달아뇓",el)
    setInputAnswer(inputAnswer.filter((answer) => answer !== el));
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
            {/* 정답입력폼 */}
            <form className="modal-metatest-input" >
              <input
                type="text"
                placeholder="정답입력"
                onChange={ (e) => {setInputValue(e.target.value)}}
                onSubmit={(e)=>e.preventDefault()}
                value={false ? inputValue : null }
              />
              <button onClick={ (e) => {
                e.preventDefault()
                let newInputAnswer = [...inputAnswer];
                newInputAnswer.push(inputValue);
                setInputAnswer(newInputAnswer);
              }}>정답저장
              </button>
            </form>  
            <ul>
            {
              inputAnswer.map((el, idx) => {
                return( 
                  <li>{el}<button key={idx} onClick={() => handleDeleteTodo(el)}>삭제</button></li>
                )
              })
            }
            </ul>
            <div>
              <button onClick={handleMetaTestResult}>결과 확인</button>
            </div>
          </div>  
        </div>
      : <MetaTestResult   
        expactedAnswer={expactedAnswer} 
        result={result} 
        handleOpenMetaTest={handleOpenMetaTest}/>
      }  
    </>
  );
}

export default MetaTestAnswer;
