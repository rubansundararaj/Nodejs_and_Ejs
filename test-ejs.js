var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var expressLayout = require('express-ejs-layouts');


var app = express();

app.use(bodyparser());
app.use(cors());
app.use(expressLayout);
app.use(express.static('public'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
res.render('index',{
  founder:'Ruban',
  mentions:'Special thanks to Suwandy',
  owner:'Ruban 100%',
  platforms:[{name:'ndimensionshares'},
  {name:'ndimensions.xyz'},
  {name:'letscode.xyz'},
  {name:'ndgames'}
]

});

});

app.get('/about',(req,res) =>{

res.render('about');
});

app.listen(8000,()=>{

  console.log("Server running on port 8000");
});
