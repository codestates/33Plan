import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
})