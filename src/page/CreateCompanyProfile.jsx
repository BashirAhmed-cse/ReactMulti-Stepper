import { useState } from 'react';

import { StepperContext } from '../contexts/StepperContext';
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';
import Account from '../components/steps/Account';
import Details from '../components/steps/Details';
import Final from '../components/steps/Final';
import Payment from '../components/steps/Payment';

const CreateCompanyProfile = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
      "Account Information",
      "Personal Details",
      "Payment",
      "Complete"
  ];
  const displayStep = (step) =>{
    switch(step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Payment />
      case 4:
        return <Final />
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next"? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <>
   
    <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className='container horizontal mt-5'>
      <Stepper
      steps ={steps}
      currentStep = {currentStep}
      />

      <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      </div>
      {currentStep !== steps.length &&
        <StepperControl
        handleClick = {handleClick}
        currentStep ={currentStep}
        step={steps}
        />
      }
      </div>
    </>
  )
}

export default CreateCompanyProfile

