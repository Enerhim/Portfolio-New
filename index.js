const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.use(express.static("src"))

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.listen(8080, () => {
    console.log(`App is running on port: ${PORT}`)
})