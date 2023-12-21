import React, { useState} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import DeckForm from "./DeckForm"
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateDeck() {

    const history = useHistory()

    const initialFormData = {
        name: "",
        description: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        createDeck(formData)
        history.push("/")
        window.location.reload(false);
    }

    function goBack(){
        history.push("/")
    } 

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h1>Create Deck</h1>
                <DeckForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} goBack={goBack} />
            </div>
        </div>
    )

}

export default CreateDeck