import { useState } from "react";

export default function BillForm() {
  const [billTotal, setBillTotal] = useState(0);
  const [ownExpense, setOwnExpense] = useState(0);
  const [paid, setPaid] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      ownExpense > billTotal ||
      ownExpense < 0 ||
      billTotal < 0 ||
      paid === null
    ) {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-4">Bill Form</h1>
      <form className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="bill-total" className="mr-4">
            Total Bill
          </label>
          <input
            type="number"
            name="bill-total"
            id="bill-total"
            className="border rounded px-4 py-2"
            placeholder="Enter bill total"
            value={billTotal}
            onChange={(e) => setBillTotal(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="own-expense" className="mr-4">
            Your expense
          </label>
          <input
            type="number"
            name="own-expense"
            id="own-expense"
            className="border rounded px-4 py-2"
            placeholder="Enter your expense"
            value={ownExpense}
            onChange={(e) => setOwnExpense(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="friend-expense" className="mr-4">
            Their expense
          </label>
          <input
            type="number"
            name="friend-expense"
            id="friend-expense"
            className="border rounded px-4 py-2"
            value={billTotal - ownExpense}
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="dropdown" className="mr-4">
            Who paid?
          </label>
          <select
            id="dropdown"
            onChange={(e) => setPaid(e.target.value)}
            required
          >
            <option value="true">You</option>
            <option value="false">Friend</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-36"
          onClick={onFormSubmit}
        >
          Split the bill
        </button>
      </form>
    </div>
  );
}
