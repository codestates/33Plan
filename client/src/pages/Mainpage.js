import React, { useState } from "react";
import MetaTestQuiz from "../components/metatest/MetaTestQuiz";

function Mainpage() {
  /* TODO : Mainpage 만들기. */

  const [isMetaTest, setIsMetaTest] = useState(false);

  const handleOpenMetaTest = () => {
    setIsMetaTest(!isMetaTest);
  };

  return (
    <>
      <div className="mainpage">
        <div className="mainpage-container">
          <div className="mainpage-container-img">
            <img
              className="mainpage-img"
              alt="이미지 넣고 싶습니다."
              src="https://user-images.githubusercontent.com/89363048/157147822-b8886302-2f83-4833-a57e-15d5a9e68f7f.gif"
            />
          </div>
          <h2 className="mainpage-title">
            우리는 자신에 대해 얼마나 잘 알고 있을까요?
          </h2>
          <p className="mainpage-content">
            간단한 테스트를 통해 나의 메타인지 능력은 어느 정도인지 측정해보세요
            <br />
            하루에 3가지만 계획하시면 됩니다!
            <br />
            내가 얼마나 계획을 실천할 수 있을지 예상해보고 3일 뒤 결과를
            확인합니다
            <br />
            작아도 좋으니 꾸준히 노력해서 메타인지를 능력을 키우세요^0^
          </p>
          <div className="mainpage-test">
            <button className="mainpage-test-btn" onClick={handleOpenMetaTest}>
              테스트 시작
            </button>
            {isMetaTest ? (
              <MetaTestQuiz handleOpenMetaTest={handleOpenMetaTest} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
