var expect = require('chai').expect;


describe('random-rpg', function () {

  var rpg = require('../../');

  it('common', function () {
    expect(rpg).to.throw(RangeError);
    expect(rpg.bind(null, '#d#')).to.throw(Error);
    expect(rpg.bind(null, 'd')).to.throw(Error);
    expect(rpg('3d10')).to.have.length(3);
    expect(rpg('5d6')).to.have.length(5);
    expect(rpg('3d10', { sum: true })).to.be.a('number');
  });
});
