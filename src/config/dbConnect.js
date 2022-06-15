import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:123@nodejstreinamento.af5q3.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;