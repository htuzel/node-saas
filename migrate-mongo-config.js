const config = {
  mongodb: {
    url: "mongodb://localhost:27017",

    databaseName: process.env.DB_DATABASE,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  migrationFileExtension: ".js"
};

module.exports = config;