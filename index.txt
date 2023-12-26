
const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
// const PORT = process.env.PORT || 3031;
const PORT = 8080;
const UsersSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  profileImg: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});
const UserModel = mongoose.model("User", UsersSchema);

// get all users
app.get("/api/users", async (req, res) => {
  const users = await UserModel.find({});
  if (users.length == 0) {
    res.status(204).send({
      message: "empty array",
    });
  } else {
    res.status(200).send({
      message: "succes",
      data: users,
    });
  }
});
//users id
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const data = await UserModel.findById(id);
  if (data !== undefined) {
    res.status(200).send(data);
  } else {
    res.status(204).send("data not found!");
  }
});
//users delete
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await UserModel.findByIdAndDelete(id);
  const users = await UserModel.find({});
  if (deletedUser === -1) {
    res.send({
      message: "data not found!",
    });
  } else {
    res.status(200).send({
      message: "data deleted successfully",
      data: users,
    });
  }
});

//post user
app.post("/api/users", async (req, res) => {
  const newUser = new UserModel(req.body);
  await newUser.save();
  res.status(201).send({
    message: "data posted successfully",
    data: newUser,
  });
});

//user patch
app.patch ("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndUpdate(id, req.body);
  const updatedUser = await UserModel.findById(id)
  res.send(updatedUser);

});


const PublishersSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    backgroundImg: String,
    profileImg: String,
    name: String,
    description: String,
    joinedDate : Date,
  });
  const PublisherModel = mongoose.model("Publisher", PublishersSchema);
  
  // get all publishers
  app.get("/api/publishers", async (req, res) => {
    try {
      const publishers = await PublisherModel.find({});
      if (publishers.length == 0) {
        res.status(204).send({
          message: "empty array",
        });
      } else {
        res.status(200).send({
          message: "success",
          data: publishers,
        });
      }
    } catch (error) {
      console.error("Error fetching publishers:", error);
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  });
  //publishers id
  app.get("/api/publishers/:id", async (req, res) => {
    const { id } = req.params;
    const data = await PublisherModel.findById(id);
    if (data !== undefined) {
      res.status(200).send(data);
    } else {
      res.status(204).send("data not found!");
    }
  });
  //post publisher
  app.post("/api/publishers", async (req, res) => {
    const newPublisher = new PublisherModel(req.body);
    await newPublisher.save();
    res.status(201).send({
      message: "data posted successfully",
      data: newPublisher,
    });
  });


  
app.listen(PORT, () => {
    console.log(`app listening on PORT:${PORT}`);
  });
  
  mongoose.connect('mongodb+srv://esmer2708:Admin123@app.tgqsqlp.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to Mongo DB!'));