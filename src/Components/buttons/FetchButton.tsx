import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

const FetchButon = () => {
  const [fetched, setFetched] = useState(false);

  const [componentCode, setComponentCode] = useState<string>("");
  useEffect(() => {
    const fetchComponent = async () => {
      if (fetched) return;

      try {
        const docRef = doc(db, "components", "buttonComponent");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          let componentCode = docSnap.data().component;
          console.log("Fetched Sucessfully");

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

export default FetchButon;
