import React from "react"
import { Provider as ReduxProvider } from 'react-redux'

import './styles/base/app.scss'

import store from "./redux/store"

const App: React.FC = () => {

    return(

        <ReduxProvider store = {store}>
            <h1>Hello React</h1>
        </ReduxProvider>

    )

}

export default App