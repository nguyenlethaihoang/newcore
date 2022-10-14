import Accordian_Children from "../../../../components/Accordian_Children";
import ChargeCollection_Component from "./ChargeCollection_Component";
import ChargeCollection_Cash_Component from "./ChargeCollection_Cash_Component"

function Collect_Charges() {
return ( 
<div>
    {/*  From Account  */}
    <Accordian_Children title='From Account' label='label1' >  
        <ChargeCollection_Component suffixID="ChargeAccount" />
    </Accordian_Children>
    {/*  By Cash  */}
    <Accordian_Children title='By Cash' label='label1' >  
        <ChargeCollection_Cash_Component suffixID="ChargeCash" />
    </Accordian_Children>
    {/*  Enquiry  */}
    <Accordian_Children title='Enquiry' label='label1' >  
    </Accordian_Children>
</div>
);
}

export default Collect_Charges;