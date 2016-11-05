module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          "assets/js/all.min.js": ["assets/js/all.js", "assets/js/index.js"]
        }
      }
    },
    bower_concat: {
      all: {
        dest: "assets/js/all.js",
        dependencies: {
          "underscore": "jquery",
          "backbone": "underscore"
        }
      }
    },
    watch: {
      js: {
        files: ["assets/js/index.js"],
        tasks: ['bower_concat', 'uglify']
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-bower-concat");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
};