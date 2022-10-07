import './Block_Children.css'

function Block_Children(props) {
    return ( 
        <div className='main_Block_Children'>
            <div
                className="header1"
            >{props.header1}</div>
            <div
                className="header2"
            >{props.header2}</div>
            <div
                style={{ 
                    display: "flex", 
                    // width: "100%", 
                    flexWrap: "wrap"
                }}
            >
                {props.children}
            </div>
            
        </div>
     );
}

export default Block_Children;