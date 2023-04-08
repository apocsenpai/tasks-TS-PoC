import JoiImport from "joi";
import JoiDate from "@joi/date";

const Joi = JoiImport.extend(JoiDate);

const taskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().max(200).required(),
  date: Joi.date().format("DD/MM/YYYY").required(),
});

export default taskSchema;
