var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/api/whoami/", function(req, res) {
    
    console.log(req.headers["user-agent"]);
    var requestHeaderObject = {};
    requestHeaderObject.ipaddress = req.headers["x-forwarded-for"];
    requestHeaderObject.language = req.headers["accept-language"];
    requestHeaderObject.software = req.headers["user-agent"];
    res.send(requestHeaderObject); 
});


// Catch-all error message
app.get("*", function(req, res) {
   res.send("Sorry, page not found. Please go to path /api/whoami/"); 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});