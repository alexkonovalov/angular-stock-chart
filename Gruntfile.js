
module.exports = function(grunt) {

    var globalConfig = {
        output: 'dist',
        source: 'src',
        sourceScripts: "src/scripts",
        sourceStyles: "src/styles",
        buildDestFileName: "main",
        vendorDestFileName: "vendor",
        vendorSourceDir: "bower_components"
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
        "gh-pages": {
            options: {
                base: "<%= globalConfig.output %>"
            },
            src: ['**']
        },
        concat: {
            vendorJsTarget: {
                options: {
                    separator: ";\n"
                },
                src: [
                    "<%= globalConfig.vendorSourceDir %>/angular/angular.min.js",
                    "<%= globalConfig.vendorSourceDir %>/d3/d3.min.js",
                    "<%= globalConfig.vendorSourceDir %>/jquery/dist/jquery.min.js",
                    "<%= globalConfig.vendorSourceDir %>/bootstrap/dist/js/bootstrap.min.js"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.vendorDestFileName %>.js"
            },
            buildJsTarget: {
                options: {
                    separator: ";\n"
                },
                src: [  "<%= globalConfig.sourceScripts %>/app.js",
                        "<%= globalConfig.sourceScripts %>/dataProviderService.js",
                        "<%= globalConfig.sourceScripts %>/stockChartController.js",
                        "<%= globalConfig.sourceScripts %>/lineChartDirective.js"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.buildDestFileName %>.js"
            },
            buildCssTarget: {
                options: {
                    separator: "\n"
                },
                src: [  "<%= globalConfig.sourceStyles %>/main.css",
                        "<%= globalConfig.sourceStyles %>/lineChart.css"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.buildDestFileName %>.css"
            },
           vendorCssTarget: {
                options: {
                    separator: "\n"
                },
                src: [  "<%= globalConfig.vendorSourceDir %>/bootstrap-theme-cosmo/cosmo.min.css"],
                dest: "<%= globalConfig.output %>/<%= globalConfig.vendorDestFileName %>.css"
            }
        },
        clean: {
            build: ["<%= globalConfig.output %>"],
            js: ["<%= globalConfig.output %>/*.js" , "!<%= globalConfig.output %>/*.min.js", "!<%= globalConfig.output %>/vendor.js" ],
            css: ["<%= globalConfig.output %>/*.css" , "!<%= globalConfig.output %>/*.min.css", "!<%= globalConfig.output %>/vendor.css"]
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            jstarget: {
                src: "<%= globalConfig.output %>/<%= globalConfig.buildDestFileName %>.js",
                dest: "<%= globalConfig.output %>/<%= globalConfig.buildDestFileName %>.min.js"
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.output %>',
                    src: ['main.css'],
                    dest: '<%= globalConfig.output %>',
                    ext: '.min.css'
                }]
            }
        }
    });


    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask("default", ["clean:build", "concat", "uglify", "cssmin", "clean:js", "clean:css", "processhtml"]);
    grunt.registerTask("publish", ["default", "gh-pages"])

};