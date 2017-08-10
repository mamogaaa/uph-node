function _while(condition, cb) {
  if (typeof condition == 'function' && cb) {
    condition = condition();
  }

  if (typeof condition == 'function' && !cb) {
    cb = condition;
    condition = true;
  }
  return cb()
  .then(function(res){
    if (condition) return _while(condition, cb);
    return Promise.resolve(res);
  });
};

module.exports = _while;