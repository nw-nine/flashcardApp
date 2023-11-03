import React, { useState } from "react";

function DeckForm() {

    const [name, setName] = useState('')
    const handdleNamechange = (event) => setName(event.target.value)
                  
    const [description, setDescription] = useState('')
    const handdleDescriptionChange = (event) => setDescription(event.target.value)

    const handdleSubmit = (event) => {
        event.preventDefault()
        
    }

    return (
        <form >
            <p>Name</p>
            <label htmlFor="name">
                <input 
                    name="name"
                    type="text"
                    id="name"
                    oncChange={handdleNamechange}
                    value={name}
                    placeholder="Deck Name">
                </input>
            </label>
            <p>Description</p>
            <label htmlFor="description">
                <textarea 
                    name="description"
                    type="text"
                    id="description"
                    oncChange={handdleDescriptionChange}
                    value={description}
                    placeholder="Brief Description of the Deck">
                </textarea>
            </label>
            <div>
                <button className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default DeckForm