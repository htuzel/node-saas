import mongoose from "mongoose";
import Customer from "./models/Customer";

mongoose.connect("mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE + "", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("open", () => {
  console.log("MongoDB connected.");
});
mongoose.connection.on("error", (error) => {
  console.log("MongoDB error: " + error);
});

let connectionMap;

export async function connectAllDb() {
  let customers = Customer.find({ });
  customers.then((data) => {
    connectionMap = 
      data
        .map(customer => {
          return {
            [customer.client_id]: mongoose.createConnection("mongodb://" + customer.db_infos.db_host + "/" + customer.db_infos.db_name, { useNewUrlParser: true, useUnifiedTopology: true })
          };
        })
        .reduce((prev, next) => {
          return Object.assign({}, prev, next);
        }, {});
  }).catch((error) => {
    console.log(error);
  });  
}

export function getConnectionByClientId(client_id) {
  if (connectionMap) {
    console.log(`Getting connection for ${client_id}`);
      
    return connectionMap[client_id];
  }
}