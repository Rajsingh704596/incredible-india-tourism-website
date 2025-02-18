import express from "express";
import cors from "cors";
import { data } from "./router.js";

const app=express();

app.use(cors());

app.use("/api",data);

app.get("/",(req,res)=>{
    res.send("hi");
})

const Port = 3000;

app.listen(Port,()=>{
    console.log(`Backend Server is running at Port ${Port}`)
})