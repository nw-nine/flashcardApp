import React, { useState } from "react";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

function CreateCard() {

    const history = useHistory()
    const { id } = useParams()
    const [deck, setDeck] = useState([])

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

    const initialFormData = {
        front: "",
        back: ""
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
        createCard(id, formData)
        history.goBack()
    }

    

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h3>{deck.name}: Add Card</h3>
            </div>
            <div>
                <CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default CreateCard