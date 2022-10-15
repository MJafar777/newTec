import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
