

## Steps to start


### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Please make sure the browser is metamask compatible and has metamask installed.

## Steps to test

### `npm test`
This will execute the test suite.

## Abstract

The app connects to metamask and allows you to see all your NFTs and put them up on a blockchain for lending.
Once a lease offer is made, anyone can agree to pay the leasing amount and recurring interest payment until the NFT is returned. NFT lease offer can also set the maximum time of lease. Once the lease time has expired the NFT will return to the owner.

All this is handled by the smart contract and thus all lease conditions are executed automatically.

## Demo
See how to put up your NFTs for borrowing and how to accept other NFTs leasing offers.
![NFT Borrowing Demo](https://github.com/natasha-rupani/NFT_Borrowing/blob/main/NFT-Borrowing-Demo.gif)

## Implemtation
Tech used inmcludes React, css, openzepplin contracts, truffle, solidity etc. Completely tested and hosted on Rinkeby testnet.

## Security

#### Modifiers are used to ensure role based access and for validating crucial IDs
eg of modifiers used: onlyManager() , isValidLeaseID() etc

#### SafeMath is used for all arithematics to prevent overflows and underflows

#### Checks Effects interactions pattern implemented to counter re-entrancy attack vector


## Future Prospect

I would like to implement the option of using existing NFTs as collateral in addition to just interest payments. 
This feature is helpful incase of usable NFTs whose value might reduce depending on its usage. Eg: If a loaded Snipper is an NFT the value of this NFT might reduce everytime a bullet is fired from this NFT. The reduction in value must be obtained from an oracle and there are some complicated interactions that have to be accounted for but it is something that I'm very motivated to implement as it has a real application and has a unique need in the market today.
