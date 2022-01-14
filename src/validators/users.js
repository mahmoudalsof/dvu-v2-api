const { check } = require("express-validator");

exports.usersValidator = (action) => {
  switch (action.toLowerCase()) {
    case "create":
      return [
        check("firstName")
          .exists()
          .withMessage("validations.user.firstName")
          .not()
          .isEmpty()
          .isString(),
        check("lastName")
          .exists()
          .withMessage("validations.user.lastName")
          .not()
          .isEmpty()
          .isString(),
        check("email")
          .exists()
          .withMessage("validations.user.email")
          .not()
          .isEmpty()
          .isString()
          .isEmail(),
        check("mobile")
          .exists()
          .withMessage("validations.user.mobile")
          .not()
          .isEmpty()
          .isString(),
        check("whatsApp")
          .exists()
          .withMessage("validations.user.whatsApp")
          .not()
          .isEmpty()
          .isString()
          .optional(),
          check("password")
          .exists()
          .withMessage("validations.user.password")
          .isString()
          .not()
          .isEmpty(),
      ];
    case "update-user-status":
      return [
        check("codes")
          .exists()
          .withMessage("general.codes")
          .not()
          .isEmpty()
          .isArray(),
        check("isActive")
          .exists()
          .withMessage("validations.user.isActive")
          .not()
          .isEmpty()
          .isBoolean(),
      ];
    case "update":
      return [
        check("code")
          .exists()
          .withMessage("general.code")
          .not()
          .isEmpty()
          .isString(),
      ];
    case "delete":
      return [
        check("code")
          .exists()
          .withMessage("general.code")
          .not()
          .isEmpty()
          .isString()
      ];
  }
};
