import React, { useState } from 'react';
import data from './dummydata.js';

function MetaTestModal ({MetaTestHandlerClose}) {
  /* TODO : 메타인지 테스트에 랜덤으로 2초마다 60초동안 카드가 랜더링되게 하기 */
  const [metaData, setMetaData] = useState(data);
  const [second, setsecond] = useState('')

  const [timerNum, setTimerNum] = useState(60)

  const handleRandom = () => {
    let randomNum = Math.floor(Math.random() * metaData.length)
    // 선택된 번호는 지우기 구현 
    // setMetaData(metaData.splice())
    // 더미데이터를 항상 랜덤하게 정렬해서 순서대로 보여주는게 나은지 / 아니면 특정인덱스를 제거해야할지
    return setTimerNum(randomNum)
  }
  let card = metaData[timerNum]
//   더미데이터를 1초마다 갱신시킨다. 근데 함수 시작하고 6초후에 멈춘다.
  const handleTimerNum = () => {
    countingSecond()
    let timer = setInterval(()=> handleRandom(), 2000)
    setTimeout(() => clearInterval(timer),60000)
    setTimeout(() => setTimerNum(null) ,61000)
  }

  const countingSecond = () => {
    let num = 60; 
    let timer = setInterval(() => setsecond(num--), 1000)
    setTimeout(() => clearInterval(timer),62000)
  }

  const handleModalClose = () => {
    MetaTestHandlerClose()
  }

  return (
    <>
      <div className="modal-metatest">
        <div className="modal-metatest-container">
           <div className="modal-metatest-container-second">{second}초</div>
           <div>단어카드</div>
            <card className="modal-metatest-container-card">
              {card}
            </card>
           <button className="modal-metatest-container-btn" 
           type="button" 
           onClick={handleTimerNum}
           >딱 한번만 누르세요
           </button>
           <br></br>
           <button className="modal-metatest-container-btn" 
           type="button" 
           onClick={handleModalClose}
           >닫기
           </button>
        </div>        
      </div>
    </>
  );
}

export default MetaTestModal;