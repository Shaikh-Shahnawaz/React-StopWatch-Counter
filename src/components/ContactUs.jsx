import React, { useState } from 'react'
import "./ContactUs.css";
function ContactUs() {

    // ============================ one way to use useState hook to grab the data ============================
    // using multiple functions for multiple inputs

    /*const [name, setName] = useState("Initial Name")
    const [email, setEmail] = useState("Initial Email")
    const [password, setPassword] = useState("Initial Password")
    
    
    function handleChange1(event) {
        setName(event.target.value)
    }
    
    function handleChange2(event) {
        setEmail(event.target.value)
    }
    
    function handleChange3(event) {
        setPassword(event.target.value)
    }

    function getData() {
        console.log(name)
        console.log(email)
        console.log(password)
        
    }*/
    
    // ============================ another way to use useState hook to grab the data ============================
    // using single funtion for multiple inputs 
    const [state, setState] = useState({
        name:"",
        email:"",
        password:""
    })

    function handleChange(event){
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
        
    }
    function getData(){
        console.log(state)
        document.getElementById('data-output').innerHTML = ` <b>Name:</b> ${state.name} <b>Email:</b> ${state.email} `;
    }
   

    return (
        <section className="contact-section container-fluid contact-section ">
            <h2 className=" text-center  border-bottom border-top border-2 px-2  d-inline-block">Contact Us</h2>


            <div className="row">

                <div class="mb-3 col-md-3 offset-3">
                    <label for="exampleInputText1" class="form-label ">Name</label>
                   
                    <input name="name" onChange={handleChange} id="name-id" type="text" class="form-control" />
                </div>

                <div class="mb-3 col-md-3 offset-0">

                    <label for="exampleInputEmail1" class="form-label">Email</label>
                   
                    <input name="email" onChange={handleChange} id="email-id" type="email" class="form-control" />
                </div>

            </div>

            <div class="mb-3 col-md-6 offset-3">

                <label for="exampleInputPassword1" class="form-label">Password</label>
                
                <input name="password" onChange={handleChange} id="pass-id" type="password" class="form-control" />

            </div>

            <button onClick={getData} id="submit-id" type="submit" class="btn btn-outline-warning col-md-6 offset-0">Submit</button>
            <p className="output-p  col-md-6 offset-3">
                <h3>OUTPUT</h3> 
                <span id="data-output" className="d-flex justify-content-around"></span>
            </p>

           

        </section>
    )
}

export default ContactUs
