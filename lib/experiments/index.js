'use strict';
const symbol = require('../utilities/symbol');

let experiments = {
  CONFIG_CACHING: symbol('config-caching'),
  MODULE_UNIFICATION: symbol('module-unification'),
};

Object.freeze(experiments);

module.exports = experiments;
