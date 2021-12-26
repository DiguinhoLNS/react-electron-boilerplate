import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { reactLocalStorage as ls } from 'reactjs-localstorage'

import '../styles.scss'

import { useAppSelector } from '../../../redux/hooks'
import { setTheme, Theme } from '../../../redux/reducers/theme/themeReducer'

import Header from '../header'

const Container: React.FC = ({ children }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.theme)

    useLayoutEffect(() => {
        const lsTheme = ls.get('theme') as Theme | undefined
        const matchTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light

        if(!!lsTheme) dispatch(setTheme(lsTheme))
        else dispatch(setTheme(matchTheme))
    }, [dispatch])

    return(

        <div id = "windowWrapper" className = {theme}>
            <Header />
            <div id = "windowContainer">{children}</div>
        </div>

    )

}

export default Container