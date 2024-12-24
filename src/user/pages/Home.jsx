import React from "react";
import Header from "../components/Header";
import RoomList from "../components/RoomList";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <RoomList />
      <Footer />
    </div>
  );
};

export default Home;
