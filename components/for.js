function _for(from, to, cb, current) {
  if (current == undefined) {
    current = from;
  }
  if (current != to) {
    return cb(current)
    .then(function(){
      if (from > to) {
        current--
      } else {
        current++
      }
      _for(from, to, cb, current);
    });
  }
};

module.exports = _for;