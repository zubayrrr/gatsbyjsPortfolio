---
template: BlogPost
path: /setting-up-ethereum-dev-environment
date: 2020-05-22T18:48:49.263Z
title: Setting up Ethereum Development Environment in 2020.
metaDescription: Quick start guide
thumbnail: /assets/og-image.png
---
<!--StartFragment-->

# Installing prerequisites

1. **NodeJs**- Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. 

      ![NodeJs](/assets/nodejs.png)

      Download NodeJs from: [Here](https://nodejs.org/en/download/)

      *Documentation*: [Here](https://nodejs.org/en/docs/)

   * **NPM**- is a package manager for Node.js files. Developers use this to download dependencies. It comes **preinstalled** when you install NodeJs.   

<p>&nbsp;</p>

2. **VScode**- Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes embedded Git and support for debugging, syntax highlighting, intelligent code completion, snippets, and code refactoring.

      ![VScode](/assets/vscode.png))

      Download VScode from: [Here](https://code.visualstudio.com/download)

   * **VScode Solidity extension for syntax highlighting**

  
      Get it from: [Here](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
    
<p>&nbsp;</p>

# Installing essential tools

1. **Solc**- The Solidity compiler. This turns our human-readable Solidity code into Ethereum bytecode, which Ethereum network nodes understand how to execute.

      ![Solidity](/assets/solidity.png)

   Install solc using: 
   ```shell
   npm install -g solc
   ```

      *Documentation*: [Here](https://solidity.readthedocs.io/en/latest/installing-solidity.html)
<p>&nbsp;</p>
2. **Truffle**- A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier 

![Truffle](/assets/truffle.png)

   Install Truffle using: 

```shell
 npm install truffle -g
```

<p>&nbsp;</p>

   *Documentation*: [Here](https://www.trufflesuite.com/docs/truffle/overview)

<p>&nbsp;</p>

3. **Ganache**- is a personal blockchain for rapid Ethereum and Corda distributed application development. It provides an entire development cycle; enabling you to develop, deploy, and test your dApps in a safe and deterministic environment. 

![Ganache](/assets/ganache.png)

   Download Ganache from: [Here](https://github.com/trufflesuite/ganache/releases)

   *Documentation*: [Here](https://www.trufflesuite.com/docs/ganache/overview)

<p>&nbsp;</p>

4. **MetaMask**-  MetaMask  is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node. It manages your Ethereum wallet, which contains your Ethers (or money), and allows you to send and receive Ethers through a dApp of interest. 

![MetaMask](/assets/metamask.png)

   Download MetaMask from: [Here](https://metamask.io/download.html)

   *Documentation*: [Here](https://docs.metamask.io/guide/)
