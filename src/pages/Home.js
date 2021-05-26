import React from "react";
import Border from '../components/Border/Border';
import Title from '../components/Title/Title';
import ProfilePic from '../components/ProfilePic/ProfilePic';
// import About from "../components/About/About"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import Card from "../components/Card/Card";
// import Logo from '../components/Logo/Logo'

function Main() {
  return (
    <div>
      <NavBar />
      <Border />
      <ProfilePic />
      <Title />
      <Card />
      <Footer />
    </div>
  );
}
export default Main;
