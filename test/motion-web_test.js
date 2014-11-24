/*global describe,it*/
'use strict';
var assert = require('assert'),
  motionWeb = require('../lib/motion-web.js');

describe('motion-web node module.', function() {
  it('must be awesome', function() {
    assert( motionWeb .awesome(), 'awesome');
  });
});
