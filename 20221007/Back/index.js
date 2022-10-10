const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const { sequelize, user } = require("./public");

app.use(
  cors({
    origins: ["http://localhost:3000"],
    // 현재 이 주소 허용
    // 배포 이후에 도메인 넣어주면 됨
  })
);

// cors error 해결 방법
// 에러가 나면 cors 설정을 해주어야한다

// cors란 브라우저 보안정책
// cors는 브라우저가 서로 다은 도메인/포트의 서버로 요청했을 때 발생한다.
// 접근을 허용해주어야한다. 해킹할 수도 있다.

// const options = {
//   origin: "http://localhost:3000",
// };

// app.use(cors{
// origin : "*", // 누가 오든 요청 허용
// origin : true, // 들어오는 요청 도메인/포트가 자동으로 origin에 들어감
// origin : "도메인", // 실제로 서비스 되는 도메인을 입력해줘서
// 해당 도메인만 접근할 수 있게 허용
// credential : true or false (사용자 인증이 필요한 리소스의 접근을 허용해줄지 안할지 쿠키 등등)
// });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

// 전달 받은 객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());

app.post("/login", async (req, res) => {
  let { id, pw } = req.body;
  console.log(req.body);
  if (!id && !pw) {
    res.send(false);
    return;
  }
  const users = await user.findOne({
    where: { user_id: id, user_pw: pw },
  });
  if (users) {
    console.log("11");
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/signup", async (req, res) => {
  let { id, pw } = req.body;
  const users = await user.findOne({
    where: { user_id: id },
  });
  if (!users) {
    user
      .create({
        user_id: id,
        user_pw: pw,
      })
      .then(() => {
        res.send("가입완료");
      });
  } else {
    res.send("아이디 중복");
  }
});

app.listen(5000, () => {
  console.log("서버 열림");
});
