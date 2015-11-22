
module.exports = function(grunt) {

    var globalConfig = {
        output: 'dist',
        source: 'src',
        sourceScripts: "src/scripts",
        sourceStyles: "src/styles",
        scriptsDestFileName: "scripts",
        stylesDestFileName: "styles"
    };

    grunt.initConfig({
        globalConfig: globalConfig,
        processhtml: {
            dist: {

                files: {
                    '<%= globalConfig.output %>/index.html': '<%= globalConfig.source %>/index.html'
                }
            }
        },
        bowercopy: {
            options: {
                srcPrefix: "bower_components"
            },
            scripts: {
                options: {
                    destPrefix: "<%= globalConfig.output %>"
                },
                files: {
                    "angular.min.js": "angular/angular.min.js",
                    "d3.min.js": "d3/d3.min.js",
                    "jquery.min.js": "jquery/dist/jquery.min.js",
                    "bootstrap.min.js": "bootstrap/dist/js/bootstrap.min.js",
                    "cosmo.min.css": "bootstrap-theme-cosmo/cosmo.min.css"
                }
            }
        },
        "gh-pages": {
            options: {
                base: "<%= globalConfig.output %>"
            },
            src: ['**']
        },
        concat: {
            jstarget: {
                options: {
                    separator: ";\n"
                },
                src: [  "<%= globalConfig.sourceScripts %>/app.js",
                        "<%= globalConfig.sourceScripts %>/dataProviderService.js",
                        "<%= globalConfig.sourceScripts %>/stockChartController.js",
                        "<%= globalConfig.sourceScripts %>/lineChartDirective.js"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.scriptsDestFileName %>.js"
            },
            csstarget: {
                options: {
                    separator: "\n"
                },
                src: ["<%= globalConfig.sourceStyles %>/main.css", "<%= globalConfig.sourceStyles %>/lineChart.css"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.stylesDestFileName %>.css"
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            jstarget: {
                src: "<%= globalConfig.output %>/<%= globalConfig.scriptsDestFileName %>.js",
                dest: "<%= globalConfig.output %>/<%= globalConfig.scriptsDestFileName %>.min.js"
            }
        }
    });


    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks("grunt-processhtml");

    grunt.registerTask("default", ["concat", "uglify", "bowercopy", "processhtml"]);
    grunt.registerTask("publish", ["default", "gh-pages"])

};