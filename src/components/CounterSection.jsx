import React, { useState } from 'react'
import "./CounterSection.css";
function CounterSection() {

const [value,setValue] = useState(0)

const increment = function(){
setValue(value+1)
}
const decrement = function(){
    if(value >0 ){
        setValue(value-1)
    }
}

    return (
        <section  className="counter-section">

        <div className=" d-flex justify-content-around col-md-4 offset-4 text-light">
        
            <button className="btn btn-outline-warning " onClick={decrement} >Decrement - </button>
            <h1>Counter <span>{value}</span> </h1>
            <button className="btn btn-outline-warning " onClick={increment} >Increment + </button>
            
        </div>
            <hr  />

        </section>
    )
}

export default CounterSection
