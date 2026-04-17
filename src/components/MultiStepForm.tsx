'use client';

import { useState, useRef } from 'react';
import { StepOneData, StepTwoData } from '@/lib/types';
import ProgressBar from './ProgressBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const defaultStepOne: StepOneData = {
  name: '',
  phone: '',
  from_city: '',
  from_address: '',
  from_floor: 0,
  from_elevator: false,
  to_city: '',
  to_address: '',
  to_floor: 0,
  to_elevator: false,
  move_date: '',
  move_time: '',
};

const defaultStepTwo: StepTwoData = {
  items: [],
  boxes: 0,
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [stepOneData, setStepOneData] = useState<StepOneData>(defaultStepOne);
  const [stepTwoData, setStepTwoData] = useState<StepTwoData>(defaultStepTwo);
  const topRef = useRef<HTMLDivElement>(null);

  const goToStep = (n: number) => {
    setStep(n);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={topRef} className="w-full max-w-lg mx-auto">
      <ProgressBar currentStep={step} />
      {step === 1 && (
        <StepOne
          defaultValues={stepOneData}
          onNext={(data) => { setStepOneData(data); goToStep(2); }}
        />
      )}
      {step === 2 && (
        <StepTwo
          defaultValues={stepTwoData}
          onNext={(data) => { setStepTwoData(data); goToStep(3); }}
          onBack={() => goToStep(1)}
        />
      )}
      {step === 3 && (
        <StepThree
          stepOne={stepOneData}
          stepTwo={stepTwoData}
          onBack={() => goToStep(2)}
        />
      )}
    </div>
  );
}
