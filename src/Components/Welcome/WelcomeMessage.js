import React, { useState } from "react";

function WelcomeMessage() {
    const [counter,setCounter] = useState(0);

    return (
        <div className="Welcome-Container">
            <header className="App-header">
                <p>WELCOME AT:</p>

                <a
                    className="Ad-link"
                    href="https://www.adsolution.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Amanzunza Debt Solution (Pty) Ltd
                </a>
            </header></div>
    )
}

export default WelcomeMessage;