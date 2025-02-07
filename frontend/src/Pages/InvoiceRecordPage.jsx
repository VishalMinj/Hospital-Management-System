import { useEffect } from "react";
import { TransectionsAPI } from "../utils";
import { useState } from "react";

export default function InvoiceRecordPage() {
  const [invoices, setInvoices] = useState([]);

  useEffect(()=>{
    (async()=>{
      try {
        const data= await TransectionsAPI()
        
        setInvoices(data);
      } catch (error) {
        console.log(error);
        
      }
    })();
  },[])
  return (
    <>
      <div className="w-full min-h-[90dvh] mx-auto px-6 pt-4 bg-white shadow-lg rounded-2xl">
        <h2 className="text-[2rem] bg-[#118B50] text-white pb-1 font-semibold rounded text-center">
          Invoice Records
        </h2>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full border border-gray-200 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="border p-2">Date</th>
                <th className="border p-2">UPID</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 text-center">
                  <td className="border p-2">{invoice.time}</td>
                  <td className="border p-2">{invoice.payment_id}</td>
                  <td className="border p-2">₹{invoice.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
