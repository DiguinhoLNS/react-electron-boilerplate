import React from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Window from '../components/Window'

const MainRoute: React.FC = () => {

    const Screen1 = () => (
        <>
            <h1 style = {{color: 'white'}}>Screen1</h1>
            <Link to = "/screen2" style = {{color: 'cyan'}}>Go to screen2</Link>
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