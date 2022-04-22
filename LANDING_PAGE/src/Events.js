import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import "./css/Events.css"

function Events(props) {
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
            {/* events */}
            <sections className="events">
                <div className="event">

                </div>
            </sections>
        </div>
    )
}

export default Events
