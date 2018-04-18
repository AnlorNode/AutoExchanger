var static = require("node-static");
const port = process.env.PORT || 3000;
var app = require("http").createServer(handler);
var fs = require("fs");
app.listen(port);
function handler(req, res) { 
if (req.url==="/") {
  var S_tream = fs.createReadStream(__dirname+"/public/index.html").pipe(res)
    S_tream.on('close', function () {
      res.end();
      return;
    })
} else {

  if (fs.existsSync(__dirname+"/public"+req.url)) {
    var S_tream = fs.createReadStream(__dirname+"/public"+req.url).pipe(res)
    S_tream.on('close', function () {
      res.end();
      return;
    })
  } else {
    console.log(__dirname+"/public"+req.url,"err")
    res.end();
  }
}
}
console.log("open port:",port);

