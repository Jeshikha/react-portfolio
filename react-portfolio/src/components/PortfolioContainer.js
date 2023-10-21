import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MyPortfolio from "./pages/myPortfolio";
import Footer from "./pages/Footer";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return (
        <>
          <Home />
          <Footer /> {/* Include the Footer component on the Home page */}
        </>
      );
    } else if (this.state.currentPage === "About") {
      return (
        <>
          <About />
          <Footer /> {/* Include the Footer component on the About page */}
        </>
      );
    } else if (this.state.currentPage === "MyPortfolio") {
      return (
        <>
          <MyPortfolio />
          <Footer /> {/* Include the Footer component on the MyPortfolio page */}
        </>
      );
  
    } else {
      return (
        <>
          <Contact />
          <Footer /> {/* Include the Footer component on the Contact page */}
        </>
      );
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
