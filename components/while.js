function _while(condition, cb) {
  if (typeof condition == 'function' && cb) {
    condition = condition();
  }

  if (typeof condition == 'function' && !cb) {
    cb = condition;
    condition = true;
  }
  if (condition) {
    return cb()
    .then(function(){
      _while(condition, cb);
    });
  }
};

module.exports = _while;