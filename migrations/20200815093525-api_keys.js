module.exports = {
  async up(db, client) {
    await db.createCollection('api_keys');
    await db.collection('api_keys').insertOne(
      {
        "tenant_id": 1,
        "client_id": "",
        "client_secret": ""
      }
    );
    await db.collection('api_keys').insertOne(
      {
        "tenant_id": 2,
        "client_id": "",
        "client_secret": ""
      }
    );
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    return db.collection('api_keys').drop();
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
