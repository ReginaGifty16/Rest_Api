
import express from "express";

import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';


const PORT = 4000;

const app = express();



     app.use(bodyParser.json());

     app.use('/users', usersRoutes);
     
     app.listen(PORT, () => console.log(`This app is listening  on port ${PORT}.....`) )











     