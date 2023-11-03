// 1.创建行为
// var generators = require('yeoman-generator');

// module.exports = generators.Base.extend();


// 2.写构造器
// var generators = require('yeoman-generator');

// module.exports = generators.Base.extend({
//   // 构造函数
//   constructor: function () {

//     // 调用父类构造函数
//     generators.Base.apply(this, arguments);

//     // 执行的时候接收 `--coffee` 参数
//     this.option('coffee'); 
//   }
// });

// 3.增加自己的方法
// var generators = require('yeoman-generator');

// module.exports = generators.Base.extend({
//   method1: function () {
//     console.log('method 1 just ran');
//   },
//   method2: function () {
//     console.log('method 2 just ran');
//   }
// });

// app/index.js
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // 构造函数
  constructor: function () {

    // 调用父类构造函数
    generators.Base.apply(this, arguments);

    // 执行的时候接收 `--coffee` 参数
    this.option('coffee'); 
  },
  method1: function () {
    console.log('method 1 just ran');
  },
  method2: function () {
    console.log('method 2 just ran');
  }
});