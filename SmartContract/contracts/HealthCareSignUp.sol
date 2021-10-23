pragma solidity ^0.5.0;

contract HealthCareSignUp {
  uint public numHealthcareWorkers;

  struct HCWorkerData {
    string licenseID;
    string affiliatedHospital;
    string emailID;
    string encryptedPassword;
    bool registered;
  }

  event Registered(
    address indexed userAddress,
    string indexed email,
    string indexed license,
    string affiliatedHospital,
    uint signupTime);


  mapping(address => HCWorkerData) private hcWorkerDatas;
  mapping(string => address) private hcLicense;
  mapping(string => address) private hcEmail;

  modifier isHuman() {
        require(!msg.sender.isContract(),"only humans can register");
        _;
    }                    
    modifier alreadyRegistered() {
        require(!hcWorkerDatas[msg.sender].registered,"already registered");
        _;
    }
    modifier emailAlreadyRegistered(string _email) {
        require(hcEmail[_email] == 0x00,"email already registered");
        _;
    }
    modifier licenseAlreadyRegistered(uint _license) {
        require(hcLicense[_license] == 0x00,"License is already registered");
        _;
    }
    

  constructor() public {}


  function signup(string memory _licenseID,
                  string memory _affiliatedHospital,
                  string memory _emailID,
                  bytes32 memory _password
                ) 
    public
    isHuman
    alreadyRegistered
    emailAlreadyRegistered(_email)
    licenseAlreadyRegistered(_license)
  {

    bytes32 _encryptedPassword = keccak256(abi.encodePacked(_password));

    hcWorkerDatas[msg.sender] = HCWorkerData(_licenseID, _affiliatedHospital, _emailID, _encrypredPassowrd);
    hcEmail[_email] = msg.sender;
    hsLicense[_phoneNumber] = msg.sender;

    emit Registered(msg.sender, _email, _license, _affiliatedHospital, now);
    return true;
  }

  function login(string _license, string _password) public view returns (address,uint){
    require(hcWorkerDatas[msg.sender].registered, "Your address is not registered");
    require(_license == hcWorkerDatas[msg.sender].license, "Incorrect License Number");
    require(keccak256(abi.encodePacked(_password)) == hcWorkerDatas[msg.sender].encryptedPassword, "Incorrect password");
    //emit Login(msg.sender,data[msg.sender].name,data[msg.sender].email,data[msg.sender].regId,now);
    return (msg.sender,now);
  }


}