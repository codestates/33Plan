const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRouter = require("./routes/users");
const plannerRouter = require("./routes/planner");
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
  })
);
app.use(cookieParser());
app.use("/users", usersRouter);
app.use("/planner", plannerRouter);

app.listen(port, () => {
  console.log(`Server listening on Port http://localhost:${port}`);
});
