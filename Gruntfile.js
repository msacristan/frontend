module.exports = function(grunt){

    //task configuration
    var config  = {
        concat: {
            app: {
                dest: "generated/js/todo-app.js",
                src: [
                    "js/index.js"
                ]
            }
        },
        watch: {
            app: {
                files: ["<%= concat.app.scr %>"],
                tasks: ["concat", "less"]
            }
        },
        less: {
            options: {
                ieCompat: false
            },
            dev: {
                //options: {},
                files: {"generated/css/style.css" : "css/style.less"}
            }
        }
    };
    grunt.initConfig(config);

   // grunt.loadTasks("tasks");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("concatenar", ["concat","watch"]);
    grunt.registerTask("doLess", ["less"]);
};