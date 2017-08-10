function _for(from, to, cb, current) {
  if (current == undefined) {
    current = from;
  }
  return cb(current)
  .then(function(res){
    if (from > to) {
      current--
    } else {
      current++
    }
    if (current != to) return _for(from, to, cb, current);
    return Promise.resolve(res);
  });
};

module.exports = _for;