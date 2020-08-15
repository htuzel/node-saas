module.exports = {
  async up(db, client) {
    await db.createCollection('tenants');
    await db.collection('tenants').insertOne(
      {
        "customer_id": 1,
        "db_name": "customer1_db",
        "db_host": "localhost",
        "db_username": "customer1_user",
        "db_password": "123456",
        "db_port": "27017"
      }
    );
    await db.collection('tenants').insertOne(
      {
        "customer_id": 2,
        "db_name": "customer2_db",
        "db_host": "localhost",
        "db_username": "customer2_user",
        "db_password": "123456",
        "db_port": "27017"
      }
    );
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    return db.collection('tenants').drop();
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
