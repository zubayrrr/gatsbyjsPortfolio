---
template: BlogPost
path: /setting-up-ethereum-dev-environment
date: 2020-05-22T16:28:00.209Z
title: Setting up an Ethereum Development Environment
metaDescription: Quick start guide
thumbnail: /assets/og-image.png
---


<!--StartFragment-->

# Ethereum Development Key Concepts

1. **Solidity**- The most popular programming language for writing smart contracts on Ethereum.

   > solcjs is a `Node.js` library and command-line tool that is used to compile solidity files.
   >
   > Documentation*:* <https://solidity.readthedocs.io/en/latest/installing-solidity.html>

   Install solc using this npm command: `npm install -g solc`

   ```shell
   npm install -g solc
   ```
2. **Truffle**- A company that creates Ethereum development tools like Truffle, Ganache, and Drizzle. In this guide, we’ll be installing Ganache CLI so we can run our Solidity and Web3.js code locally during development.
3. **Ganache CLI**- A command line interface for running a locally hosted instance of Ethereum. We can start up a blank Ethereum blockchain, or a fork of a public network’s blockchain on your local machine.
4. **Solc**- The Solidity compiler. This turns our human-readable Solidity code into Ethereum bytecode, which Ethereum network nodes understand how to execute.
5. **MetaMask**- A web browser extension that facilitates invocation of Ethereum smart contracts from a web page. MetaMask uses Web3.js under the hood. It is a tool for end users to use ETH, Ethereum based cryptocurrency tokens, and keep track of their Ethereum wallets when using decentralized, Web3 applications (a.k.a. DApps).
