---
template: BlogPost
path: /setting-up-ethereum-dev-environment
date: 2020-05-22T18:48:49.263Z
title: Setting up Ethereum Development Environment in 2020.
metaDescription: Quick start guide
thumbnail: /assets/og-image.png
---
<!--StartFragment-->

# Installing essential tools

1. **Solc**- The Solidity compiler. This turns our human-readable Solidity code into Ethereum bytecode, which Ethereum network nodes understand how to execute.

   > solcjs is a `Node.js` library and command-line tool that is used to compile solidity files.

    Install solc using: 

   ```shell
   npm install -g solc
   ```

   > Documentation: <https://solidity.readthedocs.io/en/latest/installing-solidity.html>
2. **Truffle**- A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier 

   Install Truffle using: 

   ```shell
   1. npm install truffle -g
   ```

   > Documentation: <https://www.trufflesuite.com/docs/truffle/overview>
3. **Ganache**- is a personal blockchain for rapid Ethereum and Corda distributed application development. It provides an entire development cycle; enabling you to develop, deploy, and test your dApps in a safe and deterministic environment. Download Ganache from: <https://github.com/trufflesuite/ganache/releases>

   > *Documentation*: <https://www.trufflesuite.com/docs/ganache/overview> 
4. **MetaMask**-  MetaMask  is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node. It manages your Ethereum wallet, which contains your Ethers (or money), and allows you to send and receive Ethers through a dApp of interest. Download MetaMask from: <https://metamask.io/download.html>

   > *Documentation*: [https://docs.metamask.io/guide](https://docs.metamask.io/guide/)/
