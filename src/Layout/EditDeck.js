import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { readDeck, updateDeck } from "../utils/api"
import DeckForm from "./DeckForm"

function EditDeck() {

    const history = useHistory()
    const { id } = useParams()
    const [deck, setDeck] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await readDeck(id);
                setDeck(response);
                setFormData({
                    name: response.name,
                    description: response.description
                })
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()  
    }, [id])

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        setDeck({
            ...deck,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateDeck(deck)
        history.push(`/decks/${deck.id}`)
    }

    function goBack() {
        history.push(`/decks/${deck.id}`)
    }

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h3>Edit Deck</h3>
            </div>
            <div>
                <DeckForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} goBack={goBack} />
            </div>
        </div>
    )
}

export default EditDeck