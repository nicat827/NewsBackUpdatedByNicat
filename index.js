
const express = require("express");
require("dotenv").config();
// const PORT = process.env.PORT || 3031;
const PORT = 8080;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
require('./config/db.js')
const user_router = require('./routers/user.router.js');

app.use('/api/users', user_router);

// const mongoose = require("mongoose");

// //Joi schema 


// //Mongo DB Publisher schema
// const PublishersSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     email: String,
//     backgroundImg: String,
//     profileImg: String,
//     name: String,
//     description: String,
//     joinedDate : Date,
//   });
//   const PublisherModel = mongoose.model("Publisher", PublishersSchema);
  
//   // get all publishers
//   app.get("/api/publishers", async (req, res) => {
//     try {
//       const publishers = await PublisherModel.find({});
//       if (publishers.length == 0) {
//         res.status(204).send({
//           message: "empty array",
//         });
//       } else {
//         res.status(200).send({
//           message: "success",
//           data: publishers,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching publishers:", error);
//       res.status(500).send({
//         message: "Internal Server Error",
//       });
//     }
//   });
//   //publishers id
//   app.get("/api/publishers/:id", async (req, res) => {
//     const { id } = req.params;
//     const data = await PublisherModel.findById(id);
//     if (data !== undefined) {
//       res.status(200).send(data);
//     } else {
//       res.status(204).send("data not found!");
//     }
//   });
//   //post publisher
//   app.post("/api/publishers", async (req, res) => {
//     const newPublisher = new PublisherModel(req.body);
//     await newPublisher.save();
//     res.status(201).send({
//       message: "data posted successfully",
//       data: newPublisher,
//     });
//   });


  
app.listen(PORT, () => {
    console.log(`app listening on PORT:${PORT}`);
  });
  
  