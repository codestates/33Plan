import React, { useState } from 'react';
import data from './dummydata.js';
import MetaTestAnswer from './MetaTestAnswer.js';
import './Metatest.css';
import {Link} from 'react-router-dom';

function MetaTestQuiz ({MetaTestHandlerClose}) {
  /* TODO : 메타인지 테스트에 랜덤으로 2초마다 60초동안 카드가 랜더링되게 하기 */
  const [metaData, setMetaData] = useState('');
  const [second, setsecond] = useState(60)
  const [timerNum, setTimerNum] = useState('')

// 퀴즈가 끝난뒤 정답입력페이지로 이동구현 
  const [nextPage, setNextPage] = useState(true)


// 랜덤 숫자 만들어서 더미데이터에서 단어카드 가져오지
// 중복되는 카드가 없도록 배열에서 제거한다. 
  // const handleRandom = () => {
  //   let newMeta = [...data]
  //   let randomNum = Math.floor(Math.random() * newMeta.length)
  //   newMeta.splice(randomNum,1)
  //   setTimerNum(randomNum)
  //   setMetaData(newMeta)
  // }

// 더미데이터를 1초마다 갱신시킨다. 근데 함수 시작하고 6초후에 멈춘다.

  const handleMetaTest = () => {
    randomMetaData()
    countingSecond()
    handleNextPage()
    let num = 0;
    let timer = setInterval(()=> setTimerNum(num++), 2000)
    setTimeout(() => clearInterval(timer),62000)
    // setTimeout(() => setTimerNum(null) ,61000)
  }
// 60초 카운터타이머 함수
  const countingSecond = () => {
    let num = 61; 
    let timer = setInterval(() => setsecond(num--), 1000)
    setTimeout(() => clearInterval(timer),62000)
  }


//테스트 완료후 정답확인입력 컴포넌트로 이동함수
  const handleNextPage = () => {
    setTimeout(() => setNextPage(false),62500)
  }
  
  
  //랜덤 배열 만들기 
  const randomMetaData = () => {
    let newMetaData = [];
    
    while(data.length > 15){
      let randomData = data.splice(Math.floor(Math.random() * data.length),1)[0]
      newMetaData.push(randomData)
    }
    setMetaData(newMetaData)
  }
  
  //테스트 화면 닫기
  const handleModalClose = () => {
    MetaTestHandlerClose()
  }
  
  return (
    <>{ nextPage
       ? <div className="modal-metatest">
          <div className="modal-metatest-container">
            <p>제시된 단어를 적지말고 기억해주세요</p>
             {/* <div className="modal-metatest-container-second">
              {second}초
             </div> */}
             <div className="modal-metatest-container-card">
              <p className="card-font">{metaData[timerNum]}</p>
             </div>
             <button className="modal-metatest-container-btn" 
              type="button" 
              onClick={handleMetaTest}
             >딱 한번만 누르세요
             </button>
          <Link to = '/'>
            <button className="modal-metatest-container-btn" 
            type="button" 
            onClick={handleModalClose}
            >닫기
            </button>
           </Link>
        </div>        
      </div>
      : <MetaTestAnswer metaData={metaData}/>
      }
    </>
  );
}

export default MetaTestQuiz;