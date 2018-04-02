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
      console.log(req.url, "err")
      res.end()
    };
  });
}
// io.on("connection", function (socket) {
//   socket.on("shipped", function (data) {

//   });
// });
