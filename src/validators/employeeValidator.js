const Joi = require('joi');

const employeeSchema = Joi.object({
  id: Joi.number().required,
  first_name: Joi.string().min(2).required(),
  last_name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid('Male', 'Female').required(),
  job: Joi.string().required(),
  salary: Joi.number().positive().required(),
});

module.exports = { employeeSchema };
