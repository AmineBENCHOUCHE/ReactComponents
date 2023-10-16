import { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //when more than one line of code to increase visibility the evant handler is declared with a function
  // we put it ouside because of the map fucntion
  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>
        {isExpanded ? (
          <BiSolidRightArrow className="rotate-90 text-gray-900" />
        ) : (
          <BiSolidRightArrow className=" text-gray-400" />
        )}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          // on line event handler
          //onClick={() => setExpandedIndex(index)}
          // multiple line
          onClick={() => handleClick(index)}
          className="p-3 cursor-pointer border-b flex items-center justify-between"
        >
          {item.label} {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-5  bg-gray-200">{item.content}</div>
        )}
      </div>
    );
  });
  return (
    <div className="border-x border-t rounded max-w-[300px]">
      {renderedItems}
    </div>
  );
};
export default Accordion;
