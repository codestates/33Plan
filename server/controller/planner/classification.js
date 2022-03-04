const { goods, tryings, bads, todays } = require("../../models");

module.exports = {
  good: async (req, res) => {
    
    // console.log(req.params.today_id);

    //* plan1, plan2, plan3 중 plan1만 전달되었다 가정
    // 플래너 컴포넌트에서 작성되어 있는 plan1을 req.body에 담아 전송
    // 전달 받은 req.body를 DB에 조회해서 일치하는지 체크???? => 보류

    // 요청이 전달되면 => goods 테이블에 전달받은 plan / today_id 저장

    res.send("good");
  },
  trying: async (req, res) => {
    res.send("trying");
  },
  bad: async (req, res) => {
    res.send("bad");
  },
};
