var assert = require('assert')

var okForStorage = require('./')

assert.ok(!okForStorage.is({
  'a.b': 1
}))

assert.ok(okForStorage.is({
  'a': 1
}))

assert.ok(!okForStorage.is({
  a: {
    'a.b': 1
  }
}))

assert.ok(!okForStorage.is({
  a: {
    $b: 1
  }
}))

var obj1 = okForStorage.remove({
  a: {
    'a.b': 1,
    $set: true
  }
})

assert.ok(!obj1.a['a.b'])
assert.ok(!obj1.a.$set)