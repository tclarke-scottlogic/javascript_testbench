  var Mocha = require('mocha')
  var expect = require('chai').expect
  var mocha = new Mocha()
  // Bit of a hack, sorry!
  mocha.suite.emit('pre-require', this, 'solution', mocha)
 
  describe('do a test', function() {
    it('match matchy thing', function() {
      let input = [{
        dog: ["dawg", "mutt"],
        cat: ["kitty", "mogg"]
   	  }];
      
      expect(input).to.deep.equal([{
        dog: ["dawg", "mutt"],
        cat: ["kitty", "mogg"]
      }]);
    })

  })

  mocha.run()