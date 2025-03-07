import { useEffect, useState } from "react";

const Sample = () => {
  const [componentCode] = useState("");

  useEffect (() =>  {
    

  })

  return (
    <div>
        <div>
      <select 
      className="p-2 border rounded"
      >
        <option value="Navbar1">Navbar 1</option>
        <option value="Navbar2">Navbar 2</option>
        <option value="Navbar3">Navbar 3</option>
        <option value="Navbar4">Navbar 4</option>
      </select>
    </div>
    <h2>Rendered Navbar</h2>
      <div dangerouslySetInnerHTML={{ __html: componentCode }} />
    </div>
  )
}

export default Sample