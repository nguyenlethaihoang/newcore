import Accordian_Children from "../../../../components/Accordian_Children";

function Account_Transaction() {
return ( 
<div>
    {/*  Customer/Interbranch Transaction  */}
    <Accordian_Children title='Customer/Interbranch Transaction' label='label1' >  
        {/*  Cash Deposits  */}
        <Accordian_Children title='Cash Deposits' label='label1' >  
        </Accordian_Children>
        {/*  Cash Withdrawal  */}
        <Accordian_Children title='Cash Withdrawal' label='label1' >  
        </Accordian_Children>
        {/*  Transfer Withdrawal  */}
        <Accordian_Children title='Transfer Withdrawal' label='label1' >  
        </Accordian_Children>
        {/*  Enquiry  */}
        <Accordian_Children title='Enquiry' label='label1' >  
        </Accordian_Children>
    </Accordian_Children>
    {/*  Credit Card Payment  */}
    <Accordian_Children title='Credit Card Payment' label='label1'> 
        {/*  Collection For Credit Card Payment  */}
        <Accordian_Children title='Collection For Credit Card Payment' label='label1' >  
        </Accordian_Children>
        {/*  Transfer For Credit Card Payment  */}
        <Accordian_Children title='Transfer For Credit Card Payment' label='label1' >  
        </Accordian_Children>
        {/*  Enquiry  */}
        <Accordian_Children title='Enquiry' label='label1' >  
        </Accordian_Children> 
    </Accordian_Children>
</div>
);
}

export default Account_Transaction;