import React, { useEffect, useState } from "react";

const Minibasket = ({ cartLists, clearCart, decrease, addToCart }) => {
  const totalPrice = cartLists.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="btn-group header__basket">
      <button
        type="button"
        className="btn btn-success dropdown-toggle "
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        id="dropdownMenuClickableInside"
      >
        <svg
          cursor="pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#dbebfa"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>{" "}
        - {cartLists.length}
      </button>
      <ul className="dropdown-menu">
        {cartLists.length > 0 ? (
          cartLists.map((c) => (
            <li className="basket" key={c.id}>
              <img className="basket__img" src={c.image} alt="#" />
              <div className="basket__group">
                <h3 className="basket__name">{c.name}</h3>
                <div className="basket__quantity">
                  <button
                    className="btn btn-warning  m-r"
                    onClick={() => decrease(c)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <h2>{c.quantity}</h2>
                  <button
                    className="btn btn-warning m-l"
                    onClick={() => addToCart(c)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <h3>Sepetiniz boş !!!</h3>
        )}

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <h3 className="dropdown-item" href="#">
            Total : $ {totalPrice}
            <button
              className="btn btn-danger m-l-30"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Minibasket;
