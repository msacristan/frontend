module.exports = function(grunt){

    //task configuration
    var config  = {
        files: {
            less: {
                src: [
                    "css/style.less"
                ]
            },
            js: {
                src: [
                    "js/index.js"
                ]            }
        },
        concat: {
            app: {
                dest: "generated/js/todo-app.js",
                src: "<%= files.js.scr %>"
            }
        },
        watch: {
            js: {
                files: ["<%= files.js.scr %>"],
                tasks: ["concat"]
            },
            less: {
                files: ["<%= files.less.scr %>"],
                tasks: ["less:dev"]
            }
        },
        less: {
            options: {
                ieCompat: false
            },
            dev: {
                //options: {},
                src: "<%= files.less.scr %>",
                dest: "generated/css/style.css"
            }
        },
        copy : {
            html:{
                src: "index.html",
                dest: "generated/index.html"
            }
        }
    };
    grunt.initConfig(config);

   // grunt.loadTasks("tasks");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["less","concat", "copy","watch"]);
    grunt.registerTask("doLess", ["less"]);
};