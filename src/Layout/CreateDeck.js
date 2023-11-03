import React, { useState} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import DeckForm from "./DeckForm"

function CreateDeck() {

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h1>Create Deck</h1>
                <DeckForm />
            </div>
        </div>
    )

}

export default CreateDeck