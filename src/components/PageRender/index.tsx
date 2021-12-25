import React, { useEffect } from 'react'

import { PageRenderProps } from './types'

import './styles.scss'

import { useAppSelector } from '../../redux/hooks'

import ScrollReset from '../../utils/scrollReset'

const PageRender: React.FC <PageRenderProps> = ({ children, renderType, pageName, pageTitle, className, renderComponent, renderRoute }) => {

    const { theme } = useAppSelector(state => state.theme)

    useEffect(() => {
        if(pageTitle && !renderRoute) document.title = pageTitle 
    }, [pageTitle, renderRoute])

    return(

        <>
            {(renderRoute && null) || (
                <div 
                    id = "wrapper" 
                    className = {`${renderType ?? 'default'} ${theme}${className ?? ''}`} 
                    data-render = {renderType ?? 'default'} 
                    data-page = {pageName} 
                    data-theme = {theme}
                >
                    {(renderType && ['center', 'form'].includes(renderType) && (renderComponent || children)) || (
                        <>
                            <main id = {`main${pageName}`}>
                                <div id = "mainContainer">{children ?? renderComponent}</div>
                            </main>
                        </>
                    )}
                    <ScrollReset />
                </div>
            )}
            
        </>

    )

}

export default PageRender