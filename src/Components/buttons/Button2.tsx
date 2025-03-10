import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const Button2 = `

   
    <div className="flex gap-4">
<button class="rounded-full bg-yellow-300 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">Button1</button>
<button class="rounded-full bg-yellow-300 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">Button2</button>
</div>

     
  `;

  try {
    await setDoc(doc(db, "ButtonComponent", "Button2"), {
      button2: Button2,
    });

    console.log(" Button2 Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Button2() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <></>;
}

export default Button2;
