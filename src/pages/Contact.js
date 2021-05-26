import React from "react";
import Border from '../components/Border/Border';
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar";
import ContactInfo from '../components/ContactInfo/Contact'
import Technologies from '../components/Technologies/Technologies'

function Contact() {
  return (
      <div>
          <NavBar />
          <div>
          <Border />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Technologies />
      <ContactInfo />
       <Footer />  
      </div>
    
  );
}
export default Contact;