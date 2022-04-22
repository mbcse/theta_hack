import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="body-font bg-black mt-0">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                  <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-yellow-500 sm:py-2 sm:mt-0 mt-4">© 2022
                    <span className="text-white ml-1" rel="noopener noreferrer">ThetaNftTickets • All rights reserved</span>
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-white" href="" target="_blank">
                      <img src="https://img.icons8.com/doodle/48/000000/gmail-new.png" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-6 h-6 text-white hover:text-gray-600" viewBox="0 0 24 24" />
                    </a>
                    <a className="ml-4 text-gray-500" href="" target="_blank">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 text-blue-400 hover:text-blue-500" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
            </footer>  
        </div>
    )
}

export default Footer
