const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user.router");
const authRoute = require("./routes/auth.router");
const propertyRoute = require("./routes/property.router");


dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connect successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.use('/image', express.static(__dirname + "/image"));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/property", propertyRoute);



app.listen(process.env.PORT || 5000, () => {
    console.log("Back-end server is running....");
});