let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    let page = req.url;
    let path = "./views/";

    res.setHeader("Content-Type", "text/html");

    switch (page) {
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;
      case "/contact-me":
        path += "contact-me.html";
        res.statusCode = 200;
        break;
      case "/contact":
        path += "contact-me.html";
        res.statusCode = 301;
        break;
      default:
        path += "404.html";
        break;
    }
    console.log(page);
    console.log(path);

    fs.readFile(path, function (err, data) {
      if (err) {
        console.log(err);
        res.end();
      }
      res.end(data);
    });
  })
  .listen(8080);
