import Accordian_Children from "../../../../components/Accordian_Children";

function Cheque_Management() {
return ( 
<div>
    {/*  Cheque Issuance  */}
    <Accordian_Children title='Cheque Issuance' label='label1' >  
            {/*  Issuance  */}
            <Accordian_Children title='Issuance' label='label1' >  
            </Accordian_Children>
            {/*  Enquiry  */}
            <Accordian_Children title='Enquiry' label='label1' >  
            </Accordian_Children>
    </Accordian_Children>
    {/*  Cheque Withdrawal  */}
    <Accordian_Children title='Cheque Withdrawal' label='label1' >  
           {/*  Withrawal  */}
           <Accordian_Children title='Withrawal' label='label1' > 
           </Accordian_Children>
           {/*  Enquiry  */}
           <Accordian_Children title='Enquiry' label='label1' > 
           </Accordian_Children> 
    </Accordian_Children>
    {/*  Cheque Transfer  */}
    <Accordian_Children title='Cheque Transfer' label='label1' >  
            {/*  Transfer  */}
           <Accordian_Children title='Transfer' label='label1' > 
           </Accordian_Children>
           {/*  Enquiry  */}
           <Accordian_Children title='Enquiry' label='label1' > 
           </Accordian_Children>
    </Accordian_Children>
    {/*  Enquiry Cheque  */}
    <Accordian_Children title='Enquiry Cheque' label='label1' >  
    </Accordian_Children>
    {/*  Payment Stop  */}
    <Accordian_Children title='Payment Stop' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry Payment Stop  */}
    <Accordian_Children title='Enquiry Payment Stop' label='label1' >  
    </Accordian_Children>
    {/*  Cancel Stop Payment  */}
    <Accordian_Children title='Cancel Stop Payment' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry Cancel Stop Payment  */}
    <Accordian_Children title='Enquiry Cancel Stop Payment' label='label1' >  
    </Accordian_Children>
    {/*  Returned Cheque  */}
    <Accordian_Children title='Returned Cheque' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry Returned Cheque  */}
    <Accordian_Children title='Enquiry Returned Cheque' label='label1' >  
    </Accordian_Children>
</div>

)}


export default Cheque_Management