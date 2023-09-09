
import {Connection} from './databse/db.js';
import express from 'express';
// const express = require('express');
const app = express();
const PORT = 8000;
Connection();
app.listen(PORT, () => {
console.log(`Your Server is runnning on port: ${PORT}`);
})