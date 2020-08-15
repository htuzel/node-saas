module.exports = {
  async up(db, client) {
    await db.createCollection('customers');
    await db.collection('customers').insertOne(
      {
        "name": "test",
        "email": "test@email.com",
        "password": "123456"
      }
    );
    await db.collection('customers').insertOne(
      {
        "name": "test2",
        "email": "test2@email.com",
        "password": "123456"
      }
    );
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    return db.collection('customers').drop();
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
