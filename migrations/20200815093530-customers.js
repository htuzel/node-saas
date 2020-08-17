const randomstring = require('randomstring');

module.exports = {
  async up(db, client) {
    await db.createCollection('customers');
    await db.collection('customers').insertOne(
      {
        "name": "test",
        "email": "test@email.com",
        "password": "123456",
        "db_infos": {
          "db_name": "customer1_db",
          "db_host": "localhost",
          "db_username": "customer1_user",
          "db_password": "123456",
          "db_port": "27017"
        },
        "client_id": randomstring.generate(10),
        "created_at": new Date(),
        "updated_at": new Date()
      }
    );
    await db.collection('customers').insertOne(
      {
        "name": "test2",
        "email": "test2@email.com",
        "password": "123456",
        "db_infos": {
          "db_name": "customer2_db",
          "db_host": "localhost",
          "db_username": "customer2_user",
          "db_password": "123456",
          "db_port": "27017"
        },
        "client_id": randomstring.generate(10),
        "created_at": new Date(),
        "updated_at": new Date()
      }
    );
  },

  async down(db, client) {
    return db.collection('customers').drop();
  }
};
