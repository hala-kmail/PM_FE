import { PaymentType } from "../Types";

export function createData(
  Payment_type: string,
  Payment_Description: string,
  Payment_date: string,
  Amount: number,
  Document_Title: string,
  Document_Type: string,
  Document_File: File | null
): PaymentType {
  return {
    Payment_type,
    Payment_Description,
    Payment_date,
    Amount,
    Document_Title,
    Document_Type,
    Document_File,
  };
}
