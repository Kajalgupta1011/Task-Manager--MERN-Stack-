
import {Connection} from './databse/db.js';
import express from 'express';
import cors from 'cors';
// const express = require('express');
import Routes from './Routes/route.js';

const app = express();
app.use(cors())
app.use('/', Routes);
const PORT = 8000;
Connection();
app.listen(PORT, () => {
console.log(`Your Server is runnning on port: ${PORT}`);
})