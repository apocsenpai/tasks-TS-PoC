import { responsibles } from "../configs/db";
import { ResponsibleCreate } from "../utils/protocols/Responsible";

async function create({ name }: ResponsibleCreate) {
  return responsibles.create({
    data: {
      name,
    },
  });
}

async function findByName({ name }: ResponsibleCreate) {
  return responsibles.findFirst({
    where: {
      name,
    },
  });
}

export default { create, findByName };
