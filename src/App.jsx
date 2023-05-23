import { useState, useEffect } from "react";
import { PrimaryNav } from "./components/PrimaryNav";
import { RemoteSection } from "./components/RemoteSection";
import "./style.css";

export default function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const handleDropDownClick = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices((prevState) =>
        prevState.filter((item) => item !== index)
      ); // Collapse the clicked item if it's already expanded
    } else {
      setExpandedIndices((prevState) => [...prevState, index]); // Expand the clicked item
    }
  };

  // Add overlay to body
  useEffect(() => {
    if (menuClicked) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }

    // Clean up function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overlay");
    };
  }, [menuClicked]);

  const featuresLinks = [
    {
      icon: "../../images/icon-todo.svg",
      url: "#",
      title: "Todo List",
    },
    {
      icon: "../../images/icon-calendar.svg",
      url: "#",
      title: "Calendar",
    },
    {
      icon: "../../images/icon-reminders.svg",
      url: "#",
      title: "Reminders",
    },
    {
      icon: "../../images/icon-planning.svg",
      url: "#",
      title: "Planning",
    },
  ];

  const companyLinks = [
    {
      url: "#",
      title: "History",
    },
    {
      url: "#",
      title: "Our Team",
    },
    {
      url: "#",
      title: "Blog",
    },
  ];

  return (
    <>
      <PrimaryNav
        handleDropDownClick={handleDropDownClick}
        handleMenuClick={handleMenuClick}
        menuClicked={menuClicked}
        expandedIndices={expandedIndices}
        featuresLinks={featuresLinks}
        companyLinks={companyLinks}
      />

      <main>
        <RemoteSection />
      </main>
    </>
  );
}
