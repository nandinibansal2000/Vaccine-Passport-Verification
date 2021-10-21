pragma solidity ^0.5.0;

contract VaccinePassport {
  uint public vaxxpassCount;

  struct CardHolder {
    string name;
    string gender; // m/f/l/g/b/t/q
    string dob; //dd-mm-yyyy
    string aadharID;
    string doseNo;
  }

  struct VaccineDetails {
    string batchID;
    string vaccineName;
    string manufacturer;
    string placeOfVaccination;
  }

  mapping(uint => VaccineDetails) public vaccineDetails;

  constructor() public {
        AddVaccineDetail(
                        // card holder details
                        "Dibya Gautam",
                        "F",
                        "24-12-1999",
                        "1234325345",
                        "2",
                        //vacc details
                        "2314",
                        "Covishield",
                        "Serum Institute",
                        "XYZ Hospital, Delhi");
      }


  function AddVaccineDetail(string memory _name,
                            string memory _gender,
                            string memory _dob,
                            string memory _aadharID,
                            string memory  _doseNo,
                            string memory  _batchID,
                            string memory _vaccineName,
                            string memory _manufacturer,
                            string memory _placeOfVaccination
                            ) 
    public {
    VaccineDetails memory vaccineDetail = VaccineDetails(_batchID, _vaccineName, _manufacturer, _placeOfVaccination);
    CardHolder memory cardHolder = CardHolder(_name, _gender, _dob, _aadharID, _doseNo);
    
    uint cardHolderID = vaxxpassCount++; // change this to SHA256 of cardHolder

    // string cardHolderID = string(sha256(abi.encode(
    //     cardHolder.name,
    //     cardHolder.gender,
    //     cardHolder.dob,
    //     cardHolder.aadharID,
    //     cardHolder.doseNo
    // )));

    vaccineDetails[cardHolderID] = vaccineDetail;
  }


}