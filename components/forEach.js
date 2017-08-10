function _forEach(array, cb, current, ret) {
  if (current == undefined) {
    current = 0;
  }
  if (ret == undefined) {
    ret = [];
  }
  return cb(current)
  .then(function(res){
    current++
    ret.push(res)
    if (current <= array.length-1) return _forEach(from, to, cb, array[current], ret);
    return Promise.resolve(ret);
  });
};

module.exports = _forEach;