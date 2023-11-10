import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function CardForm({ formData, handleChange, handleSubmit }) {

    const history = useHistory()

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Front</p>
                <label htmlFor="front">
                    <textarea
                        name="front"
                        type="text"
                        id="front"
                        onChange={handleChange}
                        value={formData.front}
                        placeholder="Front side of card"
                    />
                </label>
                <p>Back</p>
                <label>
                    <textarea htmlFor="back"
                        name="back"
                        type="text"
                        id="back"
                        onChange={handleChange}
                        value={formData.back}
                        placeholder="Back side of card"
                    />
                </label>
                <div>
                    <button type="button" onClick={() => history.goBack()} className="m-1 btn btn-secondary">Done</button>
                    <button onClick={handleSubmit} type="submit" className="m-1 btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CardForm