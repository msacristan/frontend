module.exports = function(grunt){

    //task configuration
    var config  = {
        concat: {
            app: {
                dest: "generated/todo-app.js",
                src: [
                    "js/index.js"
                ]
            }
        },
        watch: {
            app: {
                files: ["<%= concat.app.scr %>"],
                tasks: ["concat"]
            }
        }
    };
    grunt.initConfig(config);

   // grunt.loadTasks("tasks");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("concatenar", ["concat","watch"]);
};