import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../assets/firebase/firebase";

const Rendering = () => {
  const [selectedNavbar, setSelectedNavbar] = useState("Navbar1");
  const [componentCode, setComponentCode] = useState("");

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const docRef = doc(db, "NavbarComponent", selectedNavbar);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Successfully");

          const componentHTML =
            data.component ||
            data.navbar1 ||
            data.navbar2 ||
            data.navbar3 ||
            data.navbar4;

          await setDoc(doc(db, "SelectedNavbar", "current"), {
            navbar: componentHTML,
          });

          setComponentCode(componentHTML);
        } else {
          console.error("Component not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching component:", error);
      }
    };

    if (selectedNavbar) fetchComponent();
  }, [selectedNavbar]);

  return (
    <div>
      <h2>Select a Navbar</h2>
      <select
        onChange={(e) => setSelectedNavbar(e.target.value)}
        value={selectedNavbar}
        className="p-2 border rounded"
      >
        <option value="Navbar1">Navbar 1</option>
        <option value="Navbar2">Navbar 2</option>
        <option value="Navbar3">Navbar 3</option>
        <option value="Navbar4">Navbar 4</option>
      </select>

      <h2>Rendered Navbar</h2>
      <div dangerouslySetInnerHTML={{ __html: componentCode }} />
    </div>
  );
};

export default Rendering;
