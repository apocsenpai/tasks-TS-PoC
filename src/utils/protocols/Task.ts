export type Task = {
  id: number;
  name: string;
  description: string;
  date: Date | string;
  status: boolean;
  responsibleId: number;
  createdAt: Date | string;
};

export type TaskCreate = Omit<Task, "id" | "status" | "createdAt">;

export type TaskId = {
  id: number;
};

export type TaskPerResponsible = {
  name: string;
  totalTasks: number;
}