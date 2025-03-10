import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../assets/firebase/firebase";

const Rendering = () => {
  const [selectedNavbar, setSelectedNavbar] = useState("Navbar1");
  const [selectedButton, setSelectedButton] = useState("Button1");
  const [selectedSection, setSelectedSection] = useState("Section1");

  const [componentCode, setComponentCode] = useState("");
  const [buttonCode, setButtonCode] = useState("");
  const [sectionCode, setSectionCode] = useState("");


  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const docRef = doc(db, "NavbarComponent", selectedNavbar);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Navbar Successfully");

          const componentHTML =
            data.component ||
            data.navbar1 ||
            data.navbar2 ||
            data.navbar3 ||
            data.navbar4;

          setComponentCode(componentHTML);
        } else {
          console.error("Navbar component not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching navbar component:", error);
      }
    };

    if (selectedNavbar) fetchComponent();
  }, [selectedNavbar]);

  useEffect(() => {
    const fetchButton = async () => {
      try {
        const docRef = doc(db, "ButtonComponent", selectedButton);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Button Successfully");

          const buttonHTML =
            data.component ||
            data.button1 ||
            data.button2 ||
            data.button3 ||
            data.button4;

          setButtonCode(buttonHTML);
        } else {
          console.error("Button component not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching button component:", error);
      }
    };

    if (selectedButton) fetchButton();
  }, [selectedButton]);

  
  useEffect(() => {
    const fetchSection = async () => {
      try {
        const docRef = doc(db, "SectionComponent", selectedSection);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Section Successfully");

          const sectionHTML =
            data.component ||
            data.section1 ||
            data.section2 ||
            data.section3 ||
            data.section4;

          setSectionCode(sectionHTML);
        } else {
          console.error("Section component not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching section component:", error);
      }
    };

    if (selectedSection) fetchSection();
  }, [selectedSection]);

  const handleSave = async () => {
    try {
      await setDoc(doc(db, "SelectedComponents", "current"), {
        navbar: componentCode,
        button: buttonCode,
        section: sectionCode,
      });
      console.log("Selection saved successfully.");
    } catch (error) {
      console.error("Error saving selected components:", error);
    }
  };

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

      <h2>Select a Button</h2>
      <select
        onChange={(e) => setSelectedButton(e.target.value)}
        value={selectedButton}
        className="p-2 border rounded"
      >
        <option value="Button1">Button 1</option>
        <option value="Button2">Button 2</option>
        <option value="Button3">Button 3</option>
        <option value="Button4">Button 4</option>
      </select>

      <h2>Rendered Button</h2>
      <div dangerouslySetInnerHTML={{ __html: buttonCode }} />

      {/* <h2>Select a Section</h2>
      <select
        onChange={(e) => setSelectedSection(e.target.value)}
        value={selectedSection}
        className="p-2 border rounded"
      >
        <option value="Section1">Section 1</option>
        <option value="Section2">Section 2</option>
        <option value="Section3">Section 3</option>
        <option value="Section4">Section 4</option>
      </select>

      <h2>Rendered Section</h2>
      <div dangerouslySetInnerHTML={{ __html: sectionCode }} /> */}

      <div>
        <button
          onClick={handleSave}
          className=" mt-5 rounded-full bg-blue-700 px-5 py-2 text-sm leading-5
           font-semibold text-white hover:bg-sky-700"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Rendering;
