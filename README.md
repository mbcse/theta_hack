# Theta_Hack
<p align="center">
  <img align="center" src="https://github.com/mbcse/theta_hack/blob/main/LANDING_PAGE/src/images/logo.png" width="200" height="200"></img>
</p>

<h1 align="center">ThetaNftTickets</h1>

## Run locally
1. Clone the project locally, change into the directory:
```bash
git clone https://github.com/mbcse/theta_hack.git

```

2. install dependencies
```bash
npm install

# or

yarn
```

3. Start the application.
```bash
npm run dev
```

## Development setup
1. Clone the project locally, change into the directory, and install the dependencies:
```bash
git clone https://github.com/mbcse/theta_hack.git


# install dependencies using `npm` or `yarn`.

npm install

# or

yarn
```

Create `.secret` and `.env` files, 
* Put private key of your wallet account in `.secret`.
* Put `NEXT_PUBLIC_WORKSPACE_URL=https://eth-rpc-api-testnet.thetatoken.org/rpc` in `.env` file.

2. Start the local Hardhat node.
```bash
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window.

```bash
npx hardhat run scripts/deploy.js --network theta
```

4. Start the application.
```bash
npm run dev
```