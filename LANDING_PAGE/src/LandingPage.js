import React, { useState }  from 'react'
import Navbar from "./Navbar.js";
import Footer from "./Footer.js"
import "./css/Landing.css";
import Logo from "./images/theta.png"
import Roadmap from "./images/roadmap.jpeg"

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
        <Navbar />
        {/* header  */}
        <section className="header">
          <section className="header-text ml-20">
            <h1 className="text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              <div className="py-5">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  ThetaNftTickets
                </span>
              </div>
            </h1>
            <p className="text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Let's replace the normal ticketing system<br/> with NFTs all over the world.
            </p>
          </section>
          <p className="btn-center">
            <a href="https://thetanftticket.netlify.app/">
            <button
              className="btn mt-40 ml-20 bg-gradient-to-r from-purple-800 to-blue-500 text-white font-bold py-2 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            >Get Started</button>
            </a>
          </p>
          <img className="logo inline-flex" src={Logo} value="Theta Logo"/>
        </section>
          {/* about */}
          <section className="about" id="about">
            <section class="items-center text-white body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <p class="mt-20 leading-relaxed text-lg">ThetaNftTickets is the ticketing marketplace on Theta network where you can buy, create, and sell tickets in the form of NFTs in no time with a seamless user experience. On this platform you can mass-produce NFT tickets as an organization/individual, we're working on features like royalties where the specific amount of sell will go towards charity, artist, or merch, etc. Also as a user, you can buy NFT tickets for events. Our mission is to replace the normal ticketing system with NFTs all over the world.</p>
                  <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
                </div>
              </div>
            </section>
          </section>
          {/* benefits */}
          <section className="benefits text-gray-400 body-font" id="benefits">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-400">Benefits of NFT Ticketing</h1>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">Easy validation</h2>
                    <p className="leading-relaxed text-base">The transfer of NFTs from the initial sale to resale is stored on the blockchain so that all parties can prove the ticket’s authenticity.</p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mt-1 bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">Low cost</h2>
                    <p class="leading-relaxed text-base">Costs associated with selling and minting NFTs are negligible on Theta as compared to the traditional ticketing system.<br/></p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">Quick production</h2>
                    <p className="leading-relaxed text-base">An NFT can be minted and ready to sell in less than a minute.<br/><br/></p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">Build trust</h2>
                    <p className="leading-relaxed text-base">Build trust between fans and artists by using NFT royalty splits.<br/><br/></p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-tree" viewBox="0 0 16 16">
                        <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">Good for planet</h2>
                    <p className="leading-relaxed text-base">Stops the mass production of physical paper and helps the environment.<br/><br/></p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">Prevent scams</h2>
                    <p className="leading-relaxed text-base">Blockchain provides a single source of truth for both ticket holders and organizers.<br/><br/></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        {/* roadmap */}
        <section className="roadmap items-center text-gray-400 body-font" id="roadmap">
          <div className="flex flex-wrap w-full flex-col items-center text-center">
            <h1 className="sm:text-3xl mt-10 text-2xl font-medium title-font text-gray-400">Roadmap</h1>
          </div>
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-yellow-400 mb-1 tracking-wider">14 FEB 2022</h2>
                    <p className="leading-relaxed">Build on idea - Initial prototype, system design, landing page, etc. </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-yellow-400 mb-1 tracking-wider">8 MAR 2022</h2>
                    <p className="leading-relaxed">Write Smart Contracts and connect with client via Web3.</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-yellow-400 mb-1 tracking-wider">1 APR 2022</h2>
                    <p className="leading-relaxed">Improve UI/UX, responsiveness, and usability.</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-yellow-400 mb-1 tracking-wider">11 APR 2022</h2>
                    <p className="leading-relaxed">Work on scalability and smart contract security.</p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-yellow-400 mb-1 tracking-wider">30 MAY 2022</h2>
                    <p className="leading-relaxed">Final launch on Theta Main Network.</p>
                  </div>
                </div>
              </div>
              <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={Roadmap} alt="step"></img>
            </div>
          </div>
        </section>
        {/* faq */}
        <section className="faq text-gray-700" id="faq">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <div className="flex flex-wrap w-full flex-col items-center text-center">
                <h1 className="sm:text-3xl mt-10 text-2xl font-medium title-font text-gray-400">Frequently Asked Question</h1>
              </div>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is ThetaNftTickets?
                  </summary>
                  <span className="text-gray-400">
                    ThetaNftTickets is the ticketing marketplace on theta network where you can buy, create, and sell tickets in the form of NFTs in no time with a seamless user experience.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What is NFT?
                  </summary>
    
                  <span className="text-gray-400">
                    NFT (Non Fungible Token) also known as ERC721 token, NFTs are digital assets on the blockchain. NFTs are unique and hence, unlike all crypto coins, they’re non-exchangeable assets. NFT could be any digital asset such as photo, video, audio, etc.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What are gas fees?
                  </summary>
    
                  <span className="text-gray-400">
                    Gas fees are payments made by users to facilitate the transaction process and validate the transaction on the Ethereum blockchain. The transaction is said to be completed once the validation is done by the miner.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">

                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What are NFT royalties?
                  </summary>
    
                  <span className="text-gray-400">
                    NFT royalties give you a percentage of the sale price each time your NFT creation is sold on a marketplace. NFT royalty payments are perpetual and are executed by smart contracts automatically.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How to buy and sell NFT tickets?
                  </summary>
    
                  <span className="text-gray-400">
                    Click on <a href="#home" className="home-link">Get Started</a> button to buy NFT ticket as a user, or produce and sell tickets for an event as an organization/individual.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  );
}
