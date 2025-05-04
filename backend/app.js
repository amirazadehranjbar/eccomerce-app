require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const errorHandler = require("./handlers/errorHandler");

const authRoutes = require("./routes/authRoutes");


app.use(cors(

    {
        origin: [process.env.CORS_ORIGIN, "https://eccomerce-app-git-master-amir-azadeh-ranjbars-projects.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    }

));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);


app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log("Test deploy after changing branch to master");

});