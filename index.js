exports.is = function isOk(obj) {
  return !Object.keys(obj).some(function (key) {
    var value = obj[key]

    if (key[0] === '$' || key.match(/\./)) return true;
    if (Object(value) === value) return !isOk(value);

    return false
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