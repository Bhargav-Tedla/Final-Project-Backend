const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const budgetModel = require('./models/budgetModel');
const router = express.Router();
const UserSchema = require('./models/userModel');

require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());

app.use('',express.static('public'));
app.use(express.json());

 
var url = 'mongodb+srv://bhargav:qyZLYgamNP7IoikS@cluster0.hyx8f.mongodb.net/test1?retryWrites=true&w=majority';
 
mongoose.connect(
 url,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
},
(err) => {
  if (err) throw err;
  console.log("MongoDB connection established");
}
);



app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});


app.use("/users",require("./routes/users"));    
app.use("/budget",require("./routes/budget"));
app.use("/auth",require("./routes/auth"));
