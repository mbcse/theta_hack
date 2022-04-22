import React from 'react'
import Web3 from 'web3';
import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import "./css/MintTicket.css"


function Wallets() {
    return (
        <div className="btn-psn">
            <Web3Connect.Button
                network="mainnet" // optional
                providerOptions={{
                  walletconnect: {
                    package: WalletConnectProvider, // required
                    options: {
                      infuraId: "INFURA_ID" // required
                    }
                  },
                  portis: {
                    package: Portis, // required
                    options: {
                      id: "PORTIS_ID" // required
                    }
                  },
                  fortmatic: {
                    package: Fortmatic, // required
                    options: {
                      key: "FORTMATIC_KEY" // required
                    }
                  },
                  squarelink: {
                    package: Squarelink, // required
                    options: {
                      id: "SQUARELINK_ID" // required
                    }
                  }
                }}
                onConnect={(provider) => {
                  const web3 = new Web3(provider); // add provider to web3
                }}
                onClose={() => {
                  console.log("Web3Connect Modal Closed"); // modal has closed
                }}
            />
        </div>
    )
}

export default Wallets
