const express = require("express");
const ToDoRoute = express.Router();
const { ToDoList } = require("../models/UserToDos");
const { DoneToDo } = require("../models/DoneToDo");
const JWT = require("jsonwebtoken");

ToDoRoute.post("/TodoList/:token", async (req, res) => {
  const params = req.params.token;

  const RenderToken = JWT.verify(params, process.env.SECRET_KEY);
  const check = RenderToken.Userid;
  const { toDo } = req.body;
  const Todo = await ToDoList.create({ text: toDo, user: check });
  res.json("done");
});

ToDoRoute.get("/SeeUserTodos/:token/:nr", async (req, res) => {
  let nr = Number(req.params.nr);

  try {
    const token = req.params.token;
    const decryptToken = JWT.verify(token, process.env.SECRET_KEY);
    const tokenToString = decryptToken.Userid;
    const seeAllUserTodo = await ToDoList.find({ user: tokenToString }).sort({
      createdAt: nr ? nr : -1,
    });
    res.send(seeAllUserTodo);
  } catch (err) {
    console.error("error");
  }
});

ToDoRoute.get("/DoneToDoCreate/:ToDoId", async (req, res) => {
  const doneId = req.params.ToDoId;
  const ToDoId = await ToDoList.findOne({ _id: doneId });
  const IdtoString = ToDoId.user;
  const Done = await DoneToDo.create({ text: ToDoId.text, user: IdtoString });
  res.json("");
});

ToDoRoute.get("/deleteTodo/:ToDoId", async (req, res) => {
  const ToDoId = req.params.ToDoId;
  const deleteTodo = await ToDoList.deleteOne({ _id: ToDoId });
  res.json("");
});

ToDoRoute.get("/DoneToDo/:token/:nr", async (req, res) => {
  const nr = Number(req.params.nr);
  const token = req.params.token;
  console.log(nr);
  const verify = JWT.verify(token, process.env.SECRET_KEY);
  const user_id = verify.Userid;
  const idData = await DoneToDo.find({ user: user_id }).sort({
    createdAt: nr ? nr : -1,
  });
  res.json(idData);
});

ToDoRoute.get("/reset/:objectId/:token", async (req, res) => {
  const token = req.params.token;
  const objectId = req.params.objectId;

  const borrow = await DoneToDo.findOne({ _id: objectId });
  const text = borrow.text;
  const verify = JWT.verify(token, process.env.SECRET_KEY);
  const userId = verify.Userid;
  const resetTodo = await ToDoList.create({ text: text, user: userId });
  const erase = await DoneToDo.deleteOne({ _id: objectId });
});

ToDoRoute.get("/test/:para/:token", async (req, res) => {
  const params = req.params.para;
  const token = req.params.token;
  const decryptToken = JWT.verify(token, process.env.SECRET_KEY);
  const userId = decryptToken.Userid;
  var regexstring = `${params}`;
  var regexp = new RegExp(regexstring, "i");
  const regFind = await ToDoList.find({ user: userId, text: regexp }).sort({
    createdAt: -1,
  });

  res.json(regFind);
});

ToDoRoute.get("/testDoneToDo/:para/:token", async (req, res) => {
  const nr = req.params.nr;
  console.log(nr);
  const params = req.params.para;
  const token = req.params.token;
  const decryptToken = JWT.verify(token, process.env.SECRET_KEY);
  const userId = decryptToken.Userid;
  var regexstring = `${params}`;
  var regexp = new RegExp(regexstring, "i");
  const regFind = await DoneToDo.find({ user: userId, text: regexp }).sort({
    createdAt: -1,
  });

  res.json(regFind);
});

exports.ToDoRoute = ToDoRoute;
