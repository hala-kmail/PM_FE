import { createData } from "../tables/createPhaseTable";
import { PhaseType } from "../Types";

export const rows: PhaseType[] = [
    createData('Phase 1', 'Design UI', '2025-04-01', '2025-04-10', '10%', '9d', '100%', 'Completed'),
    createData('Phase 2', 'Build Backend', '2025-04-11', '2025-04-20', '20%', '9d', '50%', 'Pending'),
    createData('Phase 3', 'Integration', '2025-04-21', '2025-04-30', '30%', '9d', '0%', 'Overdue'),
  ];