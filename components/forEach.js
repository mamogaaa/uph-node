function _forEach(array, cb, current, ret) {
  if (current == undefined) {
    current = 0;
  }
  if (ret == undefined) {
    ret = [];
  }
  return cb(array[current])
  .then(function(res){
    current++
    ret.push(res)
    if (current <= array.length-1) return _forEach(array, cb, current, ret);
    return Promise.resolve(ret);
  });
};

module.exports = _forEach;