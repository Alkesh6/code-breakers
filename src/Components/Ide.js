import React from 'react'
import './Ide.css';

export default function Ide() {
    return (
        <>
        <div className="text-center" id="events">
            <br></br>
            <h2>IDE</h2>
            <br></br>
            <p>Compile and run your code with the Code Breakers online IDE. Our online compiler supports multiple programming
                languages like Python, C++, C, Kotlin, NodeJS, and many more.</p>
            <p>Select your Language </p><div class="options" id="options">
            </div>
            </div>
            <select class="form-select" aria-label="Default select example">
            <option selected>Languages</option>
            <option value="1">Python</option>
            <option value="2">Java</option>
            <option value="3">C++</option>
            </select>
            <div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Submit</div>
			</div>
        </>
    )
}