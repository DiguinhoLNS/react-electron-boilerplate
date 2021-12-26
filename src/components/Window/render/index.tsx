import React from 'react'

import { WindowRenderProps } from '../types'

const Render: React.FC <WindowRenderProps> = ({ type, name, component }) => {

    const renderType = type ?? 'default'

    return(

        <div id = "pageWrapper" className = {`windowRender ${renderType}`} data-page = {name} data-render = {renderType}>
            <div id = "pageContainer" className = "scroll">{component}</div>
        </div>

    )

}

export default Render