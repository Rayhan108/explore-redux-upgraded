export interface ITask {
    id: string; // Unique identifier for the task
    title: string; // Title of the task
    description: string; // Detailed description of the task
    isComplete: boolean; // Indicates if the task is complete
    dueDate: string; // Due date for the task in ISO format
    priority: "low" | "medium" | "high"; // Priority level of the task
    assignedTo?:string | null;
}
export interface IUser{
    id:string;
    name:string;
}
