import React from "react";
import Cartbody from "./Cartbody";

export default function Cart(props) {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "11rem", minHeight: "65vh" }}
      >
        <div className="row mb-4">
          <button
            className="btn col-2 btn-outline-warning"
            onClick={props.clrall}
          >
            CLEAR ALL
          </button>
        </div>
        {props.item.length ? (
          props.item.map((item, x) => (
            <Cartbody
              title={item.title}
              key={x}
              price={item.price}
              quantity={item.quantity}
              plus={props.plus}
              minus={props.minus}
              remove={props.remove}
              index={x}
            />
          ))
        ) : (
          <p className="fs-3 text-center text-secondary">
            Add Item To the Cart
          </p>
        )}
      </div>
      <div className="container">
        <div className="row my-2">
          <div className="col-9 text-center">
            <h5>Sub Total</h5>
          </div>
          <div className="col-3">
            <b>₹ {props.total.toFixed(2)}</b>
          </div>
        </div>
      </div>
    </>
  );
}
