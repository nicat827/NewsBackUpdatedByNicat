const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://esmer2708:Admin123@app.tgqsqlp.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to Mongo DB!'));