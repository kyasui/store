module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          compress: true,
          yuicompress: true,
          cleancss: true,
          optimization: 2
        },
        files: {
          'saleor/static/css/style.css': 'saleor/static/less/style.less'
        }
      }
    },
    watch: {
      files: 'saleor/static/less/*',
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
};
