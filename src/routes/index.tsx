import React from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'

import { useAppSelector } from '../redux/hooks'
import { toggleTheme } from '../redux/reducers/theme/themeReducer'

import Window from '../components/Window'

const electron = window.require("electron")

const MainRoute: React.FC = () => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.theme)

    const Screen1 = () => (
        <>
            <h1 style = {{color: 'white'}}>Screen1</h1>
            <Link to = "/screen2" style = {{color: 'cyan'}}>Go to screen2</Link>
            <button onClick = {() => dispatch(toggleTheme())}>Toggle theme {theme}</button>
            <button onClick = {() => electron.ipcRenderer.send('showMessage')}>Show Notification</button>
        </>
    )

    const Screen2 = () => (
        <>
            <h1 style = {{color: 'white'}}>Screen2</h1>
            <Link to = "/" style = {{color: 'cyan'}}>Go to screen1</Link>
        </>
    )

    return(

        <HashRouter>
            <Routes>
                <Route
                    index
                    element = {<Window.Render type = "center" name = "screen1" component = {<Screen1 />} />}
                />
                <Route
                    path = "/screen2"
                    element = {<Screen2 />}
                />
            </Routes>
        </HashRouter>

    )

}

export default MainRoute