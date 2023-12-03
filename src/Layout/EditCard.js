import React from "react"
import CardForm from "./CardForm"
import { useEffect } from "react";
import { readCard, readDeck, updateCard } from "../utils/api";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function EditCard() {

    const history = useHistory()
    const [deck, setDeck] = useState([])
    const [card, setCard] = useState([])
    const { deckId, cardId } = useParams()
    const [formData, setFormData] = useState({
        front: "",
        back: ""
    })

    useEffect(() => {
       
        async function fetchData() {
            try {
                const response = await readDeck(deckId);
                const cardResponse = await readCard(cardId)
                setCard(cardResponse)
                setDeck(response);
                setFormData({
                    front: cardResponse.front,
                    back: cardResponse.back
                })
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [deckId, cardId]);


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        setCard({
            ...card,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateCard(card)
        history.push(`/decks/${deck.id}`)
        window.location.reload(false);
    }


    return (
        <div>
            {card && (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                    </ol>
                </nav>
            </div>
            )}
            <div>
                <h3>Edit Card</h3>
            </div>
            {card && (
            <CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            )}
        </div>
    )

}

export default EditCard