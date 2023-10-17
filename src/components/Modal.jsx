import { useEffect } from "react"
import  ReactDOM  from "react-dom"
import Button from "./Button"

const Modal = ({onClose, actionBar, children }) => {
    useEffect(() => {
      document.body.classList.add('overflow-hidden')
    
      return () => {
        document.body.classList.remove('overflow-hidden')

      }
    }, [])
    
    
    return ReactDOM.createPortal(
        <div>
            <div 
                onClick={onClose}
                className="bg-gray-300/80 fixed inset-0 ">
            </div>
  
            <div className="fixed  border-2 p-10  shadow inset-40 bg-white">
               
                <div className="flex flex-col justify-between  h-full rounded-lg">
                   {children}

                   <div className="self-end">{actionBar}</div>
                </div>
                
            </div>
        </div>, 
        document.querySelector('.modal-container')
    )
}
export default Modal