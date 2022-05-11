import React from "react";
import Minibasket from "./Minibasket";

const Header = ({
  filterItem,
  menuItems,
  setItems,
  menu,
  cartLists,
  clearCart,
  decrease,
  addToCart,
}) => {
  return (
    <div className="header">
      <div className="header__top">
        <h1 className="header--title">Order Your Favourite Dish</h1>

        <Minibasket
          cartLists={cartLists}
          clearCart={clearCart}
          decrease={decrease}
          addToCart={addToCart}
        />
      </div>
      <hr />
      <div className="header--link container">
        {menuItems.map((val, id) => {
          return (
            <button
              className="header--link--btn"
              key={id}
              onClick={() => filterItem(val)}
            >
              {val}
            </button>
          );
        })}

        <button className="header--link--btn" onClick={() => setItems(menu)}>
          All
        </button>
      </div>
    </div>
  );
};

export default Header;
