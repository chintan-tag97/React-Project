import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const Navbar1 = `

    <nav class="bg-blue-500 p-4 text-white flex justify-between items-center">
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
    await setDoc(doc(db, "NavbarComponent", "navbar1"), {
      navbar1: Navbar1
    });

    console.log(" Navbar Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Navbar() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <h1>Navbar Component Stored in Database</h1>;
}

export default Navbar;
