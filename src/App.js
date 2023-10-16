import { useState } from "react";
import Dropdown from "./components/Dropdown";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
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
      <ButtonPage />
      <AccordionPage />
      <div className="flex">
        <Dropdown options={options} value={selection} onChange={handleSelect} />
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
    </div>
  );
}

export default App;
