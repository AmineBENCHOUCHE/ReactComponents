import Link from "./Link"

const Sidebar = () => {
    const links = [
        {label:"Dropdown", path:"/"},
        {label:"Accordion", path:"/accordion"},
        {label:"Buttons", path:"/buttons"},
        {label:"Modal", path:"/modal"},
        {label:"Table", path:"/table"},
    ]

    const renderedLiinks = links.map(link => (
        <Link
        className="mb-3 ml-2"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            key={link.label} to={link.path}>{link.label}
        </Link>
    ))
  return (
    <div className="sticky top-0 flex flex-col items-start ">
     {renderedLiinks}

    </div>
  )
}
export default Sidebar