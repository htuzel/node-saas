import { getNamespace } from 'continuation-local-storage';

import mongoose from 'mongoose';
import Tenant from './models/Tenant';

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_DATABASE + '', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('open', () => {
  console.log('MongoDB connected.');
});
mongoose.connection.on('error', (error) => {
  console.log('MongoDB error: ' + error);
});

let connectionMap;

export async function connectAllDb() {
  let tenants = Tenant.find({ });
  tenants.then((data) => {
    connectionMap = 
      data
        .map(tenant => {
          return {
            [tenant.slug]: mongoose.createConnection('mongodb://' + tenant.db_host + '/' + tenant.db_name, { useNewUrlParser: true, useUnifiedTopology: true })
          }
        })
        .reduce((prev, next) => {
          return Object.assign({}, prev, next);
        }, {});
  }).catch((error) => {
    console.log(error);
  });  
}

export function getConnectionBySlug(slug) {
  if (connectionMap) {
    console.log(`Getting connection for ${slug}`);
      
    return connectionMap[slug];
  }
}

export function getConnection() {
  const nameSpace = getNamespace('unique context');
  const conn = nameSpace.get('connection');

  if (!conn) {
    throw 'Connection is not set for any tenant database.';
  }

  return conn;
}