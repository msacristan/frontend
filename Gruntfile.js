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
                src: "<%= files.js.src %>"
            }
        },
        watch: {
            js: {
                files: ["<%= files.js.src %>"],
                tasks: ["concat"]
            },
            less: {
                files: ["<%= files.less.src %>"],
                tasks: ["less:dev"]
            }
        },
        less: {
            options: {
                ieCompat: false
            },
            dev: {
                //options: {},
                src: "<%= files.less.src %>",
                dest: "generated/css/style.css"
            }
        },
        copy : {
            html:{
                src: "index.html",
                dest: "generated/index.html"
            }
        },
        server:{
            base: "generated",
            web: {
                port: 8000
            }
        }
    };
    grunt.initConfig(config);

    grunt.loadTasks("tasks");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["less","concat", "copy", "server","watch"]);
    grunt.registerTask("doLess", ["less"]);
};