const express = require("express");
const app = express();

const PORT = process.env.port || 8080;

app.use(express.static("src"))

app.listen(8080, () => {
    console.log(`App is running on port: ${PORT}`)
})