 import { axiosInstance } from '../config/axiosInstance';

export const createSellerApi = (formData) => {
  console.log(formData)
  return axiosInstance({
    method: 'POST',
    url: '/seller/signin',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const verifyEmail = (email) => {
  return axiosInstance({
    method: 'POST',
    url: '/seller/verification-one',
    data: { email },
  });
};

export const verifyPanPhoneGstin = (pan, phone, gstinNumber) => {
  return axiosInstance({
    method: 'POST',
    url: '/seller/verification-two',
    data: { pan, phone, gstinNumber },
  });
};
