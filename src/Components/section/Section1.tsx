import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const saveComponent = async () => {
  const Section1 = `

   <section>
      <div 
        className="relative w-full h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/src/images/pexels-photo-939331.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <p className="text-lg">Website Design</p>
            <h1 className="text-5xl font-bold mt-2 text-blue-300">Welcome to My Website</h1>
            <h2 className="text-5xl font-bold mt-1 text-blue-300">View Website</h2>
            <div className="mt-6 flex justify-center gap-4">
              <button className="border border-white px-6 py-2 text-lg hover:bg-blue-500 transition-all">
                View
              </button>
              <button className="border border-white px-6 py-2 text-lg hover:bg-blue-300 transition-all">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
     
  `;

  try {
    await setDoc(doc(db, "SectionComponent", "Section1"), {
      section1: Section1,
    });

    console.log(" Section1 Component stored successfully!");
  } catch (error) {
    console.error(" Error storing component:", error);
  }
};

function Section1() {
  useEffect(() => {
    saveComponent();
  }, []);

  return <>
  </>;}

export default Section1;
