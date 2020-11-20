let config = {};

config.port = 6008;

config.cachePages = true;
config.memcached = {
  'uri': 'ec2-35-172-190-19.compute-1.amazonaws.com:11211'
};

module.exports = config;