import { useState } from "react";

export default function BillForm({ selectedFriend, updateFriendTotal }) {
  const [billTotal, setBillTotal] = useState();
  const [ownExpense, setOwnExpense] = useState();
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

    const friendExpense = billTotal - ownExpense;

    paid === "true"
      ? updateFriendTotal(selectedFriend.id, -friendExpense)
      : updateFriendTotal(selectedFriend.id, friendExpense);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-8 text-xl font-abril">
        Split the bill with{" "}
        <span className="underline">{selectedFriend.name}</span>
      </h1>
      <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
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
            onChange={(e) => setBillTotal(Number(e.target.value))}
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
            onChange={(e) => setOwnExpense(Number(e.target.value))}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="friend-expense" className="mr-4">
            {`${selectedFriend.name.split(" ")[0]}'s expense`}
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
            <option value="null">Select</option>
            <option value="true">You</option>
            <option value="false">{selectedFriend.name}</option>
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
