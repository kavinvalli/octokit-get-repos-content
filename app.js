require("dotenv").config();
const express = require("express");

const app = express();
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));
