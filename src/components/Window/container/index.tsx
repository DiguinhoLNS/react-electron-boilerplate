import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import '../styles.scss'

import { useAppSelector } from '../../../redux/hooks'

import Header from '../header'
import configTheme from '../../../utils/configTheme'

const Container: React.FC = ({ children }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.theme)

    useEffect(() => {configTheme({dispatch})}, [dispatch])

    return(

        <div id = "windowWrapper" className = {theme}>
            <Header />
            <div id = "windowContainer">{children}</div>
        </div>

    )

}

export default Container