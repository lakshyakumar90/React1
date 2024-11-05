import React, { useState } from "react";
import MainBorder from "./MainBorder";
import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuItem";
import CategoriesCollapsible from "./CategoriesCollapsible";

const CollapsibleDiv = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const { itemCards, categories } = card.card.card;

  return (
    <>
      <div>
        {itemCards != undefined ? (
          <div className="collapsible">
            <button onClick={toggleCollapse} className="collapsible-btn">
              {card.card.card.title + " (" + itemCards.length + ")"}
            </button>
            <IoIosArrowDown
              className={`dropdown-arrow ${isOpen ? "open" : ""}`}
            />
          </div>
        ) : 
          <CategoriesCollapsible card={card} />
        }

        {isOpen && (
          <div style={{ marginTop: "10px", padding: "10px" }}>
            {itemCards != undefined ? (
              itemCards.map((item, index) => (
                <MenuItem
                  key={item.card.info.id}
                  item={item.card.info}
                  style={{
                    borderBottom:
                      index === itemCards.length - 1
                        ? "none"
                        : "1px solid #ccc",
                  }}
                />
              ))
            ) : null}
          </div>
        )}

        
      </div>
      <MainBorder />
    </>
  );
};

export default CollapsibleDiv;
