import React,{ useState } from "react";
import MetaTestQuiz from "../components/metatest/MetaTestQuiz";



function Mainpage() {
  /* TODO : Mainpage 만들기. */
 
  const [isMetaTest, setIsMetaTest] = useState(false)

  const handleOpenMetaTest = () => {
    setIsMetaTest(!isMetaTest)
  }
  
  return (
    <>
      <div className="mainpage">
        <h2>니 자신을 알라</h2>
        <div className="mainpage-container">
          <div className="mainpage-content">
            메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용
            메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용
            메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용 메타인지 관련 내용
          </div>
          <>
            <img margin-top="10px" alt="이미지 넣고 싶습니다." src="https://user-images.githubusercontent.com/89363048/157147822-b8886302-2f83-4833-a57e-15d5a9e68f7f.gif" />
          </>  
          <div className="mainpage-test">
            <button className="mainpage-test-btn" onClick={handleOpenMetaTest}>테스트하기</button>
            {isMetaTest ? <MetaTestQuiz handleOpenMetaTest={handleOpenMetaTest}/> : null}
          </div>
        </div>
      </div>
    </>  
  );
}

export default Mainpage;
