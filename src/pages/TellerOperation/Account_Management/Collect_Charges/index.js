import Accordian_Children from "../../../../components/Accordian_Children";

function Collect_Charges() {
return ( 
<div>
    {/*  From Account  */}
    <Accordian_Children title='From Account' label='label1' >  
    </Accordian_Children>
    {/*  By Cash  */}
    <Accordian_Children title='By Cash' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry  */}
    <Accordian_Children title='Enquiry' label='label1' >  
    </Accordian_Children>
</div>
);
}

export default Collect_Charges;