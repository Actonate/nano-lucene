module.exports = function(grunt) {

  grunt.initConfig({
    release: {
      options: {
        changelog: false,
        add: true,
        commit: true,
        tag: true,
        push: true,
        pushTags: true,
        npm: true,
        npmtag: false,
        indentation: '\t',
        beforeBump: [],
        afterBump: [],
        beforeRelease: [],
        afterRelease: [],
        updateVars: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-release');
};
