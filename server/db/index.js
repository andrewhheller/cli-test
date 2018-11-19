const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);



const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  }
})

const syncAndSeed = () => {
  return conn.sync({ force: true })
    .then(() => {
      return Promise.all([
        User.create({ name: 'picard' }),
        User.create({ name: 'riker' }),
        User.create({ name: 'data' }),
      ])
    })
}



module.exports = {
  syncAndSeed,
  models: {
    User
  }
}
