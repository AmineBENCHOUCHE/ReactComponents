import Button from "../components/Button";
import { GoBell } from "react-icons/go";
import { FaGooglePay } from "react-icons/fa";
function ButtonPage() {
  const handleMouseEnter = () => {
    console.log("Mouse Enter");
  };

  return (
    <div className="m-10 flex gap-10">
      <div className="">
        <Button primary outlined rounded>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outlined onClick={handleMouseEnter}>
          <FaGooglePay />
          Buy now
        </Button>
      </div>
      <div>
        <Button secondary>See details</Button>
      </div>
      <div>
        <Button success outlined>
          Hide ads
        </Button>
      </div>
      <div>
        <Button warning>Hide ads</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
