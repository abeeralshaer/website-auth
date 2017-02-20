var fs = require('fs');
var utils = require('../utils.js');
var qs = require('querystring');


var login = fs.readFileSync(__dirname+'/../views/login.html','utf8');

module.exports = function(req,res) {
  var cookies = utils.parseCookies(req)['mycookie'];
console.log(cookies);
  if(cookies === 'salam'){
    console.log("inside IF");
  res.writeHead(301,{ Location: '/profile'});
    res.end();

  }else{
  res.end(login);
}

};
