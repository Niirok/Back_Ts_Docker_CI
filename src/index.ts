import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Sequelize } from 'sequelize';
import { Item } from "./Interfaces/item.interface";

const sequelize = new Sequelize('sqlite::memory:');

const app = express();
app.use(cors());
app.use(bodyParser.json());

TryConnection()



const items: Item[] = [];

app.get('/', (req, res) => {
    res.send('Hello world!');
  });

app.listen(3000, () => {
  console.log("Express server started on port 3000");
});

async function TryConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
}