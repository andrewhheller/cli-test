const app = require('supertest')(require('../server/app'));
const expect = require('chai').expect;


describe('our app', () => {

  describe('get route', () => {

    it('returns hello world', () => {
      return app.get('/')
        .expect(200)
        .then(response => {
          expect(response.text).to.contain('hello world')
          expect(response.text).to.contain('Travis')
        })
    })

  })

})
