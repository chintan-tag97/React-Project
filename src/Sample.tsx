import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./assets/firebase/firebase";

const Sample = () => {
  const [NavbarCode, setNavbarCode] = useState("");
  const [SectionCode, setSectionCode] = useState("");
  const [CardsCode, setCardsCode] = useState("");
  const [FooterCode, setFooterCode] = useState("");




  const Navbar = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Navbar"));
      let activeNavbar = "";
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.active) {
          activeNavbar = data.htmlData || "";
          console.log("Fetched successfully");
        }
      });

      setNavbarCode(activeNavbar);
    } catch (error) {
      console.error("Error fetching navbar:", error);
    }
  };


  const Footer = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Footer"));
      let activeFooter = "";
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.active) {
          activeFooter = data.htmlData || "";
          console.log("Fetched successfully");
        }
      });

      setFooterCode(activeFooter);
    } catch (error) {
      console.error("Error fetching navbar:", error);
    }
  };

  
  const Cards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Cards"));
      let activeCards = "";
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.active) {
          activeCards = data.htmlData || "";
          console.log("Fetched successfully");
        }
      });

      setCardsCode(activeCards);
    } catch (error) {
      console.error("Error fetching navbar:", error);
    }
  };


  
  const Section = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Section"));
      let activeSection = "";
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.active) {
          activeSection = data.htmlData || "";
          console.log("Fetched successfully");
        }
      });

      setSectionCode(activeSection);
    } catch (error) {
      console.error("Error fetching navbar:", error);
    }
  };


  useEffect(() => {
    Navbar();
    Section();
    Cards();
    Footer();


  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: NavbarCode }} />
      <div dangerouslySetInnerHTML={{ __html: SectionCode }} />
      {/* <div dangerouslySetInnerHTML={{ __html: CardsCode }} />
      <div dangerouslySetInnerHTML={{ __html: FooterCode }} /> */}


      
    </div>
  );
};

export default Sample;
