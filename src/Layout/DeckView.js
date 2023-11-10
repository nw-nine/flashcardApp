import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard, readDeck } from "../utils/api";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom.min";
import { deleteDeck } from "../utils/api";
import CreateCard from "./CreateCard";

function DeckView() {

    const { path, url } = useRouteMatch()
    const { id } = useParams()
    const [deck, setDeck] = useState(null);
    const history = useHistory()
    const [cards, setCards] = useState(null)

    async function handleCardDelete(cardId) {
        if (window.confirm("delete this card?")) {
          await deleteCard(cardId);
          const updatedDeck = await readDeck(id);
          setDeck(updatedDeck);
        }
      }
    
    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await readDeck(id);
            setDeck(response);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, [id]);
    
    
    function handleDelete() {
        if(window.confirm("delete this deck?")) {
            deleteDeck(deck.id)
        }
    }

    // {deck ? setCards(deck.cards) : ""}

    


    return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{deck ? deck.name : "loading"}</li>
                    </ol>
                </nav>
                <div>
                    <h4>{deck ? deck.name : ""}</h4>
                    <p>{deck ? deck.description : ""}</p>
                    <button onClick={() => history.push(`${url}/edit`)} className="btn btn-secondary">🖋 Edit</button>
                    <button onClick={() => history.push(`${url}/study`)} className="btn btn-primary">🧾 Study</button>
                    <button onClick={() => history.push(`${url}/cards/new`)} className="btn btn-primary">+ Add Cards</button>
                    <button onClick={handleDelete} className="btn btn-danger">❌</button>
                </div>
                <div>
                    <h3>Cards</h3>
                    {deck ? deck.cards.map(card => { 
                        return (
                            <div key={card.id} className="border">
                                <div className="d-flex">
                                    <div className="p-2">
                                        <p>{card.front}</p>
                                    </div>
                                    <div className="p-2">
                                        <p>{card.back}</p>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-end">
                                    <button onClick={() => history.push(`${url}/cards/${card.id}/edit`)} className="btn btn-secondary p-2">🖋 Edit</button>
                                    <button onClick={() => handleCardDelete(card.id)} className="btn btn-danger">❌</button>
                                </div>
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
    )
}

export default DeckView