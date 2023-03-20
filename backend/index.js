import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './routes/routes.js';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

app.use(cors());

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Routes);

Connection(username, password);

app.listen(PORT, () => 
    console.log(`Your server is running syccessfully on port: ${PORT}`)
)

