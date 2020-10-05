import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Inicio',
        path: '',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Formularios',
        path: '/abm-formularios',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Usuarios',
        path: '/abm-usuarios',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
]