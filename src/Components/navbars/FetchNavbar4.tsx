import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const FetchNavbar4 = () => {
  const [fetched, setFetched] = useState(false);

  const [componentCode, setComponentCode] = useState<string>("");
  useEffect(() => {
    const fetchComponent = async () => {
      if (fetched) return;

      try {
        const docRef = doc(db, "NavbarComponent", "Navbar4");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let componentCode = docSnap.data().navbar4;
          console.log("Fetch Sucessfully");

          setComponentCode(() => componentCode);

          setFetched(true);
        }
      } catch (error) {
        console.error("Error fetching component:", error);
      }
    };

    fetchComponent();
  }, [fetched]);

  return (
    <div>
      <h2>Fetched Component</h2>
      <div dangerouslySetInnerHTML={{ __html: componentCode }}></div>
    </div>
  );
};

export default FetchNavbar4;
