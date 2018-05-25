const expect = require('chai').expect

describe('Quando rodar a aplicação', function () {
  it('A aplicação deve rodar', function () {
    expect(true).to.eq(true)
  })
});


describe('Quando esse outro teste rodar', function() {
  it('A aplicação já vai estar rodando', function() {
    expect(false).to.eq(false)
  })
});
