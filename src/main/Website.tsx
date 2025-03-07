import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../assets/firebase/firebase";

const Website = () => {
  const [fetched, setFetched] = useState(false);

  const [componentCode, setComponentCode] = useState<string>("");

  useEffect(() => {
    const fetchComponent = async () => {
      if (fetched) return;

      try {
        const selectedDoc = doc(db, "SelectedNavbar", "current");
        const docSnap = await getDoc(selectedDoc);
        if (docSnap.exists()) {
          let componentCode = docSnap.data().navbar;
          console.log("Fetch Sucessfully");

          setComponentCode(() => componentCode);

          setFetched(true);
        }
      } catch (error) {
        console.error("Error fetching selected navbar:", error);
      }
    };

    fetchComponent();
  }, [fetched]);

  return (
    <div>
      <h2>Website Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: componentCode }}></div>
    </div>
  );
};

export default Website;
