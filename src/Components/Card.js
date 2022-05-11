import React, { useState } from "react";

const Card = ({
  menu,
  items,
  setItems,
  addToCart,
  visibleMenu,
  setVisibleMenu,
}) => {
  function eventMenuClick(e) {
    const nameSelection = e.currentTarget.textContent;

    setItems((menuList) => {
      return items.filter((item) => {
        if (item.category === nameSelection) {
          return console.log(item);
        }
        return null;
      });
    });
  }
  return (
    <div class="row around-xs">
      {items.map((i) => {
        const { id, image, name, price, description } = i;

        return (
          <div class="col-lg-4" key={id}>
            <div class="box">
              <div className="card">
                <div className="card--left">
                  <img className="card--left--image" src={image} alt="#" />
                </div>
                <div className="card--right">
                  <h2 className="card--right--title">{name}</h2>
                  <p className="card--right--desc">{description}</p>
                  <div className="card--right--group">
                    <div className="card--right--group--price">$ {price}</div>
                    <button
                      className="card--right--group--btn"
                      onClick={() => addToCart(i)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
