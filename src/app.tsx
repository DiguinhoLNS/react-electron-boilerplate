import React from "react"
import { Provider as ReduxProvider } from 'react-redux'

import './styles/base/app.scss'

import store from "./redux/store"

import Window from "./components/Window"

const App: React.FC = () => {

    return(

        <ReduxProvider store = {store}>
            <Window.Container>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, et cumque laudantium earum sit distinctio optio libero voluptatem, fugit sequi dolorum consequatur tenetur vero nulla unde at accusantium quam eligendi?</h1>
            </Window.Container>
        </ReduxProvider>

    )

}

export default App