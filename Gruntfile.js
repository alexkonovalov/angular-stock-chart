
module.exports = function(grunt) {

    grunt.initConfig({
        'gh-pages': {
            options: {
                base: "dist"
            },
            src: ["**"]
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
                src: "scripts/scripts.js",
                dest: "scripts/scripts.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-gh-pages");
    grunt.loadNpmTasks("grunt-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");


    grunt.registerTask("default", ["concat", "uglify", "copy"]);
};