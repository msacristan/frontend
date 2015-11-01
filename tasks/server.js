module.exports = function(grunt){
    var express = require("express");
  grunt.registerTask("server", "static file development server", function(){
     var app, webPort, webRoot;
     webPort = grunt.config.get("server.web.port") || 8000;
     webRoot = grunt.config.get("server.base") || "dist";

     app = express();
     //app.use(express.compress()); // no longer in express
     //app.use(express.errorhandler()); // no longer in express
     //app.use(express.urlencoded());
     // middleware


     app.get("/secret", function(request, response){
       response.send({
         foo: "bar"
       });
     });

     app.post("/doStuff", function(request, response){
       var param = request.param("foo");
       response.send({
         foo: param
       });
     });

     app.use(express.static("" + (process.cwd()) + "/" + webRoot));
     app.listen(webPort);
     grunt.log.writeln("Starting server here...");

     return app;

  });
};
