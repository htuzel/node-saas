import "./env";
import express from "express";
import bodyParser from "body-parser";

import connectionManager from "./connectionManager";

import routes from "./routes/index";

import Customer from "./models/Customer";

import jwt from "jsonwebtoken";
import verifyToken from "./middlewares/verifyToken";

const PORT = 9090;

const app = express();

app.set("port", PORT);
app.use(bodyParser.json());

app.set("api_secret_key", process.env.API_SECRET_KEY);

app.get("/", (req, res, next) => {
  res.send("Root Url");
});

app.post("/token", async (req, res, next) => {
  let customer = Customer.findOne({ "client_id": req.body.client_id });
  customer.then((data) => {
    if (data) {
      if (req.body.client_secret === data.client_secret) {
        const payload = {
          id: data.id,
          client_id: req.body.client_id
        };
        const token = jwt.sign(payload, req.app.get("api_secret_key"), {
          expiresIn: 720
        });
        res.json({
          token
        });
      } else {
        res.json({
          message: "client_secret is invalid."
        });
      }
    } else {
      res.json({
        message: "client_id is invalid."
      });
    }    
  }).catch((error) => {
    res.json({
      message: error
    });
  });
});

app.use("/api", verifyToken);
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});