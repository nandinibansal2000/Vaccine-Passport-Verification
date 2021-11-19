# Vaccine-Passport-Verification


# STEPS
- `git clone https://github.com/nandinibansal2000/Vaccine-Passport-Verification.git`
- `cd SmartContract/`
- `npm i`
- `npm install -g truffle@5.0.2`
- Download ganache from: `https://www.trufflesuite.com/ganache`
- Make it executable using: `chmod u+x ganache-2.5.4-linux-x86_64.AppImage` 
- open ganache cli using `npx ganache-cli`
- run `truffle migrate`
- open console using `truffle console`
- Connect to metamask from your browser using custom RPC or localhost 8545.
- Add ether to your wallet using one of the private keys displayed in the output of `npx ganache-cli`.
- Start Frontend using `npm start`


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
