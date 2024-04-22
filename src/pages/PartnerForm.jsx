import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/formBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";
import Legislation from "../components/form/Legislation"
import Tax from "../components/form/Tax";

function PartnerForm() {
  return (
    <div className="w-[80%] mx-auto">
      
      <section className="">
        <TitleAllForm />
        <FormBlue />
      </section>
      <section className="">
        
        <MoneySelect />
        <Periodicity />
        <BankBlue />
        <DonationOption />
        <SendButtonForm />
      </section>
        <Tax/>
        <Legislation/>
      
    </div>
  );
}

export default PartnerForm;
