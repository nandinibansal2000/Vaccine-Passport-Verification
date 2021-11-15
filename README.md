# Vaccine-Passport-Verification


# STEPS
- `git clone https://github.com/nandinibansal2000/Vaccine-Passport-Verification.git`
- `cd SmartContract/`
- `npm i`
- `npm install -g truffle@5.0.2`
- Download ganache from: `https://www.trufflesuite.com/ganache`
- Make it executable using: `chmod u+x ganache-2.5.4-linux-x86_64.AppImage` 
- run `truffle migrate`
- open console using `truffle console`


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
