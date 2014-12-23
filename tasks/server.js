module.exports = function(grunt){
    var express = require("express");
  grunt.registerTask("server", "static file development server", function(){
    var app, webPort, webRoot;
      webPort = grunt.config.get("server.web.port") || 8000;
      webRoot = grunt.config.get("server.base") || "dist";

      app = express();
      app.use(express.static("" + (process.cwd()) + "/" + webRoot));
      app.listen(webPort);
      grunt.log.writeln("Starting server here...");

      return app;

  });
};