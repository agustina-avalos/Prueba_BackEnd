import express from "express";

import station from "./routes/station.js"
const app = express()




app.use(express.json())

app.use(station)
app.listen(3000)

console.log("listen port 3000")
