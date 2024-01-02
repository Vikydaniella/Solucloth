import React from "react";

function App() {
    return (
<section className="form-container">
<form
onSubmit={(event) =>{
    event.preventDefault();
    const { name, email, tel } =event.target.elements;
    alert(
        'Hello ${name.value}! Your email is ${email.value} and your phone number is ${tel.value}'
    );
    console.log(elements);
}}>
<input type="text"placeholder="Enter your name" name="name" />
<input type="text"placeholder="Enter your email" name="email" />
<input type="text"placeholder="Enter your phone number" name="tel" />
<button type="submit"></button>
</form>

</section>
);
}

import React, { useState} from "react";

function App() {
    const [state, setState] = useState("Solucloth is here");

    const handleMouseOver = (event) => {
        setState("Welcome to Solucloth");
        setTimeout[() => {

        }, 1000];
    };
return (
    <section className="main-container">
    <h1
    onMouseOver={(event) => {
        console.log("You hovered over me!");
    }}
    className="hover-me">
        Hi Clothier
    </h1>
    </section>
    );
}
