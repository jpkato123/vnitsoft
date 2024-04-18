
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to mongoose db !"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000,() => {console.log('server is running on port 3000 !')})