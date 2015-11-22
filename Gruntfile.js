
module.exports = function(grunt) {

    var globalConfig = {
        source: 'src',
        output: 'dist',
        sourceScripts: "src/scripts",
        sourceStyles: "src/styles",
        scriptsCompiledFileName: "scripts",
        stylesCompiledFileName: "styles"
    };

    grunt.initConfig({
        globalConfig: globalConfig,
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
                    "cosmo.min.css": "bootstrap-theme-cosmo/cosmo.min.css",
                }
            }
        },
        "gh-pages": {
            options: {
                base: "<%= globalConfig.output %>"
            },
            src: ['**']
        },
        copy: {
            files: {
                cwd: "src",
                src: "index.html",
                dest: "<%= globalConfig.output %>",
                expand: true
            }
        },
        concat: {
            jstarget: {
                options: {
                    separator: ";\n",
                },
                src: [  "<%= globalConfig.sourceScripts %>/app.js",
                        "<%= globalConfig.sourceScripts %>/dataProviderService.js",
                        "<%= globalConfig.sourceScripts %>/stockChartController.js",
                        "<%= globalConfig.sourceScripts %>/lineChartDirective.js"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.scriptsCompiledFileName %>.js",
            },
            csstarget: {
                options: {
                    separator: "\n",
                },
                src: ["<%= globalConfig.sourceStyles %>/main.css", "<%= globalConfig.sourceStyles %>/lineChart.css"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.stylesCompiledFileName %>.css",
            },
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            jstarget: {
                src: "<%= globalConfig.output %>/<%= globalConfig.scriptsCompiledFileName %>.js",
                dest: "<%= globalConfig.output %>/<%= globalConfig.scriptsCompiledFileName %>.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.loadNpmTasks("grunt-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-bowercopy");

    grunt.registerTask("default", ["concat", "uglify", "copy", "bowercopy"]);
    grunt.registerTask("publish", ["concat", "uglify", "copy", "bowercopy", "gh-pages"])

};