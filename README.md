
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
<!--   <li> -->
      <li><a href="#contact">Contact</a></li>
<!--     </li> -->
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The COVID-19 pandemic has become a highly transmissible disease which has caused a disastrous impact worldwide by adversely affecting the global economy, health, and human lives. This sudden explosion and uncontrolled worldwide spread of COVID-19 has revealed the limitations of existing healthcare systems regarding handling public health emergencies. With its onset, Vaccination Certificates have become the means of verifying one’s vaccination status. With improvements in technology occurring everyday, the means of ‘faking’ these vaccination certificates is getting easier day by day. 

As a result, we propose to develop a COVID passport. A COVID passport (COVID-Pass) is a system that allows people to show if they have been vaccinated against COVID-19. It is a `Blockchain-based secure platform for issuing and verifying COVID-19 vaccine certificates`. The passport is seen as a means to reduce malpratices and eases the process of verification of COVID Vaccine Certificates.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Web3.js](https://web3js.readthedocs.io/en/v1.5.2/)
* [Solidity](https://docs.soliditylang.org/en/v0.8.10//)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation
1.  Clone the repo
```
git clone https://github.com/nandinibansal2000/Vaccine-Passport-Verification.git
```
2. Go to Smart Contract Directory
  ```
  cd SmartContract/
  ```

3. Install dependencies
  ```
  npm i
  ```
4. Download ganache from:  [https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache) or use ganache-cli
5. Make it executable using: 
```
chmod u+x ganache-2.5.4-linux-x86_64.AppImage
```
6. Open ganache cli using 
  ```
  npx ganache-cli
  ```
7. Run 
 ```
 npx truffle migrate
 ```
8. Open console using 
 ```
 npx truffle console
 ```
9. Connect to metamask from your browser using custom RPC or localhost 8545.
10. Add ether to your wallet 
  - Click on import account in metamask  
  - Use one of the private keys displayed in the output of `npx ganache-cli`.
11. Go to Frontend Directory
```
cd Frontend/
```
12. Install Dependencies
```
npm i
```
14. Start Frontend using 
 ```
 npm start
 ```


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

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
* dibya18282@iiitd.ac.in
* nandini18056@iiitd.ac.in
* pruthwiraj18075@iiitd.ac.in


