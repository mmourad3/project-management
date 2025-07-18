import React from "react";
import VisaLogo from "../assets/images/clients-logo/visa.svg?react";
import Coinbase from "../assets/images/clients-logo/coinbase.svg?react";
import JohnDeere from "../assets/images/clients-logo/john-deere.svg?react";
import Zoom from "../assets/images/clients-logo/zoom.svg?react";
import GrandHyatt from "../assets/images/clients-logo/grand-hyatt.svg?react";
import Fender from "../assets/images/clients-logo/fender.svg?react";
import JohnDeereDark from "../assets/images/clients-logo/john-deere-dark.png";

const TrustedClients = () => {
  return (
    <div className="flex flex-col items-center pt-15 dark:bg-gray-custom">
      <h1 className="text-[40px] font-bold mb-4 dark:text-white">
        Trusted Clients
      </h1>
      <p className="text-center max-w-150 flex-wrap dark:text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
        perferendis. Recusandae asperiores rem, voluptate laborum id eaque nihil
        tempore
      </p>
      <div className="flex flex-wrap justify-center items-center mt-4 gap-8">
        <VisaLogo className="client-animate h-28 w-auto" />
        <Coinbase className="client-animate h-40 w-auto" />
        <JohnDeere className="client-animate dark:hidden h-28 w-auto" />
        <img className="client-animate hidden dark:block h-28 w-auto" src={JohnDeereDark} alt="John Deere dark theme" />
        <Zoom className="client-animate h-36 w-auto" />
        <GrandHyatt className="client-animate h-40 w-auto" />
        <Fender className="client-animate h-10 w-auto" />
      </div>
    </div>
  );
};

export default TrustedClients;
