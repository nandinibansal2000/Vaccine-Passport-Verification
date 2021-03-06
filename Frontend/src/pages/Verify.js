import React, {useState} from 'react'
import Header from "../components/Header";
import UploadButton from "../components/UploadButton";
import "./Verify.css";
import CreateQRButton from '../components/CreateQRButton';
import { verifyVaccineDetailsToken } from '../Web3Client';
import LoginButton from '../components/LoginButton';
import SignInButton from '../components/SignInButton';


export default function Verify() {
  const [qrJsonData, setQrscan_] = useState(null); 
  const[verified, setVerified] = useState(null);

  // TODO nandini: call verifyVaccineDetails
  const verify = async () =>{
      // if scan was successful, call verify function
      if (qrJsonData){
        console.log(qrJsonData);
    
        try{
          await verifyVaccineDetailsToken(qrJsonData.name,qrJsonData.gender, qrJsonData.dob, qrJsonData.aadharId, qrJsonData.doseNo);
          console.log("Verified vaccine details");
          }
        catch(error){
          console.log(error);
          console.log("Failed");
        }
      

      }
     // if verified, setVerified(true);
      // if verificaition fails, setVerified(false);
  }

  const setQrscan = async(data) => {
    var data_ = JSON.parse(data);
    console.log(data_);
    setQrscan_(data_);
    await verify();
    console.log(qrJsonData, "ff");
  };
  
  return (
    <>
      <Header />
      <div className="page">
        <div className="left">
          <div className="left-upper">
            <h1 className="left-heading-text">
              COVID-19 vaccines: everything you need to know
            </h1>
            <p className="left-para-text">
              Now that COVID-19 vaccines have reached billions of people
              worldwide, the evidence is overwhelming that no matter which one
              you take, the vaccines offer life-saving protection against a
              disease that has killed millions. The pandemic is far from over,
              and they are our best bet of staying safe.
            </p>
          </div>

          <img
            srcset={process.env.PUBLIC_URL + "/virus.jpg 976w"}
            alt="virus"
            sizes="(max-width: 540px) 0px,(max-width: 780px) 160px,(max-width: 1240px) 250px,360px"
          ></img>
        </div>
        <div className="center">
          <div className="center-upper">
            <div style={{paddingTop:"50px"}}>
                <UploadButton 
                    qrJsonData={qrJsonData}
                    setQrscan={setQrscan}
                    verified={verified}
                />
                <CreateQRButton/>
                <LoginButton/>
                <SignInButton/>
            </div>
            
          </div>

          <div className="center-lower">

            <h1 className="center-lower-heading-text">
              WHAT ARE THE DIFFERENT TYPES OF COVID-19 VACCINES?
            </h1>
            <p className="center-lower-para-text">
              There are three main approaches to designing a vaccine. Their
              differences lie in whether they use a whole virus or bacterium;
              just the parts of the germ that triggers the immune system; or
              just the genetic material that provides the instructions for
              making specific proteins and not the whole virus. There are four
              types of vaccines in clinical trials: whole virus, protein
              subunit, viral vector and nucleic acid (RNA and DNA), each of
              which protects people, but by producing immunity in a slightly
              different way.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-upper">
            <h1 className="right-heading-text">
              IF I???VE HAD COVID-19, DO I REALLY NEED THE VACCINE?
            </h1>
            <p className="right-para-text">
              Vaccines mimic our body???s natural response to infection. However
              while a previous infection does give you some immunity against
              COVID-19, vaccination gives your body a massive immune boost ???
              including against new variants.
            </p>
          </div>
          <img
            srcset={process.env.PUBLIC_URL + "/banner.png 477w"}
            alt="banner"
            sizes="(max-width: 540px) 0px,(max-width: 780px) 160px,(max-width: 1240px) 250px,360px"
          ></img>
        </div>
      </div>
    </>
  );
}
