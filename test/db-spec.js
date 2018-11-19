const expect = require('chai').expect;

const { syncAndSeed } = require('../server/db')
const { User } = require('../server/db').models;



describe('models', () => {

  beforeEach(() => syncAndSeed())

  describe('User model', () => {

    it('there are three (3) users', () => {
      return User.findAll()
        .then(users => expect(users.length).to.equal(3))
    })

  })

})
