import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">Restaurant</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const restaurantData = [
  {
    id: "dom-1a2b3c4d",
    img: "https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0",
    name: "Dominos",
    rating: "4.3",
    time: "15-20 mins",
    food: "Burgers, Fast Food, Rolls, Wraps...",
    location: "Delhi"
  },
  {
    id: "kfc-4e5f6g7h",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_73011.JPG",
    name: "KFC",
    rating: "4.1",
    time: "20-25 mins",
    food: "Chicken, Fast Food",
    location: "Mumbai"
  },
  {
    id: "ph-9i0j1k2l",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/9318ae22-5fa2-4950-9cf1-37920ae76d93_78973.jpg",
    name: "Pizza Hut",
    rating: "4.4",
    time: "10-15 mins",
    food: "Pizza, Italian",
    location: "Bangalore"
  },
  {
    id: "bk-3m4n5o6p",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_311806.JPG",
    name: "Burger King",
    rating: "4.2",
    time: "12-18 mins",
    food: "Burgers, Fast Food",
    location: "Chennai"
  },
  {
    id: "sub-7q8r9s0t",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/9318ae22-5fa2-4950-9cf1-37920ae76d93_78973.jpg",
    name: "Subway",
    rating: "4.0",
    time: "15-20 mins",
    food: "Subs, Sandwiches, Salads",
    location: "Hyderabad"
  },
  {
    id: "tb-1u2v3w4x",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/d3b3db238b6448c3f297c851e9d0b96b",
    name: "Taco Bell",
    rating: "4.3",
    time: "18-22 mins",
    food: "Mexican, Fast Food",
    location: "Pune"
  },
  {
    id: "mc-5y6z7a8b",
    img: "https://b.zmtcdn.com/data/pictures/chains/7/3500247/bdce17cb8ea7c3bf8aa18eb69dbe95d9.png?fit=around|960:500&crop=960:500;*,*",
    name: "McDonald's",
    rating: "4.5",
    time: "10-15 mins",
    food: "Burgers, Fast Food",
    location: "Kolkata"
  },
  {
    id: "sb-9c0d1e2f",
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Small/103515.jpg",
    name: "Starbucks",
    rating: "4.7",
    time: "5-10 mins",
    food: "Coffee, Beverages",
    location: "Delhi"
  },
  {
    id: "dd-3g4h5i6j",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-nEE3ExwbuZdPs1dsGlXTM-D6FpzsHKvYA&s",
    name: "Dunkin' Donuts",
    rating: "4.1",
    time: "10-12 mins",
    food: "Donuts, Coffee, Beverages",
    location: "Gurgaon"
  },
  {
    id: "cc-7k8l9m0n",
    img: "https://b.zmtcdn.com/data/pictures/5/20535835/1409c2d0e04055ab9dab2d8ac0499e4f.jpg?fit=around|750:500&crop=750:500;*,*",
    name: "Costa Coffee",
    rating: "4.6",
    time: "8-10 mins",
    food: "Coffee, Beverages, Snacks",
    location: "Noida"
  },
  {
    id: "ch-1o2p3q4r",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/a91ce6ed-ff36-4fb7-be4c-3b2c0a5bf869_772730.jpg",
    name: "Chili's",
    rating: "4.3",
    time: "25-30 mins",
    food: "Mexican, American",
    location: "Mumbai"
  },
  {
    id: "bbn-5s6t7u8v",
    img: "https://i0.wp.com/butterry.com/blog/wp-content/uploads/2023/06/barbeque-nation-buffet-price.webp?fit=1200%2C800&ssl=1",
    name: "Barbeque Nation",
    rating: "4.8",
    time: "30-40 mins",
    food: "BBQ, Indian",
    location: "Bangalore"
  },
  {
    id: "hr-9w0x1y2z",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXI4Hhy0syCdTEuTzgStyVnUoy-PwWCaIuw&s",
    name: "Haldiram's",
    rating: "4.2",
    time: "20-25 mins",
    food: "Indian, Sweets",
    location: "Chandigarh"
  },
  {
    id: "bk-3a4b5c6d",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RPKCqdho9i3DmVuQ_vOrnOMIOrEKfWyyWA&s",
    name: "Bikanervala",
    rating: "4.1",
    time: "15-20 mins",
    food: "Indian, Sweets, Snacks",
    location: "Jaipur"
  },
  {
    id: "mlc-7d8e9f0g",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruwdr14F-y_A_Z9PoP7bzCKYdLlhkuP_2Fw&s",
    name: "Mainland China",
    rating: "4.6",
    time: "25-30 mins",
    food: "Chinese, Asian",
    location: "Chennai"
  },
  {
    id: "sr-1h2i3j4k",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zq7HZ0__YMHb54piKS9OCEsiEKG-02LorA&s",
    name: "Sagar Ratna",
    rating: "4.0",
    time: "20-25 mins",
    food: "South Indian, Indian",
    location: "Delhi"
  },
  {
    id: "sv-5l6m7n8o",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zq7HZ0__YMHb54piKS9OCEsiEKG-02LorA&s",
    name: "Saravana Bhavan",
    rating: "4.4",
    time: "15-20 mins",
    food: "South Indian, Vegetarian",
    location: "Chennai"
  },
  {
    id: "pb-9p0q1r2s",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/jtvzici548fquo7ieoch",
    name: "Paradise Biryani",
    rating: "4.5",
    time: "20-25 mins",
    food: "Biryani, Indian",
    location: "Hyderabad"
  },
  {
    id: "bb-3t4u5v6w",
    img: "https://b.zmtcdn.com/data/pictures/9/3501529/e1c35d2184cf4f09f2693f673af17c8a_featured_v2.jpg",
    name: "Behrouz Biryani",
    rating: "4.6",
    time: "18-22 mins",
    food: "Biryani, Mughlai",
    location: "Pune"
  },
  {
    id: "ke-7x8y9z0a",
    img: "https://b.zmtcdn.com/data/pictures/0/20061680/84d9ccc151b450d37b4a5a42f132665c_featured_v2.jpg",
    name: "Kabab Express",
    rating: "4.2",
    time: "15-20 mins",
    food: "Kebabs, North Indian",
    location: "Lucknow"
  }
];


const Body = () => {
  return (
    <div className="body">
      <input type="text" placeholder="Search Restaurant" className="search" />
      <div className="res-container">
        {restaurantData.map((restaurant)=> (
          <RestaurantCard 
            key = {restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = ({resData}) => {

  const {
    img,
    name,
    rating,
    time,
    food,
    location
  } = resData;

  return (
    <div className="res-card">
      <img src={img} />
      <div className="res-details">
      <h3>{name}</h3>
      <p className="rating">
        <i className="ri-star-fill"></i> {rating} &nbsp; <span>{time}</span>
      </p>
      <div className="food-location">
      <p className="food-choice">
       {food}
      </p>
      <p className="location">
        {location}
      </p>
      </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
