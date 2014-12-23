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
            js: {
                files: ["<%= concat.app.scr %>"],
                tasks: ["concat"]
            },
            less: {
                files: ["<%= less.dev.scr %>"],
                tasks: ["less:dev"]
            }
        },
        less: {
            options: {
                ieCompat: false
            },
            dev: {
                //options: {},
                src: "css/style.less",
                dest: "generated/css/style.css"
            }
        }
    };
    grunt.initConfig(config);

   // grunt.loadTasks("tasks");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("default", ["less","concat","watch"]);
    grunt.registerTask("doLess", ["less"]);
};