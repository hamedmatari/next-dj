import { useState } from "react";
export default function Search({ fff }) {
  const [search, setSearch] = useState("");
  fff(search);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
