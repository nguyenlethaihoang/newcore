import Accordian_Children from "../../../../components/Accordian_Children";

function Salary_Payment() {
return ( 
<div>
    {/*  Payment Frequency  */}
    <Accordian_Children title='Payment Frequency' label='label1' >  
    </Accordian_Children>
    {/*  Payment Non-Frequency  */}
    <Accordian_Children title='Payment Non-Frequency' label='label1' >  
    </Accordian_Children>
</div>
);
}

export default Salary_Payment;