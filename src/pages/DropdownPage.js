import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const [selection, setselection] = useState(null);

  const handleSelect = (option) => {
    setselection(option);
  };

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
