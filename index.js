'use strict'
var yaml = require('js-yaml')

module.exports = function (configd) {
  // Register plugin
  configd.parser(/\.ya?ml$/i, function (content) {
    return yaml.load(content)
  })
}
