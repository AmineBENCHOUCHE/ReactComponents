import { Fragment } from "react";
const Table = ({data, config, keyFn}) => {
   
    const renderedRows = data.map(rowData => {
        const renderedCells = config.map(cell => (
            <td key={cell.label} className="p-3 w-[120px] text-center">
              {cell.render(rowData)}
            </td>
        ));

        return (
            <tr key={keyFn(rowData)} className="border-b mx-auto flex">
                {renderedCells}
            </tr>
        )
    });

    const renderedHeaders = config.map(column => {
        if(column.header){
            return <Fragment  key={column.label}>{column.header()}</Fragment>
        }
        return <th className="w-[120px]" key={column.label} >{column.label}</th>
    });

 
  return (
    <table className="table-fixed border-spacing-2  ">
        <thead className="border-b-2">
            <tr   className="flex gap-6 ">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
          {renderedRows}
        </tbody>
    </table>
  )
}
export default Table