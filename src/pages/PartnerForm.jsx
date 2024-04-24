import React, { useRef } from 'react';
import SendMail from '../services/SendMail';
import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/formBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";
import SimpleAlert from '../components/alerts/SimpleAlert';
import Legislation from "../components/form/Legislation";
import Tax from '../components/form/Tax';

function PartnerForm() {
  const refForm = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
   const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID_PARTNER; 
          try {
            const result = await SendMail(templateID, refForm.current);
            SimpleAlert ({ icon: 'success', text: "Su petición ha sido enviada con éxito. Revise su email." });
          } catch (error) {
            SimpleAlert ({ icon: 'error', text: 'Ha ocurrido un error en el envío de sus datos. Por favor inténtelo más tarde o póngase en contacto con casadeacogidaguia@hotmail.es.' });
          }
  };

        return (
          <div className="md:w-[80%] w-[90%] mx-auto">
            <form ref={refForm} onSubmit={handleSubmit}>
                <TitleAllForm />
                <FormBlue />
                <MoneySelect />
                <Periodicity />
                <BankBlue />
                <DonationOption />
                <SendButtonForm />  
            </form>
                
                
                <Tax />
                <Legislation/>                           
          </div>
        );
      }

export default PartnerForm;

