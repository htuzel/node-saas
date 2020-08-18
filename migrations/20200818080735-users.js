module.exports = {
  async up(db, client) {
    await db.createCollection('users');
    await db.collection('users').insertOne(
      {
        "customer_id": 1,
        "id": 1,        
        "name": "Jack Done",
        "email": "jackdone@email.com",
        "created_at": new Date(),
        "updated_at": new Date()
      }
    );
    await db.collection('users').insertOne(
      {
        "customer_id": 2,
        "id": 1,        
        "name": "John Doe",
        "email": "johndoe@email.com",
        "created_at": new Date(),
        "updated_at": new Date()
      }
    );
  },

  async down(db, client) {
    await db.collection('users').drop();
  }
};
