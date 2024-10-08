import React from 'react';
import ProgressIndicator from '../compoenents/ProgressIndicator';
import Spinner from '../compoenents/LoadingComponent';
import useSellerForm from '../hooks/useSellerForm';


export default function SellerSignUp() {

      const {
    loading,
    currentStep,
    handleNextStep,
    handleBackStep,
    register,
    handleSubmit,
    control,
    getValues,
    errors,
    onSubmit,
    trigger,
  } = useSellerForm({ mode: 'onChange'})


  if (loading) {
    return <Spinner />
  }

  return (
    <div className="  min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
    
      <div className="w-full max-w-5xl flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold text-green-900">Trends</h1>
        <ProgressIndicator currentStep={currentStep} />
      </div>
      
    
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Your Seller Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 1 && (
            <>
              <div >
                <input
             
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200  "
                  placeholder="Enter name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password length should be more than six characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>

              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === getValues("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )}
              </div>

            </>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Business Name"
                  {...register("businessName", { required: "Business Name is required" })}
                />
                {errors.businessName && <span className="text-red-500 text-sm">{errors.businessName.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="City"
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="State"
                  {...register("state", { required: "State is required" })}
                />
                {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Postal Code"
                  {...register("postalCode", { required: "Postal Code is required" })}
                />
                {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="enter phone number"
                  {...register("phone", { required: "phone number is required" })}
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="PAN Number"
                  {...register("pan", {
                    required: "PAN Number is required",
                    pattern: {
                      value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                      message: "Invalid PAN Number format. It should be 5 letters, 4 digits, and 1 letter."
                    }
                  })}
                  onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                />
                {errors.pan && <span className="text-red-500 text-sm">{errors.pan.message}</span>}
              </div>

              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="GSTIN Number"
                  {...register("gstinNumber", {
                    required: "GSTIN Number is required",
                    pattern: {
                      value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
                      message: "Invalid GSTIN format. Please enter a valid GSTIN."
                    }
                  })}
                  onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                />
                {errors.gstinNumber && <span className="text-red-500 text-sm">{errors.gstinNumber.message}</span>}
              </div>

              <div>
                <label htmlFor="registrationCertificate" className="block text-gray-700 font-medium mb-2 mt-8 ml-4">
                  Upload Registration Certificate
                </label>
                <input
                  id="registrationCertificate"
                  type="file"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  {...register("registrationCertificate", { required: "Registration Certificate is required", })}
                />
                {errors.registrationCertificate && (
                  <span className="text-red-500 text-sm">{errors.registrationCertificate.message}</span>
                )}

              </div>


              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Pickup Location"
                  {...register("pickupLocation", { required: "Pickup Location is required" })}
                />
                {errors.pickupLocation && <span className="text-red-500 text-sm">{errors.pickupLocation.message}</span>}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Account Holder Name"
                  {...register("accountHolderName", { required: "Account Holder Name is required" })}
                />
                {errors.accountHolderName && <span className="text-red-500 text-sm">{errors.accountHolderName.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Account Number"
                  {...register("accountNumber", { required: "Account Number is required" })}
                />
                {errors.accountNumber && <span className="text-red-500 text-sm">{errors.accountNumber.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="Bank Name"
                  {...register("bankName", { required: "Bank Name is required" })}
                />
                {errors.bankName && <span className="text-red-500 text-sm">{errors.bankName.message}</span>}
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
                  placeholder="IFSC Code"
                  {...register("ifsc", {
                    required: "IFSC Code is required",
                    pattern: {
                      value: /^[A-Z]{4}[0-9]{7}$/,
                      message: "Invalid IFSC Code format. It should be 4 letters followed by 7 digits."
                    }
                  })}
                  onInput={(e) => e.target.value = e.target.value.toUpperCase()} 
                />

                {errors.ifsc && <span className="text-red-500 text-sm">{errors.ifsc.message}</span>}
              </div>

            </div>
          )}

          <div className="flex justify-between items-center mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBackStep}
                className="px-6 py-3 bg-gray-300 text-white rounded-md hover:bg-gray-400 transition duration-200"
              >
                Back
              </button>
            )}
            <div>
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
