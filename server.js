const express = require("express");
const path = require("path");

// Server config
const app = express();
const PORT = process.env.PORT || 9001;

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static assets if in prod env
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  // Load index.html 
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// Start Server
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`));