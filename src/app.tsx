import React from "react"
import { Provider as ReduxProvider } from 'react-redux'

import './styles/base/app.scss'

import store from "./redux/store"

import Window from "./components/Window"
import MainRoute from "./routes"

const App: React.FC = () => {

    return(

        <ReduxProvider store = {store}>
            <Window.Container>
                <MainRoute />
            </Window.Container>
        </ReduxProvider>

    )

}

export default App