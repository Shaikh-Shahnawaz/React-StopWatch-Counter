// import React, { useState } from 'react'
import { useState } from "react";
import "./Quiz.css";
function Quiz() {

let [quiz1,setQuiz1] = useState({
    first:"Calcutta",
    second:"Madras",
    third:"Delhi",
    fourth:"Mumbai"
})

function quizEvent1(){
    quiz1.first = "😀 Calcutta "
    setQuiz1(quiz1.first)
        
    
}

// setState({
//     ...state, "😀 Calcutta "
//     [event.target.name]:event.target.value
// })
/*
    function quizEvent1() {
        let quizOnelist = document.getElementById("q1-list-item");
        let value = "Calcutta"
        if (quizOnelist.innerText === value) {
            quizOnelist.style.backgroundColor = "lightgreen";
        }
    }
    function quizEvent2() {
        let quizTwolist = document.getElementById("q2-list-item");
        let value = "Mumbai"
        if (quizTwolist.innerText === value) {
            quizTwolist.style.backgroundColor = "lightgreen";
        }
    }
    function quizEvent3() {
        let quizThreelist = document.getElementById("q3-list-item");
        let value = "Kerala"
        if (quizThreelist.innerText === value) {
            quizThreelist.style.backgroundColor = "lightgreen";

        }
    }
    function quizEvent4() {
        let quizFourlist = document.getElementById("q4-list-item");
        let value = "Aryabhata"
        if (quizFourlist.innerText === value) {
            quizFourlist.style.backgroundColor = "lightgreen";

        }
    }
    */
    // console.log(listItem)
    // const [state, setState] = useState
    // for (let i = 0; i < listItem.length; i++) {
    // }
    /*
    function quizEvent3() {
        if (listItem[2].innerText == "Banglore") {
            listItem[2].style.backgroundColor = "pink";
            // listItem[1].dangerouslySetInnerHTML = " <span> 😃 </span> " + "Delhi";
        }
    }
    function quizEvent4() {
        if (listItem[3].innerText == "Hyderabad") {
            listItem[3].style.backgroundColor = "pink";
            listItem[3].innerHTML = " <span> 😑 </span> " + "Hyderabad";
        }
    }
}
*/

    return (
        <section className="quiz-section container-fluid my-5">
            <h2 className="text-warning mb-5 border-top border-bottom  border-2 px-3  d-inline-block">QUIZ TIME</h2>
            <div className="d-flex justify-content-around">

                <div id="quiz" class="quiz bg-light text-dark">
                    <p> <strong>First University established in India</strong> </p>
                    <li class="q1-list-item" id="q1-list-item" onClick={quizEvent1} > {quiz1.first} </li> {/* ans  */}
                    <li class="q1-list-item"  >{quiz1.second}</li>
                    <li class="q1-list-item" >{quiz1.third} </li>
                    <li class="q1-list-item"  >{quiz1.fourth} </li>
                </div>

                <div id="quiz" class="quiz">
                    <p> <strong>India's largest city by population</strong> </p>
                    <li class="q2-list-item">Delhi</li>
                    <li class="q2-list-item"  id="q2-list-item"  >Mumbai </li> {/* ans  */}
                    <li class="q2-list-item" >Pune</li>
                    <li class="q2-list-item" >Chennai</li>
                </div>

                <div id="quiz" class="quiz bg-light text-dark">
                    <p> <strong>Which state is known as India's Spice Garden ?</strong> </p>
                    <li class="q3-list-item" >Karnataka </li>
                    <li class="q3-list-item" >Manipur</li>
                    <li class="q3-list-item" id="q3-list-item"  >Kerala</li> {/* ans  */}
                    <li class="q3-list-item" >Assam</li>
                </div>

                <div id="quiz" class="quiz">
                    <p> <strong>Which is India's first artificial satellite?</strong> </p>
                    <li class="q4-list-item" >INSAT </li>
                    <li class="q4-list-item" id="q4-list-item">Aryabhata</li> {/*ans*/}
                    <li class="q4-list-item" >Bhaskara</li>
                    <li class="q4-list-item" >Rohini</li>
                </div>

            </div>
        </section>
    )
}

export default Quiz
