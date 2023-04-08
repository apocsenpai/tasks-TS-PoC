import Joi from "joi";

const responsibleSchema = Joi.object({
  name: Joi.string().required(),
});

export default responsibleSchema;