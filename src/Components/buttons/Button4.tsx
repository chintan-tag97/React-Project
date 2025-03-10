import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const Button4 = `

    
    <div className="flex gap-4">
<button class="rounded-full bg-green-300 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">Button1</button>
<button class="rounded-full bg-green-300 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">Button2</button>
</div>
     
  `;

  try {
    await setDoc(doc(db, "ButtonComponent", "Button4"), {
      button4: Button4,
    });

    console.log(" Button4 Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Button4() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <></>;
}

export default Button4;
