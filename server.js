let express = require('express');
let app = express();

const bodyParser = require('body-parser');
const path = require("path");

let port = 3030;

// set path for html to views dir
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

// middleware to parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// static files middleware
app.use(express.static(path.join(__dirname, 'views')));

// route handlers
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


// http
//   .createServer(function (req, res) {
//     let page = req.url;
//     let path = "./views/";

//     res.setHeader("Content-Type", "text/html");

//     switch (page) {
//       case "/":
//         path += "index.html";
//         res.statusCode = 200;
//         break;
//       case "/about":
//         path += "about.html";
//         res.statusCode = 200;
//         break;
//       case "/contact-me":
//         path += "contact-me.html";
//         res.statusCode = 200;
//         break;
//       case "/contact":
//         path += "contact-me.html";
//         res.statusCode = 301;
//         break;
//       default:
//         path += "404.html";
//         break;
//     }
//     console.log(page);
//     console.log(path);

//     fs.readFile(path, function (err, data) {
//       if (err) {
//         console.log(err);
//         res.end();
//       }
//       res.end(data);
//     });
//   })
//   .listen(8080);
