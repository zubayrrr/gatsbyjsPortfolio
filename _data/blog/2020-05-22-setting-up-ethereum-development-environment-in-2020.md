---
template: BlogPost
path: /setting-up-ethereum-dev-environmentt
date: 2020-05-22T18:48:49.263Z
title: Setting up Ethereum Development Environment in 2020.
metaDescription: Quick start guide
thumbnail: /assets/og-image.png
---
<!--StartFragment-->

## Installing Prerequisites

1. **NodeJs**- is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.

![nodejs logo](https://i.imgur.com/oNuhGeq.png)
Download NodeJs from: [Here](https://nodejs.org/en/download/)

Documentation: [Here](https://nodejs.org/en/docs/)

> * NPM is a package manager for Node.js files. Developers use this to download dependencies. It comes **preinstalled** when you install NodeJs.

2. **VScode**- Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes embedded Git and support for debugging, syntax highlighting, intelligent code completion, snippets, and code refactoring.

![Vscode logo](https://imgur.com/esDQqfu.png)
Download VScode from: [Here](https://code.visualstudio.com/download)

> * VScode Solidity Extension for syntax highlighting <br />
Get it from: [Here](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)

## Installing Essential Tools

1. **Solc**- The Solidity compiler. This turns our human-readable Solidity code into Ethereum bytecode, which Ethereum network nodes understand how to execute.

![Solidity](https://imgur.com/U9CrYFT.png)

Install Solc using:<br />
```shell
npm install -g solc
```
<br />

Documentation: [Here](https://solidity.readthedocs.io/en/latest/installing-solidity.html)

2. **Truffle**- A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.

![Truffle](https://imgur.com/RvyKoQE.png)

Install Truffle using: <br />
```shell
npm install truffle -g
```
<br />

Documentation: [Here](https://www.trufflesuite.com/docs/truffle/overview)

3. **Ganache**- is a personal blockchain for rapid Ethereum and Corda distributed application development. It provides an entire development cycle; enabling you to develop, deploy, and test your dApps in a safe and deterministic environment.

![Ganache](https://imgur.com/QvGVKVx.png)

Download Ganache from: [Here](https://github.com/trufflesuite/ganache/releases)
<br />

Documentation: [Here](https://www.trufflesuite.com/docs/ganache/overview)

4. **MetaMask**- is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node. It manages your Ethereum wallet, which contains your Ethers (or money), and allows you to send and receive Ethers through a dApp of interest.

![MetaMask](https://imgur.com/WrXeeQL.png)

Download MetaMask from: [Here](https://metamask.io/download.html)
<br />

Documentation: [Here](https://docs.metamask.io/guide/)