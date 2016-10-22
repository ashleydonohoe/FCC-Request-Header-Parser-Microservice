var express = require("express");
var app = express();

// app.set('port', (process.env.PORT || 5000));



// Catch-all error message
app.get("*", function(req, res) {
   res.send("Sorry, page not found. Please go to path /api/whoami/"); 
});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});
