//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthCareSignUp {
    uint256 public numHealthcareWorkers;

    struct HCWorkerData {
        string licenseID;
        string affiliatedHospital;
        string emailID;
        bytes32 encryptedPassword;
        bool registered;
    }

    event Registered(
        address indexed userAddress,
        string indexed email,
        string indexed license,
        string affiliatedHospital,
        uint256 signupTime
    );

    mapping(address => HCWorkerData) private hcWorkerDatas;
    mapping(string => address) private hcLicense;
    mapping(string => address) private hcEmail;

    modifier alreadyRegistered() {
        require(!hcWorkerDatas[msg.sender].registered, "already registered");
        _;
    }
    modifier emailAlreadyRegistered(string memory _email) {
        require(hcEmail[_email] == address(0x0), "email already registered");
        _;
    }
    modifier licenseAlreadyRegistered(string memory _license) {
        require(
            hcLicense[_license] == address(0x0),
            "License is already registered"
        );
        _;
    }

    constructor() public {}

    function signup(
        string memory _licenseID,
        string memory _affiliatedHospital,
        string memory _emailID,
        string memory _password
    )
        public
        alreadyRegistered
        emailAlreadyRegistered(_emailID)
        licenseAlreadyRegistered(_licenseID)
    {
        bytes32 _encryptedPassword = keccak256(abi.encodePacked(_password));

        hcWorkerDatas[msg.sender] = HCWorkerData(
            _licenseID,
            _affiliatedHospital,
            _emailID,
            _encryptedPassword,
            true
        );
        hcEmail[_emailID] = msg.sender;
        hcLicense[_licenseID] = msg.sender;

        emit Registered(
            msg.sender,
            _emailID,
            _licenseID,
            _affiliatedHospital,
            block.timestamp
        );
    }

    function login(string memory _license, string memory _password)
        public
        view
        returns (address, uint256)
    {
        require(
            hcWorkerDatas[msg.sender].registered,
            "Your address is not registered"
        );
        require(
            keccak256(abi.encodePacked(_license)) ==
                keccak256(
                    abi.encodePacked(hcWorkerDatas[msg.sender].licenseID)
                ),
            "Incorrect License Number"
        );
        require(
            keccak256(abi.encodePacked(_password)) ==
                hcWorkerDatas[msg.sender].encryptedPassword,
            "Incorrect password"
        );
        //emit Login(msg.sender,data[msg.sender].name,data[msg.sender].email,data[msg.sender].regId,now);
        return (msg.sender, block.timestamp);
    }
}
