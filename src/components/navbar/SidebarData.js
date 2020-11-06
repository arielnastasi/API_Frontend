import React from 'react'
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Formularios',
        path: '/abm-formularios',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text',
        role: 'USER'
    },
    {
        title: 'Usuarios',
        path: '/abm-usuarios',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text',
        role: 'ADMIN'
    },
]