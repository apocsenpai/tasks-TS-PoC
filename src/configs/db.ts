import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { tasks } = prisma;

export const { responsibles } = prisma;

export default prisma;
