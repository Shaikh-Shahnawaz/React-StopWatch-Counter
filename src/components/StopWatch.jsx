import React, { useState } from 'react'
import "./StopWatch.css";
function StopWatch() {


  let [mili, setMili] = useState(0+"0")
  let [second, setSecond] = useState(0+"0")
  let [minute, setMinute] = useState(0+"0")

  let interval;

  function Timer() {

    setMili(mili++)
    if (mili < 10) {
      setMili("0" + mili)
    }
    if (mili < 100 && mili > 10) {
      setMili(mili)
    }
    if (mili > 100) {
      setSecond(second++)
      setSecond("0" + second)
      mili = 0
      setMili("0" + mili)

    }
    if (second > 9) {
      setSecond(second)
    }
    if (second > 59) {
      setMinute(minute++)
      setMinute("0" + minute)
      second = 0
      setSecond("0" + second)
    }

  }
  function startTimer() {
    clearInterval(interval)
    interval = setInterval(Timer, 10)
  }

  function stopTimer() {
    clearInterval(interval)
  }

  function resetTimer() {
    clearInterval(interval)
    mili=0
    // setMili(mili)
    second=0
    // setSecond(second)
    minute=0
    // setMinute(minute)
  }

  return (
    <section class="container">

      <div class="jumbotron mt-5 jumbotron-class bg-light">
        <h1 class="display-3">STOP WATCH </h1>
        <p class="lead">React Hook Stopwatch</p>
        <div class="stop-watch d-flex display-4">

          {/* <p class="stop-watch-item text-warning" id="hrs"></p>: &nbsp; */}
          <p class="stop-watch-item text-warning" id="min">{minute}</p>: &nbsp;

          <p class="stop-watch-item text-warning" id="sec">{second}</p>: &nbsp;

          <p class="stop-watch-item text-warning" id="m-sec">{mili}</p>

        </div>
        <hr class="my-2" />
        <div class="lead">

          <button onClick={startTimer} class="btn btn-dark btn-sm">START</button>
          <button onClick={stopTimer} class="btn btn-warning btn-sm  mx-3">STOP</button>
         
          <button onclick={resetTimer} class="btn btn-dark btn-sm">RESET</button> 

        </div>
      </div>

      <nav aria-label="Page navigation example " className="mt-4 ">
        <ul class="pagination pagination-sm">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true" className="text-dark">Back To Top</span>
            </a>
          </li>

        </ul>
      </nav>

    </section>
  )
}

export default StopWatch
