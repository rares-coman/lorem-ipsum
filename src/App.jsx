import React, {useState} from 'react'
import text from "./data.js";
import {nanoid} from "nanoid";

const App = () => {

    const [count, setCount] = useState(1)
    const [paragraph, setParagraph] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        const newArray = text.slice(0, count)
        setParagraph(newArray)
    }


    return <main className='section-center'>
        <h4>TIRED OF BORING LOREM IPSUM?</h4>
        <form className='lorem-form' onSubmit={submitHandler}>
            <label>Paragraphs</label>
            <input type='number' id='input' min={1} max={8} step={1} value={count}
                   onChange={(event) => setCount(event.target.value)}/>
            <button type='submit' className='btn'>
                generate
            </button>
        </form>
        {paragraph.map((item) => {

            const id = nanoid()
            return (
                <div className='lorem-text'>
                    <p key={id}>{item}</p>
                </div>
            )
        })}
    </main>;
};
export default App;
