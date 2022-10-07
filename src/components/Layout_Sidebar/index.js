import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const SidebarNav = styled.nav`
  background: #d71921;
  width: 20%;
  height: 100%;
  display: flex;
  position: fixed;
  // justify-content: center;
  transition: 350ms;
  // z-index: 10;
  // border-radius: 0px 10px 0px 0px;
  align-items: start;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Layout_Sidebar = () => {

  return (
    // <div>
    //   <IconContext.Provider value={{color: '#fff'}}>
    //     {/* <Nav>/
    //         <NavIcon to="#">
    //         <FaIcons.FaBars onClick={showSidebar} />
    //         </NavIcon>
    //     </Nav> */}
    //     <SidebarNav >
    //         <SidebarWrap>
    //           {SidebarData.map((item, index) => {
    //               return <SubMenu item={item} key={index} />;
    //           })}
    //         </SidebarWrap>
    //     </SidebarNav>
    //   </IconContext.Provider>
    // </div>

    <div>
          <IconContext.Provider value={{color: '#fff'}}>  
              <SidebarNav >
                <SidebarWrap>
                  {SidebarData.map((item, index) => {
                      return <SubMenu item={item} key={index} />;
                      // console.log(`SidebarData ${item} ${index}`)
                      // console.log(item)
                  })}
                </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
    </div>
  );
};

export default Layout_Sidebar;
