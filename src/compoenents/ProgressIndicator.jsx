import React from 'react';

const steps = ['Account Info', 'Business Details', 'Verification'];

const ProgressIndicator = ({ currentStep }) => {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div
            className={`relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border ${
              index + 1 <= currentStep ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-600'
            }`}
          >
            {index + 1}
            {index + 1 < steps.length && (
              <div
                className={`absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 md:w-6 md:h-0.5 lg:w-8 lg:h-0.5 bg-gray-300 ${
                  index + 1 < currentStep ? 'bg-green-600' : ''
                }`}
              />
            )}
          </div>
          <span
            className={`hidden md:block text-sm ${
              index + 1 <= currentStep ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
