import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div>
      <ButtonPage />
      <AccordionPage />
      <div className="flex">
        <DropdownPage />
      </div>
    </div>
  );
}

export default App;
