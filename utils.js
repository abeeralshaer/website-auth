var qs = require('querystring');

function parseBody(req,callback) {
  var body = '';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    callback(undefined,qs.parse(body));
  });
}
function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}



module.exports = {
  parseBody: parseBody,
  parseCookies: parseCookies
};
