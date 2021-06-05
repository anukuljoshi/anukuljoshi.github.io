import React, { useState } from 'react';

import Header from '../components/navbar/Header';
import SidebarNav from '../components/navbar/SidebarNav';

function NavbarContainer() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
            <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}></Header>
            <SidebarNav sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}></SidebarNav>
        </>
    )
}

export default NavbarContainer
