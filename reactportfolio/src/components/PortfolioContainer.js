import React, { useState } from "react";
import NavTabs from "./NavTabs";
// import Footer from "./Footer";
import MyProjects from "./pages/MyProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("MyProjects");

  const renderPage = () => {
    if (currentPage === "MyProjects") {
      return <MyProjects />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
