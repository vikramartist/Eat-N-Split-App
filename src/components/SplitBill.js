import "./bill.css";
import { useState } from "react";

export default function SplitBill({ data, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userExpense || !bill) return;
    onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);
  };

  return (
    <div className="message">
      <h3>Split a Bill with {data.name}</h3>
      <form className="split-form" onSubmit={(e) => handleSubmit(e)}>
        <section>
          <label htmlFor="bill">Bill Value</label>
          <input
            type="text"
            id="bill"
            name="bill"
            value={bill ? bill : ""}
            placeholder="Bill Value"
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </section>
        <section>
          <label htmlFor="expense">Your Expense</label>
          <input
            type="number"
            id="expense"
            name="expense"
            value={userExpense ? userExpense : ""}
            placeholder="Your Expense"
            onChange={(e) =>
              setUserExpense(
                Number(e.target.value) > bill
                  ? userExpense
                  : Number(e.target.value)
              )
            }
          />
        </section>
        <section>
          <label htmlFor="expensef">{data.name}'s Expense</label>
          <input
            type="number"
            id="expensef"
            name="expensef"
            disabled
            value={friendExpense ? friendExpense : ""}
          />
        </section>
        <section>
          <label htmlFor="option">Who is paying the bill</label>
          <select
            id="option"
            onChange={(e) => setWhoIsPaying(e.target.value)}
            value={whoIsPaying}
          >
            <option value="user">You</option>
            <option value="friend">{data.name}</option>
          </select>
        </section>
        <button className="form-btn">Split bill</button>
      </form>
    </div>
  );
}
