// Setting the require for npm package "Express"
var express = require("express");

// Setting the the initial port
var PORT = process.env.PORT || 8080;

// Set up the Express app to take care of the parsing of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes:
// Where I point my chosen server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener:
// This line of code will initiate the chosen server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
