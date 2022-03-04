import React from 'react';
import './Metatest.css';

function Metatest () {
  /* TODO : Mainpage 만들기. */
  return (
    <div className="metapage">
      <div className="metapage-test-container">
         <div className="metapage-test-title">
             <h4>60초 동안 화면에 나타나는 30개의 단어중에</h4> 
             <h4>기억하는 단어개수와 단어를 써주세요.</h4>
         </div>
         <div>
           <button className="metapage-test-start-btn"></button>
         </div>
         <div className="metapage-test-card">
             <div className="metapage-test-card-action">단어카드</div>
         </div>
         <div className="metapage-test-content">
             <h4>단어 하나를 쓰고나면 enter를 눌러서 제출해주세요</h4>
         </div>
         <div className="metapage-test-input">
             <input type="text"></input>
         </div>
         <div className="metapage-test-content">
             <h4>모두 작성 완료</h4>
         </div>
      </div>
    </div>
  );
}

export default Metatest;