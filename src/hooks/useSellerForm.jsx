import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { createSellerApi, verifyEmail, verifyPanPhoneGstin } from '../services/varificationService';

const useSellerForm = () => {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const validateFields = {
    1: ['email', 'password', 'confirmPassword','name'],
    2: ['phone', 'pan', 'gstinNumber','bussinessName','registrationCertificate','city','state','postalCode','pickupLocation'],
    3: ['accountNumber'],
  };

  const { register, handleSubmit, control, formState: { errors }, trigger, getValues } = useForm();

  const handleNextStep = async () => {
    const fieldsToValidate = validateFields[currentStep];
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      if (fieldsToValidate.includes('email')) {
        try {
          const email = getValues('email');
          await verifyEmail(email);
          setCurrentStep((prevStep) => prevStep + 1);
        } catch (error) {
          toast.error('Email already exists');
        }
      } else if (fieldsToValidate.includes('pan')) {
        try {
          const pan = getValues('pan');
          const phone = getValues('phone');
          const gstinNumber = getValues('gstinNumber');
          await verifyPanPhoneGstin(pan, phone, gstinNumber);
          setCurrentStep((prevStep) => prevStep + 1);
        } catch (error) {
          toast.error('Invalid information');
        }
      }
    }
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // const onSubmit = async (data) => {
  //   console.log(data)
  //   if (currentStep < 3) {
  //     setCurrentStep((prevStep) => prevStep + 1);
  //   } else {
  //     try {
  //       setLoading(true);
  //       const formData = new FormData();
  //       Object.keys(data).forEach((key) => formData.append(key, data[key]));
  //       await createSellerApi(formData);
  //       navigate('/verification-status');
  //     } catch (error) {
  //       console.log(error)
  //       toast.error(toast.error.message || 'An error occurred during registration.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  const onSubmit = async (data) => {
    console.log(data); // Debugging line
    if (currentStep < 3) {
      // If not on the last step, move to the next step
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      try {
        setLoading(true);
        const formData = new FormData();
  
        // Loop through the data keys to append each value to FormData
        Object.keys(data).forEach((key) => {
          if (key === 'registrationCertificate') {
            // Assuming it's a FileList, append the first file if it exists
            const fileList = data[key]; 
            if (fileList && fileList.length > 0) {
              formData.append('registrationCertificate', fileList[0]); // Append the first file
            }
          } else {
            formData.append(key, data[key]); // Append other form fields
          }
        });
  
        // Make the API call to create the seller
        await createSellerApi(formData);
        navigate('/verification-status'); // Navigate to the verification status page
      } catch (error) {
        console.log(error);
        // Show an error message if the registration fails
        toast.error(error.message || 'An error occurred during registration.');
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };
  

  return {
    loading,
    currentStep,
    handleNextStep,
    handleBackStep,
    register,
    handleSubmit,
    control,
    errors,
    trigger,
    getValues,
    onSubmit,
  };
};

export default useSellerForm;