import Table from "./Table"
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import { useState } from "react";


const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const {config, data} = props

    const handleClick = (label) => {

        if(sortBy && sortBy !== label){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if(sortOrder===null){
            setSortOrder("asc")
            setSortBy(label)
        }else if(sortOrder ==="asc"){
            setSortOrder("desc")
            setSortBy(label)

        }else if(sortOrder ==="desc"){
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map(column => {

        if(!column.sortValue){
            return column
        }
        
        return {...column, header: () => (
        <th 
            onClick={() => handleClick(column.label)}
            className="flex items-center gap-1 cursor-pointer hover:bg-gray-100">
            { column.label }
            { getIcons(column.label, sortBy, sortOrder) }
        </th>
        )
        }
    })

    //Only sort data if sortOrder and sortBy are not null
    let sortedData = data;

    if(sortOrder && sortBy){
        const {sortValue} = config.find(column => column.label === sortBy)
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder=== 'asc' ? 1:-1
            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder
            }
            else{
                return (valueA-valueB) * reverseOrder
            }
        })

    }

    //Make a copy the 'data' prop

    //Find the correct sortValue function and use it for sorting

    return <Table {...props} config={updatedConfig} data={sortedData} />
    
     {/* {sortOrder} -{sortBy} */}
  
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return (<FaSort />)
    }

    if(sortOrder === null){
        console.log("unsorted");
        return (<FaSort/>)
    }
    else if(sortOrder === 'asc'){
        return (<FaSortUp />)
    }
    else if(sortOrder === 'desc'){
        return (<FaSortDown />)
    }
}
export default SortableTable