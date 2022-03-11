import React from "react";

function Footer() {
  /* TODO : Nav 만들기. */
  //리액트 라우터로 연결 해야 할것
  return (
    <div>
      <nav className="footer">
        <div className="footer-title">
          Copyrightⓒ2022 Wooga All rights reserved
        </div>
        <div className="footer-container">
          <div className="footer-item">
            <span>Backend : 김현규</span>
            <br />
            <a href="https://github.com/SsankQ">
              <img
                alt=""
                src="https://img.shields.io/badge/Github-SsankQ-181717?style=for-the-badge&logo=GitHub"
              />
            </a>
          </div>
          <div className="footer-item">
            <span>Backend : 이현걸</span>
            <br />
            <a href="https://github.com/LeeHyeongeol">
              <img
                alt=""
                src="https://img.shields.io/badge/Github-LeeHyeongeol-181717?style=for-the-badge&logo=GitHub"
              />
            </a>
          </div>
          <div className="footer-item">
            <span>Frontend : 정다인</span>
            <br />
            <a href="https://github.com/jeongdxxn">
              <img
                alt=""
                src="https://img.shields.io/badge/Github-jeongdxxn-181717?style=for-the-badge&logo=GitHub"
              />
            </a>
          </div>
          <div className="footer-item">
            <span>Frontend : 서외구</span>
            <br />
            <a href="https://github.com/sud665">
              <img
                alt=""
                src="https://img.shields.io/badge/Github-sud665-181717?style=for-the-badge&logo=GitHub"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
