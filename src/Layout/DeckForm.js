import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { BrowserRouter as Router, useHistory } from "react-router-dom"

function DeckForm({ formData, handleSubmit, handleChange, goBack }) {

    // const [name, setName] = useState('')
    // const handdleNamechange = (event) => setName(event.target.value)
                  
    // const [description, setDescription] = useState('')
    // const handdleDescriptionChange = (event) => setDescription(event.target.value)
    
    const history = useHistory()

    // const handdleSubmit = async (event) => {
    //     event.preventDefault()
    //     const formData = {
    //         name,
    //         description,
    //         cards: "empty"
    //     } 
    //     const response = await createDeck(formData)
    //     console.log(response);
    //     const deckId = response.id
    //     history.push(`/decks/${deckId}`)
    //}

    return (
        <form onSubmit={handleSubmit} >
            <p>Name</p>
            <label htmlFor="name">
                <input 
                    name="name"
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Deck Name"
                />
            </label>
            <p>Description</p>
            <label htmlFor="description">
                <textarea 
                    name="description"
                    type="text"
                    id="description"
                    onChange={handleChange}
                    value={formData.description}
                    placeholder="Brief Description of the Deck"
                />
            </label>
            <div>
                <button onClick={() => goBack} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default DeckForm