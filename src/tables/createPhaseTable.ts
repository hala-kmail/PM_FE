import { PhaseType } from "../Types";

export function createData(
    Phase: string,
    Task_Description: string,
    Start_date: string,
    End_date: string,
    Weight: string,
    duration: string,
    Percentage: string,
    Status: 'Completed' | 'Overdue' | 'Pending'
  ): PhaseType {
    return { Phase, Task_Description, Start_date, End_date, Weight, duration, Percentage, Status };
  }