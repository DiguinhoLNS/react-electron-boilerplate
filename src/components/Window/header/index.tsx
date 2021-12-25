import React from 'react'
import { Icon as MdiIcon } from '@mdi/react'
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize, mdiWindowRestore } from '@mdi/js'

const Header: React.FC = () => {

    const Content: React.FC <{name: string}> = ({ children, name }) => (
        <div className = {`windowHeaderContent ${name}`}>{children}</div>
    )

    const Icon: React.FC <{name: string, icon: string}> = ({ name, icon }) => (
        <div id = {`${name}-button`} className = {`button ${name}`}>
            <MdiIcon path = {icon} className = "icon" size = "18px" />
        </div>
    )

    return(

        <div id = "windowHeader">
            <div id = "windowHeaderContainer">
                <Content name = "title">
                    <span>Electron App</span>
                </Content>
                <Content name = "controls">
                    <Icon name = "min" icon = {mdiWindowMinimize} />
                    <Icon name = "max" icon = {mdiWindowMaximize} />
                    <Icon name = "restore" icon = {mdiWindowRestore} />
                    <Icon name = "close" icon = {mdiWindowClose} />
                </Content>
            </div>
        </div>

    )

}

export default Header