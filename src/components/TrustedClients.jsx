import React from "react";
import VisaLogo from "../assets/images/clients-logo/visa.svg";
import Coinbase from "../assets/images/clients-logo/coinbase.svg";
import JohnDeere from "../assets/images/clients-logo/john-deere.svg";
import Zoom from "../assets/images/clients-logo/zoom.svg";
import GrandHyatt from "../assets/images/clients-logo/GrandHyatt.png";
const TrustedClients = () => {
  return (
    <div className="flex flex-col items-center p-6 mt-8">
      <h1 className="text-2xl font-bold mb-4">Trusted Clients</h1>
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
        perferendis. Recusandae asperiores rem, voluptate laborum id eaque nihil
        tempore
      </p>
      <div className="flex flex-wrap justify-center items-center mt-4">
        <img
          src={VisaLogo}
          alt="Visa Logo"
          className="client-animate h-12 mx-4"
        />
        <img
          src={Coinbase}
          alt="Coinbase Logo"
          className="client-animate h-20 mx-4"
        />
        <img
          src={JohnDeere}
          alt="John Deere Logo"
          className="client-animate h-14 mx-4"
        />
        <img src={Zoom} alt="Zoom Logo" className="client-animate h-12 mx-4" />
        <img
          src={GrandHyatt}
          alt="Grand Hyatt Logo"
          className="client-animate h-20 mx-4"
        />
      </div>
    </div>
  );
};

export default TrustedClients;

