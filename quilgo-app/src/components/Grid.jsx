import React from 'react'
import {AgGridReact} from "ag-grid-react" 
import {useState , useEffect, useMemo} from "react" ; 
import 'ag-grid-community/styles/ag-grid.css' ;
import 'ag-grid-community/styles/ag-theme-alpine.css' ;

const Grid = () => { 
     

const [rowdata , setRowData] = useState([]);

    const columns = [
        {field : "id"},
        {field : "Category"} , 
        {field : "Size" },
        {field : "Color"}
    ] 

    const defaultColDef = useMemo(()=>({
        sortable : true , 
        filter : true
    }),[]);
    useEffect(()=>{
          getDtat()
    },[]);

    const getDtat = async ()=>{
        try {
            const response = await fetch("http://localhost:8000/product")
            const result = await response.json() ; 
           
            setRowData(result);
        }catch(err){
            console.log(err.message);
        }
    }

  return (
    <div className = "ag-theme-apline" style = {{height : 500 , width : 800}}>
      <AgGridReact 
      defaultColDef = {defaultColDef}
       columnDefs = {columns}  
       rowSelection = "multiple"
       animateRows = {true}
       rowData = {rowdata}
      />
    </div>
  )
}

export default Grid
