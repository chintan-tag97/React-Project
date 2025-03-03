import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const navbarComponent = `

    <nav class="w-64 bg-gray-800 text-white p-5 flex flex-col space-y-4">
            <h2 class="text-lg font-bold">Dashboard</h2>
            <a href="#" class="p-2 hover:bg-gray-700 rounded">Home</a>
            <a href="#" class="p-2 hover:bg-gray-700 rounded">About</a>
            <a href="#" class="p-2 hover:bg-gray-700 rounded">Services</a>
            <a href="#" class="p-2 hover:bg-gray-700 rounded">Contact</a>
            <a href="#" class="p-2 hover:bg-gray-700 rounded">Logout</a>
        </nav>
     
  `;

  try {
    await setDoc(doc(db, "NavbarComponent", "Navbar2"), {
      component: navbarComponent,
    });

    console.log(" Navbar Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Navbar2() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <h1>Navbar2 Component Stored in Database</h1>;
}

export default Navbar2;
