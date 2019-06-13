var Mock = require("mockjs");
var BookFactory = require("./factory/book");

var newBooks = BookFactory.randomMulti();
var hotBooks = BookFactory.randomMulti();
var recommendBooks = BookFactory.randomMulti();
var allBooks = Mock.Random.shuffle([
  ...newBooks,
  ...hotBooks,
  ...recommendBooks
]);

var obj = {
  state:0,
  msg:'==='
}


/**
 * json-server不支持嵌套访问，如'books/new'
 * 需要在routes.js中设置rewriter
 *
 * 服务启动后db中的数据将不会改变
 */
module.exports = {
  "books": {...obj, data:allBooks},
  "books-new": {...obj, data:newBooks} ,
  "books-hot": {...obj, data:hotBooks},
  "books-recommend": {...obj, data:recommendBooks}
};
