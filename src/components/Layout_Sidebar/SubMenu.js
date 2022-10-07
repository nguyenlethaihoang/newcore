import React, { useState } from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarTest01 = styled(Link)`
display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    // padding: 10px;
    padding: 10px;
    list-style: none;
    height: 70px;
    text-decoration: none;
    font-size: 19px;
    // border-radius: 0px 10px 0px 0px;

    &:hover {
        // background: #252831;
        background: #b33939;
        border-left: 4px solid #632ce4
        cursor: pointer
        border-radius: 0px 10px 0px 0px;
    }
`

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    // padding: 10px;
    padding: 10px;
    list-style: none;
    height: 70px;
    text-decoration: none;
    font-size: 19px;
    // border-radius: 0px 10px 0px 0px;

    &:hover {
        // background: #252831;
        background: #b33939;
        border-left: 4px solid #632ce4
        cursor: pointer
        border-radius: 0px 10px 0px 0px;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    // background: #414757;
    // background: #e84118;
    background: #EA2027;
    height: 60px;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 16px;

    &:hover {
        // background: #632ce4;
        background: #b33939;
        cursor: pointer;
    }
`

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            {/* <BrowserRouter> */}
            <SidebarTest01 
                to={item.path} 
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                    <div>
                        {item.subNav && subnav 
                            ? item.iconOpened 
                            : item.subNav 
                            ? item.iconClosed
                            : null
                        }
                    </div>
            </SidebarTest01>
            {/* <div
                className='SidebarTest'
            >
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                    <div>
                        {item.subNav && subnav 
                            ? item.iconOpened 
                            : item.subNav 
                            ? item.iconClosed
                            : null
                        }
                    </div>
            </div> */}
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to ={item.path}
                        key={index}
                    >
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
            {/* </BrowserRouter> */}
        </>
    )
}

export default SubMenu

