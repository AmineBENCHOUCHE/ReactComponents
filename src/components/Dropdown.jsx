import { useState, useEffect, useRef} from "react";
import {RxDropdownMenu} from "react-icons/rx"
import Panel from "./Panel";

const Dropdown = ({options, value, onChange}) => {

    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option) => {
       //CLOSE DROPDOWN
        setIsOpen(false)
        // WHAT option did the user click on
        onChange(option)
    }
    useEffect(() => {
      const handler = (event) => {

        // console.log(divEl);
        // we check if divEl is not referenced to any element
        if(!divEl.current){
            return
        }
        if(divEl.current.contains(event.target)){

        }else{
            setIsOpen(false)
        }

      }
      document.addEventListener("click", handler, true)
       return() =>{

        document.removeEventListener('click', handler)
       }
       
     
    }, [])
    
   

    const renderedOptions = options.map(option => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
          
             key={option.value}
             onClick={() => handleOptionClick(option)}
             onChange={() => onChange(option.value)}
             value={option.value}>{option.label}
            </div>
        )}
    )


  return (
    <div className="flex ml-10">
        <div className="w-48 relative" ref={divEl }>
            <Panel className="flex items-center justify-between cursor-pointer" 
            onClick={handleClick}>
            {value?.label || "Select..."}
            <RxDropdownMenu className="text-lg"/>
            </Panel>
          {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
        </div>
    </div>
  )
}
export default Dropdown