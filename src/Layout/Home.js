import React, { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../utils/api";
import { BrowserRouter as Router, useHistory, useRouteMatch, Route, Link } from "react-router-dom"

function Home() {

    const [decks, setDecks] = useState([])
    useEffect(() => {
        listDecks()
        .then(data => setDecks(data))
    }, [])

    const {path, url} = useRouteMatch()
    const history = useHistory()

    function handleCreateDeck(){
        history.push("/cd")
    }
    
    
    return(
        <>
            <button onClick={handleCreateDeck} className="btn btn-secondary">+ Create Deck</button>
            {decks.map(deck => {
                
                function viewDeck() {
                    history.push(`/decks/${deck.id}`)
                }

               return (
                <div key={deck.id} className="border">
                    <h2>{deck.name}</h2>
                    <p>{deck.description}</p>
                    <button onClick={viewDeck} className="btn btn-secondary">View</button>
                    <button className="btn btn-primary">Study</button>
                    <button className="btn btn-danger">❌</button>
                    
                </div>
               )
            })}
        </>
    )
}

export default Home