// const Config = require('./memcached.config.js');
const Memcached = require('memcached');
const memcached = new Memcached('35.172.190.19:11211');

module.exports = (duration) => {
  return (req, res, next) => {
    const key = '_roomId_' + req.originalUrl || req.url;
    console.log('-----', memcached.connections);

    memcached.get(key, function (err, cachedBody) {
      console.log('-----', 'cachedBody'); 
      if (cachedBody) {
        res.send(cachedBody);
      } else {
        if (err) { 
          console.log(err); 
        } else {
          res.sendResponse = res.send;
          res.send = (body) => {
            memcached.set(key, body, duration, (err) => {
              if (err) { 
                console.log(err); 
              } 
            });
          };
        }
        next();
      }
    });
    // memcached.set(key, {name: 'm'}, duration, (err) => {
    //   console.log('e');
    //   if (err) { console.log(err); }
    //   // next();
    // });
    next();
  }; 
};

const responseCacheMiddleware = function(req, res, next) {
  const key = req.originalUrl;
  res.oldSend = res.send;
  res.send = function(body) {
    if (typeof body == 'string') {
      //console.log('set memcached KEY: \n%s\n\nVALUE:\n%s\n', key, body.toString().substr(0, 25));
      mem.set(key, body, 86400
        , (err, r)=>{ 
          //	console.log('mem.set()',err,r);
        }
      );
    }
    res.oldSend(body);
  };
  next();
};