
# Vaccine-Passport-Verification
<div id="top"></div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  <li>
      <li><a href="#contact">Contact</a></li>
    </li>
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)
* [Web3.js](https://web3js.readthedocs.io/en/v1.5.2/)
* [Solidity](https://docs.soliditylang.org/en/v0.8.10//)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation
1.  Clone the repo
```git clone https://github.com/nandinibansal2000/Vaccine-Passport-Verification.git```
2. ```cd SmartContract/```
3. ```npm i```
4. Download ganache from:  [https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache)
5. Make it executable using: 
```chmod u+x ganache-2.5.4-linux-x86_64.AppImage```
7. Open ganache cli using 
  ```npx ganache-cli```
8. Run 
 ```truffle migrate```
9. Open console using 
 ```truffle console```
10. Connect to metamask from your browser using custom RPC or localhost 8545.
11. Add ether to your wallet 
  - Click on import account in metamask  
  - Use one of the private keys displayed in the output of `npx ganache-cli`.
12. Start Frontend using `npm start`


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>






# STEPS


### Truffle Console commands
```
reg = await HealthCareSignUp.deployed()
vaxx = await VaccinePassport.deployed()
reg.signup("243534345", "XYZ hospital", "abc@xyz.com", "password")
reg.login("243534345", "password")
vaxx.setAddressSignUp(reg.address)
vaxx.addVaccineDetail("Dib", "F", "15-02-1999", "243252", "2", "21432", "Covishield", "Serum", "XYZ hospital", "243534345", "password")
vaxx.verifyVaccineDetails("Dib", "F", "15-02-1999", "243252", "2")
```
