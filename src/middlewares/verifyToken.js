import jwt from "jsonwebtoken";

module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.body.token || req.query.token;

  if (token) {
    jwt.verify(token, req.app.get("api_secret_key"), (error, decoded) => {
      if (error) {
        res.json({
          message: error
        });
      } else {
        req.id = decoded.id;
        next();
      }
    });
  } else {
    res.json({
      message: "No token provided."
    });
  }
};