import React from 'react'
import {useState , useEffect} from "react" ; 
import {Link} from "react-router-dom"

const Home = () => { 
 const [data , setData] = useState({
    Category : "", 
    Size : "", 
    Color : ""
 })

//  console.log(data);

const handleChange = (e)=>{
    // console.log(e.target.value) 
    const {id , value} = e.target
     setData({...data, [id] : value})
}

const onSubmit = async (event)=>{
    event.preventDefault() ;  
    // const data = {data} ; 
   const response = await fetch("http://localhost:8000/product" , {
     method : "POST" , 
     body : JSON.stringify(data) , 
     headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     }
   })
   const result = await response.json() ; 

    console.log(result) ; 

}


  return (
    <div>
      <form onSubmit = {onSubmit}>
        <select id = "Category" onChange = {handleChange}>
            <option>Category</option>
            <option>shirt</option>
            <option>paint</option>
            <option>sweter</option>
            <option>shoes</option>
        </select>
        <select id = "Size" onChange = {handleChange}>
            <option>Size</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
            <option>Free size</option>
        </select>
        <select id = "Color" onChange = {handleChange}>
            <option>Color</option>
            <option>Red</option>
            <option>Black</option>
            <option>Yellow</option>
            <option>Green</option>
        </select> 
       <input type = "submit" value = "submit"/>
      </form>
      <Link to = "/grid"><button >Show Cart</button></Link>
    </div>
  )
}

export default Home
