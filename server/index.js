var static = require("node-static");
var file = new static.Server("./server/public");
const port = process.env.PORT || 3000;
var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");
app.listen(port);
function handler(req, res) {
  file.serve(req, res, function name(err, dt) {
    if (err) {
      console.log(req.url, "url")
        var S_tream = fs.createReadStream(__dirname+"/public/index.html").pipe(res)
        S_tream.on('close', function () {
          res.end();
          return;
        })
    };
  });

}
console.log("open port:",port);

// io.on("connection", function (socket) {
//   socket.on("shipped", function (data) {

//   });
// });
