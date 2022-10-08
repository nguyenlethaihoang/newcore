// Libraries
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
// Components
import customerApi from '../../../apis/customerApi';
import Block_Dialog from '../../../components/Block_Dialog';
import IndividualCustomer_Components from './IndividualCustomer_Components';
import CorporateCustomer_Components from './CorporateCustomer_Components';
import Block_Button from '../../../components/Block_Button';
// APIs
import countryApi from '../../../apis/countryApi';
import docTypeApi from '../../../apis/docTypeApi';
import mainIndustryApi from '../../../apis/mainIndustryApi';
import industryApi from '../../../apis/industryApi';
import mainSectorApi from '../../../apis/mainSectorApi';
import subSectorApi from '../../../apis/subSectorApi';
import cityApi from '../../../apis/cityApi';
import accountOfficerApi from '../../../apis/accountOfficerApi';
import Message_String from '../../../components/Message_String';
import Alert_String from '../../../components/Alert_String';

// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_Corporate({CustomerID}) {
  // Manage Disable
  const [isDisabledDialog, setIsDisabledDialog] = useState(true)
  const handleClick = () => {
      setIsDisabledDialog(true);
  };
  // Manage Dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setIsDisabledDialog(true);
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };

  // ------------------ DISPLAY ALERT ----------
      // Show notification
    // Notification of Accordian 1
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
        // Notification of Accordian 2
    const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
    const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
    const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)

  // ------------------ FETCH API ---------------
  // Fetch API City
  const [cityList, setCityList] = useState([]);useEffect(() => {const fetchCityList = async () => {try {const response = await cityApi.getAll();setCityList(response.rows)} catch (error) {console.log('Failed to fetch cityList: ', error)}}
      fetchCityList();}, [])
  // Fetch API Country
  const [countryList, setCountryList] = useState([]);useEffect(() => {const fetchCountryList = async () => {try {const response = await countryApi.getAll();setCountryList(response.rows)} catch (error) {console.log('Failed to fetch countryList: ', error)}}
      fetchCountryList();}, [])
  // Fetch API Doc Type
  const [docTypeList, setDocTypeList] = useState([]); useEffect(() => {const fetchDocTypeList = async () => {try {const response = await docTypeApi.getAll();setDocTypeList(response.rows)} catch (error) {console.log('Failed to fetch docTypeList: ', error)}}
      fetchDocTypeList();}, [])
  // Fetch API Main Industry
  const [mainIndustryList, setMainIndustryList] = useState([]);useEffect(() => {const fetchMainIndustryList = async () => {try {const response = await mainIndustryApi.getAll();setMainIndustryList(response.rows)} catch (error) {console.log('Failed to fetch mainIndustryList: ', error)}}
      fetchMainIndustryList();}, [])
  // Fetch API Sub Industry
  const [industryList, setIndustryList] = useState([]);useEffect(() => {const fetchIndustryList = async () => {try {const response = await industryApi.getAll();setIndustryList(response.data.subIndustry)} catch (error) {console.log('Failed to fetch industryList: ', error)}}
  fetchIndustryList();}, [])
  // Fetch API MainSector
  const [mainSectorList, setMainSectorList] = useState([]);useEffect(() => {const fetchMainSectorList = async () => {try {const response = await mainSectorApi.getAll();setMainSectorList(response.rows)} catch (error) {console.log('Failed to fetch mainSectorList: ', error)}}
  fetchMainSectorList();}, [])
  // Fetch API SubSector
  const [subSectorList, setSubSectorList] = useState([]);useEffect(() => {const fetchSubSectorList = async () => {try {const response = await subSectorApi.getAll();setSubSectorList(response.data.subsector)} catch (error) {console.log('Failed to fetch subSectorList: ', error)}}
  fetchSubSectorList();}, [])
  // Fetch API Account Officer
  const [accountOfficerList, setAccountOfficerList] = useState([]);useEffect(() => {const fetchAccountOfficerList = async () => {try {const response = await accountOfficerApi.getAll();setAccountOfficerList(response.rows)} catch (error) {console.log('Failed to fetch accountOfficer: ', error)}}
  fetchAccountOfficerList();}, [])
  // Fetch API Customer
  const [customerList, setCustomerList] = useState([]);useEffect(() => {const fetchCustomerList = async () => {try {const response = await customerApi.getAll();setCustomerList(response.data.customer)} catch (error) {console.log('Failed to fetch customerlist: ', error)}};fetchCustomerList();}, [])
  // Fetch API Customer
  const [customerItem, setCustomerItem] = useState([]);
  useEffect(() => 
  {const fetchCustomerItem = async () => 
    {
      try {
        const response = await customerApi.getCorporate(CustomerID);
        console.log("customer item")
        console.log(response.data)
        setCustomerItem(response.data)} 
      catch (error) {
        console.log('Failed to fetch customerItem: ', error)
      }
    };
    fetchCustomerItem();
  }, [])


  // CONVERT TO ID
  function resolveNameID(object, text) {
    let temp = null
    object.map((data, index) => {
      if (data.Name == text)
      {
      temp = data.id.toString()
      
      }
    })
    return temp 
  }
    // rersolve from text to id with Code
    function resolveCodeID(object, text) {
    let temp = null
    object.map((data, index) => {
      if (data.Code == text)
      {
        temp = data.id.toString()
          
      }
    })
        return temp
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
            style: {
            //   backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
      >
        <AppBar sx={{ position: 'relative' , backgroundColor: '#d71921'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Corporate Customer - Customer ID: {CustomerID}
            </Typography>
            <Button autoFocus color="inherit" onClick={async () => {

                let params = {}
                params.GBShortName = document.getElementById('txt_GBShortName_OpenCorporate_Popup').value;
                params.GBFullName = document.getElementById('txt_GBFullName_OpenCorporate_Popup').value;
                params.IncorpDate = document.getElementById('dp_IncorpDate_OpenCorporate_Popup').value;

                params.GBStreet = document.getElementById('txt_GBStreet_OpenCorporate_Popup').value;
                params.GBTownDist = document.getElementById('txt_GBTownDist_OpenCorporate_Popup').value;
                params.CityProvince = resolveNameID(cityList, document.getElementById('slt_CityProvince_OpenCorporate_Popup').innerText);
                params.GBCountry = resolveCodeID(countryList,document.getElementById('slt_GBCountry_OpenCorporate_Popup').innerText);
                params.Nationality = resolveCodeID(countryList,document.getElementById('slt_Nationality_OpenCorporate_Popup').innerText);
                params.Residence = resolveCodeID(countryList,document.getElementById('slt_Residence_OpenCorporate_Popup').innerText);
                params.DocType = resolveNameID(docTypeList,document.getElementById('slt_DocType_OpenCorporate_Popup').innerText);
                params.DocID = document.getElementById('txt_DocID_OpenCorporate_Popup').value;
                params.DocIssuePlace = document.getElementById('dp_DocIssuePlace_OpenCorporate_Popup').value;
                params.DocIssueDate = document.getElementById('dp_DocIssueDate_OpenCorporate_Popup').value;
                params.DocExpiryDate = document.getElementById('dp_DocExpiryDate_OpenCorporate_Popup').value;

                params.ContactPerson = document.getElementById('txt_ContactPerson_OpenCorporate_Popup').value;
                params.Position = document.getElementById('txt_Position_OpenCorporate_Popup').value;
                params.Telephone = document.getElementById('txt_Telephone_OpenCorporate_Popup').value;
                params.EmailAddress = document.getElementById('txt_EmailAddress_OpenCorporate_Popup').value;
                params.Remarks = document.getElementById('txt_Remarks_OpenCorporate_Popup').value;

                params.MainSector = resolveNameID(mainSectorList,document.getElementById('slt_MainSector_OpenCorporate_Popup').innerText);
                params.SubSector = resolveNameID(subSectorList,document.getElementById('slt_SubSector_OpenCorporate_Popup').innerText);
                params.MainIndustry = resolveNameID(mainIndustryList,document.getElementById('slt_MainIndustry_OpenCorporate_Popup').innerText);
                params.Industry = resolveNameID(industryList,document.getElementById('slt_Industry_OpenCorporate_Popup').innerText);
                params.AccountOfficer = resolveNameID(accountOfficerList,document.getElementById('slt_AccountOfficer_OpenCorporate_Popup').innerText);
                arrError = []
                if (document.getElementById('txt_GBShortName_OpenCorporate_Popup').value.length <= 2)
                        arrError.push('GB Short Name is Required')
                if (document.getElementById('txt_GBFullName_OpenCorporate_Popup').value.length <= 2)
                        arrError.push('GB Full Name is Required')
                if (document.getElementById('txt_GBStreet_OpenCorporate_Popup').value.length == 0)
                        arrError.push('GB Street is Required')
                if (document.getElementById('txt_GBTownDist_OpenCorporate_Popup').value.length == 0)
                        arrError.push('GB Town/Dist is Required')
                        
                if (resolveNameID(cityList,document.getElementById('slt_CityProvince_OpenCorporate_Popup').innerText) === null)
                        arrError.push('City/Province is Required')
                if (resolveNameID(docTypeList,document.getElementById('slt_DocType_OpenCorporate_Popup').innerText) === null)
                        arrError.push('Doc Type is Required')
                if (document.getElementById('txt_DocID_OpenCorporate_Popup').value.length == 0) 
                        arrError.push('Doc ID is Required')
                if (resolveNameID(mainIndustryList,document.getElementById('slt_MainIndustry_OpenCorporate_Popup').innerText) === null)
                        arrError.push('Main Industry is Required')
                if (resolveNameID(industryList,document.getElementById('slt_Industry_OpenCorporate_Popup').innerText) === null)
                        arrError.push('Industry is Required')
                        if (
                        arrError.length == 0
                ) {
                  
                    const res = await customerApi.updateCorporate(params, CustomerID);
                    if(res != 'fail') {
                      setIsNotification_Success_01(true); 
                      setTimeout(() => {setIsNotification_Success_01(false)}, 3000);
                      setTimeout(() => {handleClose();}, 3000);
                    } else {
                      setIsNotification_Failed_01(true)
                      setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                    }

                } else {
                    setIsNotification_Message_01(true)
                    setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
                }


            }}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Block_Button>
            <Button
                variant="contained"
                endIcon={<EditIcon />}
                onClick={() => {
                    setIsDisabledDialog(false)
                }}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                endIcon={<PrintIcon />}
                onClick={() => {
                }}
            >
                Print
            </Button>
        </Block_Button>
        {(isDisabledDialog) && <CorporateCustomer_Components suffixID={'OpenCorporate_Popup'} forceDisable={isDisabledDialog} object={customerItem}/>}
        {(!isDisabledDialog) && <CorporateCustomer_Components suffixID={'OpenCorporate_Popup'} forceDisable={false} object={customerItem}/>}

        {isNotification_Success_01 && <Message_String type='success' text='Update Corporate Customer Successfully'/>} 
        {isNotification_Failed_01 && <Message_String type='error' text='Update Corporate Customer Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
      </Dialog>
    </div>
  );
}