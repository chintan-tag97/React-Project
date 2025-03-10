import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../assets/firebase/firebase";

const Website = () => {
  const [fetched, setFetched] = useState(false);
  const [componentCode, setComponentCode] = useState<string>("");
  const [buttonCode, setButtonCode] = useState<string>("");

  useEffect(() => {
    const fetchComponent = async () => {
      if (fetched) return;

      try {
        const selectedDoc = doc(db, "SelectedComponents", "current");
        const docSnap = await getDoc(selectedDoc);
        if (docSnap.exists()) {
          let data = docSnap.data();
          console.log("Fetch Successfully");

          setComponentCode(() => data.navbar);
          setButtonCode(() => data.button);

          setFetched(true);
        }
      } catch (error) {
        console.error("Error fetching selected components:", error);
      }
    };

    fetchComponent();
  }, [fetched]);

  return (
    <div>
      <h2>Website Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: componentCode }}></div>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: buttonCode }}></div>
    </div>
  );
};

export default Website;
