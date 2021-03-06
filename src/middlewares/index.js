const { getToken, generateResponse } = require("../helpers");
const jwt = require("jsonwebtoken");
const { User } = require("../db/models");
const _ = require("lodash");

exports.permittedRoles = (...roles) => {
  return (req, res, next) => {
    const { user } = req;

    if (
      user &&
      user.roles.some(
        (_role) => roles.includes(_role.uid.toUpperCase()) && user.isActive
      )
    )
      next();
    else generateResponse(null, req, next, 403, "general.forbidden");
  };
};

exports.verifyToken = (req, res, next) => {
  try {
    const _token = getToken(req, res);

    if (_token) {
      jwt.verify(_token, process.env.JWT_SECRET_KEY, async (err, data) => {
        if (err) generateResponse(err, req, next, 401, "general.denied");
        else {
          const { uid } = data;

          const _user = await User.findOne({
            where: { uid },
            include: ["roles"],
          });
          if (
            _user &&
            _user.roles.some((_role) => _role.uid !== "PURGED") &&
            _user.isActive
          ) {
            req.user = _user;
            next();
          } else generateResponse(null, req, next, 401, "general.denied");
        }
      });
    } else generateResponse(null, req, next, 401, "general.denied");
  } catch (err) {
    generateResponse(err, req, next);
  }
};
