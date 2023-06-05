import News from "../models/News.js";

// Controller for GET /news
export const getAllNews = (req, res) => {
  News.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500);
      res.send({
        status: 500,
        message: error.message,
      });
    });

  return res;
};

export const getNewsById = (id, res) => {
  try {
    if (id) {
      // if id found
      News.findById(id)
        .then((doc) => {
          res.send(doc);
        })
        .catch((error) => {
          //if any error occurs while getting data
          res.status(500);
          res.send({
            message: error.message,
          });
        });
    } else {
      //if id not found
      throw new Error(`this id does not exist`);
    }
  } catch (error) {
    res.status(400);
    res.send({
      message: error,
    });
  }
  return res;
};

export const addNews = (data, res) => {
  News.create({
    title: data.title,
    description: data.description,
    url: data.url,
    author: data.author,
    image: data.image,
    language: data.language,
    category: data.category,
    published: new Date(),
  })
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500);
      res.send({
        message: error.message,
      });
    });
  return res;
};

export const updateNews = (id, body) => {
  let response = {};
  News.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((doc) => {
      response.status = 200;
      response.data = doc;
      response.isError = false;
    })
    .catch((err) => {
      response.status = 500;
      response.error = { error: err.message };
      response.isError = true;
    });
  return response;
};

export const deleteNews = (id, res) => {
  News.findByIdAndDelete(id)
    .then(() => {
      res.send({ message: "Delete Sucessful." });
    })
    .catch((err) => [res.send({ error: err.message })]);
  return res;
};
