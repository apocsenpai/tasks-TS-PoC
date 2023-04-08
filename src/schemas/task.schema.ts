import Joi from "joi";

const taskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().max(200).required(),
  date: Joi.date().required(),
});

export default taskSchema;
