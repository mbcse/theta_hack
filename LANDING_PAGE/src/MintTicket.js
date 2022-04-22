import React, {useState } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Wallets from './Wallets.js'
import "./css/MintTicket.css"

function MintTicket() {
    const [event, setEvent] = useState(false);

    return (
        <div>
            {/* home */}
            <section className="text-gray-600 ml-10 mt-10">
                <div className="items-left inline-flex">
                    <Link to="/">
                        <a className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base" href="/" target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                          </svg>
                          Home
                        </a>
                  </Link>
                </div>
            </section>
            <Wallets />
            {/* mint */}
            <section className="container-mint">
                <h1 className="h1-mint">Mint tickets</h1>
                <center>
                    <input type="text" placeholder="Event name" className="event-name" />
                    <label className="event-img">Event image:</label>
                    <input type="file" accept=".jpg, .jpeg, .png" />
                    <label className="nft-img">Ticket artwork (NFT):</label>
                    <input type="file" accept=".jpg, .jpeg, .png" />
                    <input type="number" placeholder="NFT price" className="nft-price" min="1" />
                    <input type="range" placeholder="Range" className="nft-qnt" min="1" />
                    <button className="btn-mint">Mint</button>
                </center>
            </section>
        </div>
    )
}

export default MintTicket
