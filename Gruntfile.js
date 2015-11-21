
module.exports = function(grunt) {

    grunt.initConfig({
        bowercopy: {
            options: {
                srcPrefix: "bower_components"
            },
            scripts: {
                options: {
                    destPrefix: "dist"
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
                base: "dist"
            },
            src: ['**']
        },
        copy: {
            files: {
                cwd: "tmpl",
                src: "index.html",
                dest: "dist",
                expand: true
            }
        },
        concat: {
            jstarget: {
                options: {
                    separator: ";\n",
                },
                src: ["scripts/app.js", "scripts/dataProviderService.js","scripts/stockChartController.js", "scripts/lineChartDirective.js"],
                dest: "dist/scripts.js",
            },
            csstarget: {
                options: {
                    separator: "\n",
                },
                src: ["styles/main.css", "styles/lineChart.css"],
                dest: "dist/styles.css",
            },
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            jstarget: {
                src: "dist/scripts.js",
                dest: "dist/scripts.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.loadNpmTasks("grunt-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-bowercopy");

    grunt.registerTask("default", ["concat", "uglify", "copy", "bowercopy"]);
};