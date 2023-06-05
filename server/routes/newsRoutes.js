import express from "express";
const newsRouter = express.Router();
newsRouter.use(express.json());
import {
  getAllNews,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js";

// get all news form database    http://localhost:4002/news/get
newsRouter.get("/get", function (req, res) {
  const response = getAllNews(req, res);
  return response;
});

//get all news form database by id
newsRouter.get("/get/:id", function (req, res) {
  const id = req.params.id;
  const response = getNewsById(id, res);
  return response;
});

// add news into database
newsRouter.post("/add", function (req, res) {
  const data = req.body;
  const response = addNews(data, res);
  return response;
});

// update news by id
newsRouter.put("/update/:id", function (req, res) {
  const id = req.params.id;
  const body = req.body;
  const response = updateNews(id, body);
  if (!response.isError) {
    response.status(response.status);
    res.send(response.data);
  } else {
    response.status(response.status);
    res.send(response.error);
    res.status();
  }
});

// delete  news by id
newsRouter.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  const response = deleteNews(id, res);
  return response;
});

export default newsRouter;
