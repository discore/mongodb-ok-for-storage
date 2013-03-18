exports.is = function isOk(obj) {
  return Object.keys(obj).every(function (key) {
    var value = obj[key]

    if (key[0] === '$' || key.match(/\./)) return false;
    if (Object(value) === value) return isOk(value);

    return true
  })
}

exports.remove = function remove(obj) {
  var buf = {}

  Object.keys(obj).forEach(function (key) {
    var value = obj[key]

    if (key[0] !== '$' && !key.match(/\./))
      buf[key] = Object(value) === value ? remove(value) : value;
  })

  return buf
}