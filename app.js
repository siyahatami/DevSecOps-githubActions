


const port = 3000
const express = require('express')
const app = express()





// ------------------------------------------------------------------------------------

const mongoose = require("mongoose")
const mongooseOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // autoReconnect: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectInterval: 1000
};

const db_connection = mongoose.connection;
db_connection.on("error", console.error.bind(console, "connection to mongodb failed!"));
db_connection.once("open", function () {
  console.log("................... connection to mongodb was successful ...................");
}) 


module.exports.connect = async (_mongoUrl) => { 

  await mongoose.connect(_mongoUrl, mongooseOpts);


  
  // ------------------------------------------------------------------------------------




  const userModel = require("./src/models.js")


  app.get('/', (req, res) => {

    res.send('Hello Worldddd!')
  })



  app.get("/add", async (request, response) => {

    let _name = request.query.name;
    let _age = request.query.age;
    const user = new userModel({name: _name, age: _age});

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }

  });


  app.get("/list", async (request, response) => {
    
    var users = await userModel.find({})
    response.send(users); 
    
  });



  app.listen(port, () => {
    console.log(`.......... the app is listening on prot ${port} ...........`)
  })


}


module.exports.app = app