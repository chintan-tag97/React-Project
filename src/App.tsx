import "./App.css";
import { useState } from "react";

import Button from "./Components/buttons/Button";
import FetchButton from "./Components/buttons/FetchButton";
import FetchNavbar from "./Components/navbars/FetchNavbar";

import Navbar from "./Components/navbars/Navbar";
import Navbar2 from "./Components/navbars/Navbar2";
import FetchNavabr2 from "./Components/navbars/FetchNavabr2";
import Navbar3 from "./Components/navbars/Navbar3";
import FetchNavbar3 from "./Components/navbars/FetchNavbar3";
import Navbar4 from "./Components/navbars/Navbar4";
import FetchNavbar4 from "./Components/navbars/FetchNavbar4";
import Rendering from "./main/Rendering";
import Website from "./main/Website";

function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <FetchNavbar /> */}

      {/* <Navbar2 /> */}
      {/* <FetchNavabr2 /> */}
      {/* <Navbar3 /> */}
      {/* <FetchNavbar3 /> */}
      {/* <Navbar4 /> */}
      {/* <FetchNavbar4 /> */}

      <Rendering />
      <Website/>

      {/* <Button />
      <FetchButton /> */}
    </>
  );
}

export default App;
