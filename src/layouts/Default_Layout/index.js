import Layout_Header from "../../components/Layout_Header";
import Layout_Sidebar from "../../components/Layout_Sidebar";
import './Default_Layout.css'

function Default_Layout(props) {
    return ( 
        <div className='df-wrapper'>
                <div className='df-header'>
                        <Layout_Header />
                </div >
                <div className='df-below-header'>
                        <div className='df-sidebar'>
                                <Layout_Sidebar />
                        </div>
                        <div className='df-children'>
                                {props.children}
                        </div>
                </div>
        </div>
     );
}

export default Default_Layout;