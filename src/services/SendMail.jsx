
import emailjs from '@emailjs/browser';

export const SendMail = async (templateID, dataForm) => {
  try {
    const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    //const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    const response = await emailjs.sendForm(serviceID, templateID, dataForm, apiKey);
    return response.text;
  } catch (error) {
    throw new Error(error);
  }
};


export default SendMail


