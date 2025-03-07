import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const Navbar4 = `



   
    <nav class="bg-green-300 p-4 text-white flex justify-between items-center">
  <h1 class="text-xl font-bold">My Website</h1>
  <ul class="hidden md:flex space-x-4">
    <li><a href="#" class="hover:text-gray-300">Home</a></li>
    <li><a href="#" class="hover:text-gray-300">About</a></li>
    <li><a href="#" class="hover:text-gray-300">Services</a></li>
    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
  </ul>
  <button class="md:hidden block text-white focus:outline-none">
    ☰
  </button>
</nav>

     
  `;

  try {
    await setDoc(doc(db, "NavbarComponent", "Navbar4"), {
      navbar4: Navbar4,
    });

    console.log(" Navbar4 Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Navbar4() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <>
  </>;
}

export default Navbar4;
