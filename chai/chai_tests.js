var chai = require('chai')

function blah(n){
  return n+2;
}

var expect = chai.expect;

expect(blah(7)).to.be.a('number')
expect(blah(7)).to.equal(9)
expect(blah(7)).to.greaterThan(8)
console.log("All passed");