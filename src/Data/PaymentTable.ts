import { createData } from "../tables/createPaymentTable";
import { PaymentType} from "../Types";

// مكان استخدام createData
export const rows: PaymentType[] = [
  createData(
    'Payment',
    'Milestone one',
    '01/07/2025',
    1300,
    'Phase 1 Document',
    'phase1',
    null // أو ملف حقيقي إذا عندك
  )
];
