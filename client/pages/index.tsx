import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { WellComeStep } from '../components/Steps/WelcomeStep';
import { EnterNameStep } from '../components/Steps/EnterNameStep';
import { SocialMediaStep } from '../components/Steps/SocialMediaStep';

const stepsComponents = {
  0: WellComeStep,
  1: EnterNameStep,
  2: SocialMediaStep,
};

const Index = () => {
  const [step, setStep] = useState(2);
  const Step = stepsComponents[step];
  return (
    <>
      <div>
        <Step />
      </div>
    </>
  );
};

export default Index;
