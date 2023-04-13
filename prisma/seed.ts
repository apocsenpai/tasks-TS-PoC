import prisma from "../src/configs/db.js";

const responsiblesData = [
  {
    name: "jose",
    cpf: "11111111111"
  },
  {
    name: "jon",
    cpf: "11111111112"
  },
];

const tasksData = [
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },

  {
    name: "lavar louça",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 1,
  },
  {
    name: "limpar a casa",
    description: "Lalsdklakda tem que limpar direito",
    date: new Date("2023-10-12"),
    responsible_id: 2,
  },
];

async function main() {
  try {
    await prisma.responsibles.createMany({
        data: responsiblesData,
      });
    await prisma.tasks.createMany({
        data: tasksData,
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
