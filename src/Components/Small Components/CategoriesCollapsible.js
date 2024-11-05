import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuItem";

const CategoriesCollapsible = ({ card }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null); // State to manage which category is open

  const toggleCollapse = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index); // Toggle the open category
  };

  const categories = card.card.card.categories;

  return (
    <>
      <div>
        <h1 style={{fontSize:"1.4rem", fontWeight:"900", padding:"18px"}}>{card.card.card.title}</h1>
        {categories.map((category, index) => (
          <div key={index} className="collapsible-container">
            <div className="collapsible category">
              <button
                onClick={() => toggleCollapse(index)}
                className="collapsible-btn category-collapsible-btn"
              >
                {category.title + " (" + category.itemCards.length + ")"}
              </button>
              <IoIosArrowDown
                className={`dropdown-arrow ${
                  openCategoryIndex === index ? "open" : ""
                }`}
              />
            </div>
            {openCategoryIndex === index && (
              <div style={{ marginTop: "10px", padding: "10px" }}>
                {category.itemCards.map((item, itemIndex) => (
                  <MenuItem item={item.card.info} key={item.card.info.id} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesCollapsible;
