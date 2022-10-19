import Accordian_Children from "../../../../components/Accordian_Children";
import PaymentFrequency_Components from "./PaymentFrequency_Components";

function Salary_Payment() {
return ( 
<div>
    {/*  Payment Frequency  */}
    <Accordian_Children title='Payment Frequency' label='label1' >  
        <PaymentFrequency_Components />
    </Accordian_Children>
    {/*  Payment Non-Frequency  */}
    <Accordian_Children title='Payment Non-Frequency' label='label1' >  
        <PaymentFrequency_Components />

    </Accordian_Children>
</div>
);
}

export default Salary_Payment;