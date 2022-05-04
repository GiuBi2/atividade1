var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.get("/", async function(req, res){
  var resultado = await usuario.findAll(req.body);
  res.json(resultado);
});
app.get("/:id", async function(req, res){
  var resultado = await usuario.findOne({where:{id: req.params.id}});
  res.json(resultado);
})
app.post("/",  async function(req, res){
 var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req, res){
  var resultado = await usuario.update(req.body, { where:{ id:req.params.id }});
  res.json(resultado);
});

app.delete("/:id", async function(req, res){
  var resultado = await usuario.destroy({where:{id: req.params.id}});
  res.json(resultado);
});

app.listen(3000, function(){
  console.log("O servidor está fumegando");
});


