import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import { useEffect, useState } from "react";
import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";

function DeckView() {

    const { path, url } = useRouteMatch()
    const { id } = useParams()
    const [deck, setDeck] = useState(null);
    const history = useHistory()


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
                <button className="btn btn-secondary">🖋 Edit</button>
                <button onClick={() => history.push(`${url}/study`)} className="btn btn-primary">🧾 Study</button>
                <button className="btn btn-primary">+ Add Cards</button>
                <button className="btn btn-danger">❌</button>
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
                                <button className="btn btn-secondary p-2">🖋 Edit</button>
                                <button className="btn btn-danger">❌</button>
                            </div>
                        </div>
                    )
                }) : ""}
            </div>
        </div>
    )
}

export default DeckView