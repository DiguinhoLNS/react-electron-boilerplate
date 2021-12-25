import React from "react"
import { Provider as ReduxProvider } from 'react-redux'

import './styles/base/app.scss'

import store from "./redux/store"

import WindowHeader from "./components/WindowHeader"

const App: React.FC = () => {

    return(

        <ReduxProvider store = {store}>
            <WindowHeader />
            <h1 style = {{paddingTop: 32}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, et cumque laudantium earum sit distinctio optio libero voluptatem, fugit sequi dolorum consequatur tenetur vero nulla unde at accusantium quam eligendi?</h1>
        </ReduxProvider>

    )

}

export default App