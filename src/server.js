// const express = require("express");
// const https = require("https");
// const app = express();
// const cors = require("cors");
//
// app.use(cors());
// app.get("/shodan/data", function (req, res) {
//   const ip = "192.188.58.61";
//   const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
//   const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
//   https.get(url, function (response) {
//     console.log(response.statusCode);
//     var data = "";
//     response.on("data", function (chunck) {
//       data += chunck;
//     });
//     response.on("end", function () {
//       var list = JSON.parse(data);
//       console.log(list);
//       // console.table(list);
//       res.send(list);
//     });
//   });
// });
//
// app.listen(3001, function () {
//   console.log("SERVER IS RUNNING ON PORT 3001.");
// });
