import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increase,
  decrease,
  withdraw,
  deposite,
} from "../State/Action-Creator/index";
export default function Home() {
  const dispatch = useDispatch();
  const [amount,setAmount] = useState("")
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3">Add item to Cart</h2>
      <button
        className="btn btn-primary me-5"
        onClick={() => dispatch(increase(1))}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(decrease(1))}
      >
        Decrease
      </button>
      <br />
      {/* ..............Update Balance.................... */}
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {dispatch(deposite(amount),setAmount(""))}}
        >
          Deposite
        </button>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Amount"
          aria-label="Username"
          value={amount}
          aria-describedby="basic-addon1"
          onChange={(e)=>{setAmount(Number(e.target.value))}}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {dispatch(withdraw(amount),setAmount(""))}}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
