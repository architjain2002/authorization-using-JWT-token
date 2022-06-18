const jwt = require("jsonwebtoken");

exports.authorizeToken = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer Token

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }

    req.authUser = user;
    next();
  });
};
