export default function InvoiceRecordPage() {
  const invoices = [
    { upid: "INV001", date: "2024-02-01", amount: "$120.50" },
    { upid: "INV002", date: "2024-02-05", amount: "$220.00" },
    { upid: "INV002", date: "2024-02-10", amount: "$85.75" },
  ];
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
                <tr key={invoice.upid} className="hover:bg-gray-50 text-center">
                  <td className="border p-2">{invoice.date}</td>
                  <td className="border p-2">{invoice.upid}</td>
                  <td className="border p-2">{invoice.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
