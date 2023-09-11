
import {Connection} from './databse/db.js';
import express from 'express';
import cors from 'cors';
// const express = require('express');
import Routes from './Routes/route.js';
import bodyParser from 'body-parser';

const app = express();
app.use(cors())
app.use('/', Routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 8000;
Connection();
app.listen(PORT, () => {
console.log(`Your Server is runnning on port: ${PORT}`);
})