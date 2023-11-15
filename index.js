import express from "express";
import conn from "./database.js";

import { addUser } from "./regis.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/api/daftar", addUser);

app.listen(3000, ()=>{
    console.log("Port telah dijalankan pada detik ke 3000");
})