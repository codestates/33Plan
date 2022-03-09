import React, { useState, useEffect }from 'react';
import './Metatest.css';


function MetaTestResult ({expactedAnswer, result, handleOpenMetaTest }) {
  // 결과 판독 멘트
  const [comment, setComment] = useState('')
  // 로딩중 표시
  const [loading, setLoading] = useState(false);
  // 에러 표시
  const [error, setError] = useState(null);
  // 결과 확인 함수
  const metaTestReader = async () => {
    try {
      setError(null);
      // props를 정확하게 사용하기 위해 타입을 변경 
      if(Number(expactedAnswer) === Number(result)){
        setComment('자기 자신을 잘 알고 있습니다.')
      } else if(Number(expactedAnswer) < Number(result)){
        setComment('현재 과소평가 중 입니다.')
      } else {
        setComment('현재 과대평가 중 입니다.')
      }
      setLoading(true);
    } catch (e) {
      setError(e)
    }
    const loadingImg = setTimeout(()=>setLoading(false),1000)
    return () => { clearTimeout(loadingImg) }
  }
  useEffect(() => {
    metaTestReader();
  }, [comment])
  
  if (loading) {
   return (
    <div className="modal-metatest">
      <div className="modal-metatest-container">
        <img alt="결과 확인 중" src="https://user-images.githubusercontent.com/89363048/157176840-2fdb9e8e-2ca5-48af-8ed6-5c4d1a4c1c32.gif"/>
      </div> 
    </div>
   )
  }  
  if (error) {
    return <div>"에러발생"</div>
  }
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
            <button onClick={handleOpenMetaTest}>닫기</button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default MetaTestResult;