
module.exports = {
    get: async (req, res) => {
        res.send('summary')
    }

}

//? API 조정 => planner/classification/good/:today_id
//?         => planner/classification/trying/:today_id
//?         => planner/classification/bad/:today_id

//* 1. todays에서 분류될 때 (각 버튼 눌렸을 때,) 각각 goods / bads / tryings 테이블에 해당 plan 내용과 today_id 가 담기게 된다
// register에서 플래너 등록할 때, DB에서 today.id, today.plan, today.user_id까지 전달하게 한 다음
// 분류할 때, req.params에 today_id를 담아보낼 수 있게 클라이언트에서 설정
// 각 버튼에 요청 보내는 endpoint를 다르게 설정
// 

//* 2. 각각의 스택을 표현할 때에는 goods / bads / tryings id를 Count해서 표현해주고, 매주 월(or 일)요일에 초기화 // DB에는 데이터 잔재하게끔

//* 3. countPerWeeks 2.에서 