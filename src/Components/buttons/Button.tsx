import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const buttonComponent = `

      <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
        Click Me
      </button>

     
  `;

  try {
    await setDoc(doc(db, "components", "buttonComponent"), {
      component: buttonComponent,
    });

    console.log("Button Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Button() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <h1>Button Component Stored in Database</h1>;
}

export default Button;
