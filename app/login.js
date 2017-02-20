var https = require('https');
var utils = require('../utils.js');

module.exports = function(req,res) {
  utils.parseBody(req,function(err,body){
    if(body['uname'] === 'salam' && body['psw']==='salamdalloul'){
  res.writeHead(301,{
     Location: '/profile',
    'Set-Cookie': 'mycookie='+body['uname']}
);
        res.end();}
            else {
              res.writeHead(301, { Location: '/' } );
                     res.end();
          }



  });




};
