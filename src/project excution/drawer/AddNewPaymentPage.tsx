

import PaymentTable from "../execution tabs/paymentsTab";
import AddPayment from "./AddNewPaymentDrawer";
import { useState } from "react";

import { theme } from "../../theme/color";
import { FaPlus } from "react-icons/fa";

const PaymentsPage: React.FC = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal

  

  return (
    <div className="">
      <AddPayment isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 <div className="flex justify-between items-center">
      <span className="text-sm font-semibold  py-3" style={{ color: theme.black }}>Payment’s list</span>


             <button onClick={() => setIsModalOpen(true)} 
                           // Open the modal
                          className="text-white px-8 py-3 rounded-lg  flex items-center gap-2 whitespace-nowrap"
                          style={{
                            backgroundColor: theme.text,
                            border: `1px solid ${theme.text}`,
                            color: theme.white,
                          }}
                        >
                          <FaPlus className="text-base" />
                          <span className="text-sm font-medium">Add new payment</span>
                        </button>
      </div>
    
      
      {/* Table Section */}
      <div className="grid grid-cols-1 gap-2 space-y-6 mt-6">
        <div className="flex flex-col">
          <PaymentTable />
        </div>
      </div>
    </div>
  );
};


export default PaymentsPage;


