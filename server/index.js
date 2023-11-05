
import {Connection} from './databse/db.js';
import express from 'express';
import cors from 'cors';
import Routes from './Routes/route.js';

const app = express();
app.use(cors(
    {
        origin: ["https://task-manager-mern-stack-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentialS: true
    }
))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8000;
Connection();
app.listen(PORT, () => {
console.log(`Your Server is runnning on port: ${PORT}`);
})