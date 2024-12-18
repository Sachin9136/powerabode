import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DownArrow from "../../assets/Images/down-arrow-menu.svg";
import Downarrow_white from "../../assets/Images/downarrow_white.png";

function Sidebar({ closeMenu }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    1: false,
    4: false,
    5: false,
  }); 

  // Toggle the submenu
  const toggleSubmenu = (id, close = false) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [id]: close ? false : !prevState[id],
    }));
  };

  // Handle clicks on menu items, including submenu toggle
  const handleMenuClick = (item) => {
    if (item.submenu) {
      toggleSubmenu(item.id);
    } else {
      closeMenu(); // Only close the OffCanvas menu if there's no submenu
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "Cost and Value Philosophy",
      link: "#",
      submenu: [
        { id: 1.1, name: "Cost and Value Philosophy", link: "/cost-and-value-philosophy" },
        { id: 1.2, name: "Article & Business Cases", link: "/article-business-cases-background" },
        // { id: 1.2, name: "Blog", link: "/adrilling-cost-transformation" },
      ],
    },
    { id: 2, name: "About Us & Themes", link: "/the-story-of-powerabode" },
    { id: 3, name: "Capex/Opex Program", link: "/success-formula-disruptive-and-controlled" },
    {
      id: 4,
      name: "Supply Chain by SLA",
      link: "#",
      submenu: [
        { id: 4.1, name: "Supply Chain by SLA", link: "/supply-chain-by-sla" },
        { id: 4.1, name: "Post Award Contract Management", link: "/post-award-contract-management" },
        { id: 4.2, name: "Category Strategy & Contract Strategy", link: "/category-strategy" },
        { id: 4.3, name: "Commercial Assurance", link: "/commercial-assurance" },
        { id: 4.4, name: "Cost Recovery", link: "/cost-recovery" },
        { id: 4.5, name: "Tendering & Outsourcing", link: "/tendering-outsourcing" },
        { id: 4.6, name: "Materials Management", link: "/materials-management" },
      ],
    },
    {
      id: 5,
      name: "Systems & Delivery",
      link: "#",
      submenu: [
        { id: 5.1, name: "CODEX", link: "/codex-supply-chain" },
        { id: 5.1, name: "CM+", link: "/cm-for-contract" },
        { id: 5.2, name: "Academy", link: "/skillset-development" },
      ],
    },
    { id: 6, name: "AI Ecosystem", link: "/ai-ecosystem" },
  ];

  return (
    <div className="w-60 h-full text-white">
      <ul className="space-y-4 p-4">
        {menuItems.map((item) => (
          <li key={item.id} className="p-2">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleMenuClick(item)} // Handles submenu toggle or navigation
            >
              <NavLink
                to={item.link}
                className="text-white font-medium"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault(); // Prevent navigation if submenu exists
                    toggleSubmenu(item.id); // Toggle submenu if user clicks on the item
                  } else {
                    closeMenu(); // Close OffCanvas for links without submenu
                  }
                }}
              >
                {item.name}
              </NavLink>
              {item.submenu && (
                <img
                  src={Downarrow_white}
                  alt="Arrow"
                  className={`w-4 h-4 transition-transform ${
                    isSubmenuOpen[item.id] ? "rotate-180" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent NavLink from being triggered when clicking the arrow
                    toggleSubmenu(item.id);
                  }}
                />
              )}
            </div>

            {item.submenu && isSubmenuOpen[item.id] && (
              <ul className="mt-2 ml-4 space-y-2">
                {item.submenu.map((subItem) => (
                  <li key={subItem.id}>
                    <NavLink
                      to={subItem.link}
                      className="text-sm text-gray-400 hover:text-white"
                      onClick={closeMenu} // Close the OffCanvas when a submenu item is clicked
                    >
                      {subItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
