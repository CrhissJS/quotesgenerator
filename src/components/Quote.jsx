import React from 'react';
import {useState} from 'react'
import quotes from "../quotes.json"
import '../App.css'

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];

const Quote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);

    const changeQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setIndex(random);
      };

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];

    document.body.style = `background: ${color}`;

    return (
        <div className='father'>
            <div className="container-quote"  style={{ color: color }}>
                <i className="quote fa-solid fa-quote-left"></i>
                <h1>{quotes[index].quote}</h1>
                <h1>{quotes[index].author}</h1>
                <button className="button" onClick={changeQuote} style={{ background: color }}>
                    <i className="fa-solid fa-shuffle"></i>
                </button>
            </div>
        </div>
    );
};

export default Quote;