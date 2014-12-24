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
                ]
            },
            html: {
                src: [
                    "index.html"
                ]
            }
        },
        concat: {
            app: {
                dest: "generated/js/todo-app.js",
                src: "<%= files.js.src %>"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ["<%= files.html.src %>"],
                tasks: ["copy"]
            },
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
            },
            dist:{
                options: {
                    cleancss: true,
                    compress: true
                },
                    src: "<%= files.less.src %>",
                    dest: "dist/css/style.css"
                }
        },
        copy : {
            html:{
                files: {
                    "generated/index.html" : "<%= files.html.src %>",
                    "dist/index.html" : "<%= files.html.src %>"
                }
            }
        },
        server:{
            base: "generated",
            web: {
                port: 8000
            }
        },
        open:{
            dev:{
                path: "http://localhost:<%= server.web.port %>"
            }
        },
        uglify:{
            dist: {
                src: "<%= concat.app.dest %>", // input from the concat_sourcemap process
                dest: "dist/js/app.min.js"
            }

        },
        clean : {
            workspaces: [
                "dist", "generated"
            ]
        }
    };
    grunt.initConfig(config);

    grunt.loadTasks("tasks");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-open");

    grunt.registerTask("default", ["less","concat", "copy", "server", "open","watch"]);
    grunt.registerTask("build", ["clean", "less:dist", "concat", "uglify", "copy"]);
    grunt.registerTask("doLess", ["less"]);
    grunt.registerTask("neatHouse", ["clean"]);
};