import alertify from "alertifyjs";
import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const menu = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/09/28/18/04/food-2796350__340.jpg",
    name: "egg",
    category: "breakfast",
    price: "12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/04/00/bread-1867208__340.jpg",
    name: "toast",
    category: "breakfast",
    price: "10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/photos/melemen-picture-id1254676639?b=1&k=20&m=1254676639&s=170667a&w=0&h=b4TrrWtaYrKBtM_nhMrp3McD5pcwRiybtvloMapqKAU=",
    name: "menemen",
    category: "breakfast",
    price: "20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2016/11/13/22/06/breakfast-1822190__340.jpg",
    name: "breakfast plate",
    category: "breakfast",
    price: "12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",
    name: "pizza",
    category: "lunch",
    price: "25",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465__340.jpg",
    name: "hamburger",
    category: "lunch",
    price: "18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2017/01/24/20/30/soup-2006317__340.jpg",
    name: "soup",
    category: "lunch",
    price: "5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 8,
    image:
      "https://cdn.pixabay.com/photo/2021/02/09/03/53/thai-food-5997301__340.jpg",
    name: "chicken meat",
    category: "lunch",
    price: "25",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859__340.jpg",
    name: "meat",
    category: "dinner",
    price: "30",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 10,
    image:
      "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465__340.jpg",
    name: "hamburger",
    category: "dinner",
    price: "18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 11,
    image:
      "https://cdn.pixabay.com/photo/2015/06/24/13/31/barbecue-820010__340.jpg",
    name: "grid",
    category: "dinner",
    price: "40",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
  {
    id: 12,
    image:
      "https://cdn.pixabay.com/photo/2019/12/20/18/47/grill-4709068__340.jpg",
    name: "fish",
    category: "dinner",
    price: "25",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est?",
  },
];

function App() {
  const [items, setItems] = useState(menu);
  const [cartLists, setCartLists] = useState([]);

  // const addToCart = (b) => {
  //   console.log(cartLists);
  //   //1- dizinin içinde gez
  //   //2- gelen id ile dizinin içindeki id eşit ise quantity i artır.
  //   //3- değilse yeni elemanı ekle
  //   const addetItem = cartLists.find((c) => c.b.id === b.id);
  //   if (addetItem) {
  //     addetItem.quantity += 1;
  //     setCartLists([...cartLists]);
  //     // console.log(addetItem);
  //   } else {
  //     setCartLists([...cartLists, { b, quantity: 1 }]);
  //   }
  // };

  const addToCart = (product) => {
    const ProductExist = cartLists.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartLists(
        cartLists.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartLists([...cartLists, { ...product, quantity: 1 }]);
    }
    alertify.success(product.name + "  " + "added to cart!", 2);
  };

  // const increase = (id) => {
  //   let currentItem = cartLists.find((i) => i.id === id);
  //   currentItem.quantity += 1;
  //   setCartLists([...cartLists]);
  //   console.log(currentItem);
  // };

  // const decrease = (id) => {
  //   let currentItem = cartLists.find((i) => i.id === id);
  //   if (currentItem.quantity === 1) {
  //     console.log(currentItem);
  //     //silme işlemi yapılacak
  //     console.log(cartLists);
  //     let newCartList = cartLists.filter((f) => {
  //       if (f.b.id === id) {
  //         console.log("hello");
  //       } else {
  //         console.log("by");
  //       }
  //     });
  //     setCartLists([...cartLists]);
  //   } else {
  //     currentItem.quantity -= 1;
  //     setCartLists([...cartLists]);
  //   }
  // };

  const decrease = (product) => {
    const ProductExist = cartLists.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartLists(cartLists.filter((item) => item.id !== product.id));
    } else {
      setCartLists(
        cartLists.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
    alertify.error(product.name + "  " + "removed from cart!", 2);
  };

  const menuItems = [...new Set(menu.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = menu.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItems(newItem);
  };

  const clearCart = () => setCartLists([]);

  return (
    <div className="App">
      <Header
        filterItem={filterItem}
        menuItems={menuItems}
        setItems={setItems}
        menu={menu}
        cartLists={cartLists}
        clearCart={clearCart}
        decrease={decrease}
        addToCart={addToCart}
      />
      <div style={{ padding: "0 40px" }}>
        {" "}
        <Card
          menu={menu}
          addToCart={addToCart}
          items={items}
          setItems={setItems}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
