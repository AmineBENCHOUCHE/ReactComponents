import className from "classnames"
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    primary,
    secondary, 
    danger,
    warning,
    success,
    outlined,
    rounded,
    ...rest // all the remaining props for example eventlistener

}) => {
    const classes = twMerge(className(
        // receive whatever className is passed in the object
        rest.className,
        //default styling
        'px-3 py-1.5 border flex gap-2 justify-between items-center' ,
        //conditional styling
         {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-red-500 bg-red-500 text-white': danger,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'rounded-full': rounded,
        'bg-white': outlined,
        'text-blue-500': outlined && primary,
        'text-gray-900': outlined && secondary,
        'text-green-500': outlined && success,
        'text-yellow-400': outlined && warning,
        'text-red-500': outlined && danger

    }))
  return (
    <button {...rest} className={classes}>{children }</button>
  )
}
// Validation propType
Button.propTypes = {
    checkVariationValue: ({primary,
        secondary, 
        danger,
        warning,
        success}) => {
            const count = Number(!!primary) 
            + Number(!!secondary)
            + Number(!!danger)
            + Number(!!warning)
            + Number(!!success)
        
       if(count >1){
        return new Error("Only one of primary, secondary, success, danger, warning, success can be true")
       }
    }
}
export default Button