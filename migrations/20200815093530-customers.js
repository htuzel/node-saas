const randomstring = require('randomstring');

module.exports = {
  async up(db, client) {
    await db.createCollection('customers');
    await db.collection('customers').insertOne(
      {
        "id": 1,
        "name": "test",
        "email": "test@email.com",
        "password": "123456",
        "client_id": randomstring.generate(10),
        "client_secret": randomstring.generate(20),
        "created_at": new Date(),
        "updated_at": new Date()
      }
    );
    await db.collection('customers').insertOne(
      {
        "id": 2,
        "name": "test2",
        "email": "test2@email.com",
        "password": "123456",
        "client_id": randomstring.generate(10),
        "client_secret": randomstring.generate(20),
        "created_at": new Date(),
        "updated_at": new Date()
      }
    );
  },

  async down(db, client) {
    return db.collection('customers').drop();
  }
};
