var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(bodyparser());
app.use(cors());

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
res.render('index',{
  founder:'Ruban',
  mentions:'Special thanks to Suwandy',
  owner:'Ruban 100%'
});

});

app.listen(8000,()=>{

  console.log("Server running on port 8000");
});
