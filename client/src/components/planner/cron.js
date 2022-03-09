const cron = require("node-cron");

cron.schedule("* * * * * *", function () {
  console.log("매 초 마다 작업 실행 :", new Date().toString());
});