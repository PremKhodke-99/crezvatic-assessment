require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConfig = require('./db/dbConfig');
const userRouter = require('./routes/user.routes');

dbConfig();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server started at", PORT);
});