const { expressjwt: jwt } = require('express-jwt'); // ✅ Destructure expressjwt
const jwksRsa = require('jwks-rsa');
console.log("AUTH0_DOMAIN =", process.env.AUTH0_DOMAIN);
console.log("AUTH0_AUDIENCE =", process.env.AUTH0_AUDIENCE);

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
  requestProperty: 'auth',
});

module.exports = (req, res, next) => {
  checkJwt(req, res, (err) => {
    if (err) {
      console.error("JWT Error:", err);
      return res.status(401).json({ message: "Unauthorized" });
    }
    console.log("✅ JWT Validated:", req.auth?.sub);
    next();
  });
};
