import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function Study() {

    const { id } = useParams()
    const [deck, setDeck] = useState(null);
    console.log(deck);
    const [cardSide, setCardSide] = useState(true)
    const [index, setIndex] = useState(0)
    
    function restart() {
        if(window.confirm("Restart Cards?")) {
            setIndex(0)
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
    }, [id])

    return (
        <div>
            {deck ? <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
                <h1>Study: {deck.name}</h1>
                {deck.cards.length <= 2 ? (
                    <div>
                        <h2>Not Enough cards</h2>
                        <p>You need atleast 3 cards to study. There are {deck.cards.length - 1} in this deck.</p>
                        <button>+ Add Cards</button>
                    </div>
                ) : (
                    <div>
                        {cardSide ? (
                            <div className="border">
                                <h3>card {index + 1} of {deck.cards.length}</h3>
                                <React.Fragment>
                                    <p>{deck.cards[index].front}</p>
                                    <button onClick={() => setCardSide(!cardSide)} className="btn btn-secondary">Flip</button>
                                    {index !== deck.cards.length -1 ? (
                                        <button onClick={() => setIndex(index + 1)} className="btn btn-primary">Next</button>
                                    ) : <button onClick={restart} className="btn btn-primary">Next</button>}
                                </React.Fragment>
                            </div>
                        ) : (
                            <div className="border">
                                <h3>card {index + 1} of {deck.cards.length}</h3>
                                <React.Fragment>
                                    <p>{deck.cards[index].back}</p>
                                    <button onClick={() => setCardSide(!cardSide)} className="btn btn-secondary">Flip</button>
                                    {index !== deck.cards.length -1 ? (
                                        <button onClick={() => setIndex(index + 1)} className="btn btn-primary">Next</button>
                                    ) : <button onClick={restart} className="btn btn-primary">Next</button>}
                                </React.Fragment>
                            </div>
                        )}
                    </div>
                )}
            </div> : ""}
        </div>
        
    )
}

export default Study