export type Responsible = {
  id: number;
  name: string;
  createdAt: Date | string;
};

export type ResponsibleCreate = Omit<Responsible, "id" | "createdAt">;
