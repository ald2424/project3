const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateContactUsInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.message = !isEmpty(data.message) ? data.message : "";
  
  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Message checks
  if (Validator.isEmpty(data.message)) {
    errors.message = "Please leave a brief message";
  }
  // Phone # checks
  if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone = "Phone Number must be at least 10 numbers...";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
