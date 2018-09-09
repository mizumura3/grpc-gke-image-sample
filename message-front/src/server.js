var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

var PROTO_PATH = __dirname + "/pb/message.proto";
var grpc = require("grpc-web-client").grpc;
var service = require("./proto/pb/message_pb_service");
var model = require("./proto/pb/message_pb");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "../tmp/" }).single("file"));

app.get("/up.html", function(req, res) {
  res.sendFile(__dirname + "/" + "up.html");
});

app.post("/file_upload", (req, res) => {
  var file = "../public/images" + req.file.originalname;

  fs.readFile(req.file.path, (err, data) => {
    const postMessageReq = new model.PostMessageRequest();
    const messageModel = new model.MessageModel();

    messageModel.setImage(data);
    postMessageReq.setMessage(messageModel);

    grpc.unary(service.Message.PostMessage, {
      request: postMessageReq,
      host: "http://localhost:8080",
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
          console.log(message.toObject());
        }
      }
    });
    console.log(res);

    if (err) {
      console.log(err);
    } else {
      response = {
        message: "Success!",
        filename: req.file.originalname
      };
    }
    res.end(JSON.stringify(response));
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("listening at http://%s:%s", host, port);
});
