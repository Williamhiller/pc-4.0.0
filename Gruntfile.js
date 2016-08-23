
//包装函数
module.exports = function (grunt) {

  //任务配置，所有插件的配置信息
  grunt.initConfig({

    //获取 package.json 的信息
    pkg: grunt.file.readJSON('package.json'),

    //uglify插件的配置信息
    uglify: {
      options: {
        stripBanner: true,
        banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      target: {
        files: [{
          expand: true,
          cwd: 'public/js/',
          src: '*.js',
          dest: 'js/',
          ext: '.min.js'
        }]
      }
    },
    //jshint插件的配置信息
    jshint: {
      build: [ 'Gruntfile.js', 'js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    //csslint插件配置信息
    csslint: {
      build: ['Gruntfile.js', 'css/*.css'],
      options: {
        csslintrc: '.csslintrc'
      }
    },
    //cssmin插件配置信息
    cssmin: {
      options:{
        report:'min',
        beautify: {
          //中文ascii化，非常有用！防止中文乱码的神配置
          ascii_only: true
        }
      },
      target: {
        files: [{
          expand: true,
          cwd: 'public/css/',
          src: '*.css',
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    //imagemin插件配置信息
    imagemin: {
        dynamic: {
            options: {
                optimizationLevel: 7 // png图片优化水平，3是默认值，取值区间0-7
            },
            files: [
                {
                    expand: true, // 开启动态扩展
                    cwd: '../public/img/', // 当前工作路径
                    src: ['**/*.{png,jpg,gif}'], // 要出处理的文件格式(images下的所有png,jpg,gif)
                    dest: 'public/../public/img/' // 输出目录(直接覆盖原图)
                }
            ]
        }
    },
    //autoprefixer插件配置信息
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9'],
        map: true
      },
      // less: {
      //   src: '<%= pkg.path.dest.less %>*.css'
      // },
      css: {
        src: 'public/css/*.css'
      }
    },


    //csscomb插件配置信息  排序
    csscomb: {
      options: {
        config: 'config.json'
      },
      // less: {
      //   files: [
      //     {
      //       expand: true, //启用动态扩展
      //       cwd: '<%= pkg.path.dest.less %>', //批匹配相对lib目录的src来源
      //       src: '**.css', //实际的匹配模式
      //       dest: '<%= pkg.path.dest.less %>', //目标路径前缀
      //       ext: '.css' //目标文件路径中文件的扩展名.
      //     }
      //   ]
      // },
      css: {
        files: [
          {
            expand: true, //启用动态扩展
            cwd: 'public/css', //批匹配相对lib目录的src来源
            src: '*.css', //实际的匹配模式
            dest: 'public/css/', //目标路径前缀
            ext: '.css' //目标文件路径中文件的扩展名.
          }
        ]
      }
    },

    //watch插件配置信息
    watch: {
      // js: {
      //   files: ['public/js/*.js'],
      //   tasks: ['jshint','uglify' ],
      //   options: { spawn: false}
      // },
      css: {
        files: ['public/css/*.css'],
        tasks: ['csscomb','autoprefixer' ,'cssmin' ],
        options: { spawn: false}
      },
    }
  });
  //告诉grunt我们将使用插件
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');



  //告诉grunt当我们在终端中输入grunt时需要做些什么 （注意先后顺序）
  grunt.registerTask('default' , ['csscomb' , 'autoprefixer' ,'cssmin' ,'uglify', 'watch']);

};


