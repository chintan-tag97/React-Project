import "./App.css";
import Button from "./Components/buttons/Button";
import FetchButton from "./Components/buttons/FetchButton";
import FetchNavbar from "./Components/navbars/FetchNavbar";

import Navbar from "./Components/navbars/Navbar";
import Navbar2 from "./Components/navbars/Navbar2";
import FetchNavabr2 from "./Components/navbars/FetchNavabr2";

function App() {
  return (
    <>
      <Button />
      <FetchButton />

      <Navbar />
      <FetchNavbar />

      <Navbar2/>
      {/* <FetchNavabr2/> */}
    </>
  );
}

export default App;
